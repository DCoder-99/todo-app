import { ITask, ITaskSection } from '@/lib/interface'
import React from 'react'
import { IconCircle, IconStar } from '../icons'
import useTasksContext from '@/hooks/useTasksContext'

interface TaskItemProps {
    task: ITask
}

const TaskItem = ({task}:TaskItemProps) => {

    const { state: tasksSection, dispatch } = useTasksContext()

    const activeTaskSection = tasksSection.find((t: ITaskSection) => t.active).id

    const handleCompletedTask = () => {
        // TODO: update completed task
    }

    return (
        <div className='task-item bg-white rounded-xl flex items-center justify-between px-3 py-1.5 gap-x-3'>
            <IconCircle />
            <div className='content-task flex-1'>
                <p>{task.label}</p>
                <p className='text-xs'>Tasks</p>
            </div>
            <IconStar />
        </div>
    )
}

export default TaskItem