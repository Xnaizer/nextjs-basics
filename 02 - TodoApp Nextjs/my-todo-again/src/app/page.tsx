"use client"

import Buttons from "@/components/Buttons";
import Columns from "@/components/Columns";
import ModalConfirm from "@/components/ModalConfirm";
import ModalTask from "@/components/ModalTask";
import { COLUMNS, INITIAL_TASKS } from "@/Constant/Task.constans";
import { ITask } from "@/types/task";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {  useEffect, useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useState<ITask[]>([...INITIAL_TASKS]);
  // tasks disini akan membungkus semua hal terkait data card yang nantinya akan digunakan
  const [showModal, setShowModal] = useState<boolean>(false);
  // showModal ini digunakan untuk menjadi penutup dan pembuka card
  const [activeTask, setActiveTask] = useState<{
    activity: string,
    task: ITask
  } | null > (null);

  console.log(activeTask?.activity)
  console.log(activeTask?.task)

  useEffect(() => {
    const setDataTask = localStorage.getItem('task');

    if(setDataTask) {
      setTasks(JSON.parse(setDataTask));
    }
    
  },[setTasks]);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  },[tasks]);

  const handleShowModalOpen = () => {
    setShowModal(true);
  }

  const handleShowModalClose = () => {
    setShowModal(false)
  }

  const handleCreateTask = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newTask: ITask = {
      id: String(Date.now()),
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      status: 'NEW'
    }

    setTasks((prev) => [...prev, newTask])
    e.currentTarget.reset();
    setShowModal(false);
  }

  const handleUpdateTask = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateData = new FormData(e.currentTarget);

    const updatedData: ITask = {
      id: activeTask?.task.id as string,
      title: updateData.get('title') as string,
      description: updateData.get('description') as string,
      status: activeTask?.task.status as ITask['status']
    } 
    setTasks((prev) => [...prev, updatedData])
    e.currentTarget.reset();
    setActiveTask(null);
  }

  const handleDragEnd = (event : DragEndEvent) => {
    const {active, over} = event;

    if(!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as ITask['status'];

    const newDragTask = tasks.map((item) => {
      return item.id === taskId? {
        ...item,
        status: newStatus
      } : item
    });

    setTasks(newDragTask);

  }

  const handleDeleteTask = () => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== activeTask?.task.id)
    )
  }

  return (
      <section className="min-h-screen p-4 flex flex-col">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-neutral-700">To Do List App</h1>
          <Buttons onClick={handleShowModalOpen}>Add Task</Buttons>
        </div>

        <div className="flex gap-8 flex-1">
          <DndContext onDragEnd={handleDragEnd}>
            {
              COLUMNS.map((item) => (
                <Columns
                key={item.id}
                column={item}
                task={tasks.filter((task) => task.status === item.id)}
                setActiveTask={setActiveTask}
                ></Columns>
              ))
            }
          </DndContext>

        </div>

        {showModal && <ModalTask onCancel={handleShowModalClose} onSubmit={handleCreateTask}/> }

        {activeTask?.activity === 'update' && (
        <ModalTask
          onSubmit={handleUpdateTask} 
          onCancel={() => setActiveTask(null)}
          activeTask={activeTask.task}
          type="Edit"
        />
      )}

      {activeTask?.activity === 'delete' && (
        <ModalConfirm
          onConfirm={handleDeleteTask} 
          onCancel={() => setActiveTask(null)}
          title="Delete Task!"
          message="Are you sure you want to delete di task?"
          type="Delete"
        />
      )}


      </section>
  );
}
