"use client";

import Button from "@/components/Button";
import Column from "@/components/Column";
import ModalTaks from "@/components/ModalTask";
import { COLUMNS, INITIAL_TASKS } from "@/constants/Task.constans";
import { ITask} from "@/types/Task";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";


export default function Home() {

  const [tasks, setTasks] = useState<ITask[]>([...INITIAL_TASKS])
  const [showModal, setShowModal] = useState<boolean>(false);

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

  const handleCreateTask = (e: React.ChangeEvent<HTMLFormElement>) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget)

    const newTask: ITask = {
      id:  String(tasks.length + 1),
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
              <Column key={kolom.id} column={kolom}  task={tasks.filter((task) => task.status === kolom.id)}/>
            ))
          }

        </DndContext>

      </div>

      {showModal && <ModalTaks onCancel={handleShowModalClose} onSubmit={handleCreateTask}/> }
    </section>
  );
}
