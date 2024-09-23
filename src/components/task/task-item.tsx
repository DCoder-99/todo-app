import { TypeDispatchTaskSection } from '@/context/tasks-reducer'
import useTasksContext from '@/hooks/useTasksContext'
import { ITask } from '@/lib/interface'
import { IconCheckCircle, IconCircle, IconStar } from '../icons'

interface TaskItemProps {
    task: ITask
}

function playCompleted():void {
    const sound = new Audio('assests/completed_task.mp3');

    sound.play().catch(error => {
      console.error("Error playing sound:", error);
    });
}

const TaskItem = ({task}:TaskItemProps) => {

    const { dispatch } = useTasksContext()

    const handleCompletedTask = (status: 0 | 1) => {
        status && playCompleted()
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