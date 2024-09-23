import { ITask, ITaskSection } from '@/lib/interface'
import React from 'react'
import { IconCheckCircle, IconCircle, IconStar } from '../icons'
import useTasksContext from '@/hooks/useTasksContext'
import { TypeDispatchTaskSection } from '@/context/tasks-reducer'

interface TaskItemProps {
    task: ITask
}

const TaskItem = ({task}:TaskItemProps) => {

    const { dispatch } = useTasksContext()

    const handleCompletedTask = (status: 0 | 1) => {
        // TODO: update completed task
        dispatch({
            type: TypeDispatchTaskSection.UPDATE_STATUS_TASK,
            payload: {
                task: {
                    ...task,
                    status
                }
            }
        })
    }

    const baseClasses = `task-item bg-white rounded-xl flex items-center justify-between px-3 py-1.5 gap-x-3`

    return (
        <div className={`${baseClasses}`}>
            {task.status ? <IconCheckCircle onClick={() => handleCompletedTask(0)}/> : <IconCircle onClick={() => handleCompletedTask(1)}/>}
            <div className='content-task flex-1'>
                <p className={`${task.status ? 'line-through' : ''}`}>{task.label}</p>
                <p className='text-xs'>Tasks</p>
            </div>
            <IconStar />
        </div>
    )
}

export default TaskItem