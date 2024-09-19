'use client'
import { DTaskSection } from '@/lib/data'
import React, { useContext, useState } from 'react'
import ItemTaskSection from './item-task-section'
import { ITaskSection } from '@/lib/interface'
import { TaskContext } from '@/context/task-context'
import { Button } from './ui/button'

interface IPropsListTaskSection {
    tasksSection: ITaskSection[],
    onChooseTaskSection: Function,
    onAddTaskSection: Function
}

const ListTaskSection = ({tasksSection, onChooseTaskSection, onAddTaskSection}:IPropsListTaskSection) => {

    const handleAddTaskSection = () => {

    }

    return (
        <div id='list-task-section' className='mt-3 flex flex-col flex-1 justify-between'>
            <div id='render-list'>
                {tasksSection.map((taskSection) => (
                    <ItemTaskSection key={taskSection.id} taskSection={taskSection} handleChangeTaskSection={(id) => onChooseTaskSection(id)}/>
                ))}
            </div>
            <div id='add-task-section'>
                <Button onClick={handleAddTaskSection}>Add New Section</Button>
            </div>
        </div>
    )
}

export default ListTaskSection