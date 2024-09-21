'use client'

import React, { useReducer } from 'react'
import SearchTask from './search-task'
import ListTaskSection from './list-task-section'
import DailyTask from './daily-task'
import ProfileUser from './profile-user'
import { TaskContext } from '@/context/task-context'
import { DTaskSection } from '@/lib/data'
import { initialTasksSection, tasksSectionReducer, TypeDispatchTaskSection } from '@/context/tasks-reducer'
import { ITaskSection } from '@/lib/interface'
import { TasksContext } from '@/context/tasks-context'

const MainNavBar = () => {

    const [tasksSection, dispatch] = useReducer(
        tasksSectionReducer,
        initialTasksSection
    );

    const handleAddTaskSection = (value: ITaskSection) => {
        dispatch({
            type: TypeDispatchTaskSection.ADD_TASK_SECTION,
            value
        })
    }
    
    // const handleChangeTaskSection = (taskSection: ITaskSection) => {
    //     dispatch({
    //         type: 2,
    //         value: taskSection
    //     });
    // }
    
    // const handleDeleteTaskSection = (taskSection: ITaskSection) => {
    //     dispatch({
    //         type: 0,
    //         value: taskSection
    //     });
    // }

    const handleChooseTaskSection = (id: string) => {
        dispatch({
            type: TypeDispatchTaskSection.CHOOSE_TASK_SECTION,
            id
        });
    }

    return (
        <div className='w-72 hidden sm:flex flex-col p-4 pb-0'>
            <TasksContext.Provider value={{ state: tasksSection, dispatch }}>
                <ProfileUser />
                <SearchTask />
                <ListTaskSection 
                    tasksSection={tasksSection}
                    onChooseTaskSection={handleChooseTaskSection}
                    onAddTaskSection={handleAddTaskSection} />
                    {/* <DailyTask /> */}
            </TasksContext.Provider>
        </div>
    )
}

export default MainNavBar