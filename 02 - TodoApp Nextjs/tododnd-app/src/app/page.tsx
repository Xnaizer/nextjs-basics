"use client";

import Button from "@/components/Button";
import Column from "@/components/Column";
import ModalConfirm from "@/components/ModalConfirm";
import ModalTaks from "@/components/ModalTask";
import { COLUMNS, INITIAL_TASKS } from "@/constants/Task.constans";
import { ITask} from "@/types/Task";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";


export default function Home() {

  const [tasks, setTasks] = useState<ITask[]>([...INITIAL_TASKS])
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeTask, setActiveTask] = useState<{
    activity: string;
    task: ITask;
  }| null>(null)

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');

    if(storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  },[setTasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks]);

  const handleShowModalOpen = () => {
    setShowModal(true);
  }

  const handleShowModalClose = () => {
    setShowModal(false);
  }


  const handleUpdateTask = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)

    const updatedTask: ITask = {
      id:  activeTask?.task.id as string,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      status: activeTask?.task.status as ITask['status']

    }

    setTasks(
      (prev) => prev.map(
        (taskses) => taskses.id === updatedTask.id ? updatedTask : taskses
      )
    );
    e.currentTarget.reset();
    setActiveTask(null)



  }

  const handleCreateTask = (e: React.ChangeEvent<HTMLFormElement>) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget)

    const newTask: ITask = {
      id:  String(Date.now()) ,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      status: 'TODO'

    }

    setTasks((prev) => [...prev, newTask]);
    e.currentTarget.reset();
    setShowModal(false)

  }

  const handleDragEnd = (event: DragEndEvent) => {
    const {active, over} = event;
    // console.log(active)
    // console.log(over)

    if(!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as ITask['status'];

    const newTasks = tasks.map((task) => {
      return task.id === taskId ? {
        ...task,
        status: newStatus,
      } : task;
    })

    setTasks(newTasks);
  }

  const handleDeleteTask = () => {
    setTasks((prev) => 
      prev.filter((task) => task.id !== activeTask?.task.id)
  )
  setActiveTask(null)
  }



  return (
    <section className="min-h-screen p-4 flex flex-col">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-700">
          To Do List App

        </h1>

        <Button onClick={handleShowModalOpen}>Add Task</Button>
      </div>
      
      <div className="flex gap-8 flex-1">
        <DndContext onDragEnd={handleDragEnd}>

          {
            COLUMNS.map((kolom) => (
              <Column 
              key={kolom.id} 
              column={kolom}  
              task={tasks.filter((task) => task.status === kolom.id)}
              setActiveTask={setActiveTask}
              />
            ))
          }

        </DndContext>

      </div>

      {showModal && <ModalTaks onCancel={handleShowModalClose} onSubmit={handleCreateTask}/> }

      {activeTask?.activity === 'update' && (
        <ModalTaks 
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
