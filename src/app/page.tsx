'use client'

import MainContent from "@/components/main-content";
import MainNavBar from "@/components/main-navbar";
import { TasksContext } from "@/context/tasks-context";
import { initialTasksSection, tasksSectionReducer } from "@/context/tasks-reducer";
import { useReducer } from "react";

export default function Home() {

  const [taskState, dispatch] = useReducer(
    tasksSectionReducer,
    initialTasksSection
  );

  return (
    <TasksContext.Provider value={{ state: taskState, dispatch }}>
      <main className="flex min-h-screen">
        <MainNavBar />
        <MainContent />
      </main>
    </TasksContext.Provider>
  );
}
