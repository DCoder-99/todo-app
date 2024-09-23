import useTasksContext from '@/hooks/useTasksContext'
import { ITask, ITaskSection } from '@/lib/interface'
import '../../styles/task.css'
import { IconFocusYourDay } from '../icons'
import AddNewTask from './add-new-task'
import TaskItem from './task-item'

const FocusOnYourDay = () => {
    return (
        <div id='focus-on-your-day' 
            className='forcus-your-day gap-x-5 text-white w-52 h-52 p-5 rounded-xl bg-neutral-400 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <IconFocusYourDay className='w-10 h-10' />
            <h3 className='text-lg font-medium'>Focus on your day</h3>
            <span className='text-xs'>Get things done with My Day, a list that refreshes every day.</span>
        </div>
    )
}

const ID_MY_DAY = 'ts-my-day'

const MyDay = () => {

    const { state } = useTasksContext()
    const { taskSections, sectionIdActive, tasks } = state

    const today = new Date().toDateString()
    const myDayTasks = taskSections[sectionIdActive].tasks
    const taskValue:ITask[] = []
    Object.keys(tasks).map((id) => {
        if(myDayTasks?.includes(id)) taskValue.push(tasks[id])
    })

    return (
        <div id='my-day-tasks' className='my-day-container p-10 relative flex flex-col justify-between gap-y-5'>
            {!taskValue.length && <FocusOnYourDay />}
            <div className='header-my-day text-white'>
                <h1 className='text-xl font-medium'>My Day</h1>
                <span className=''>{today}</span>
            </div>    
            <div className='content-my-day flex-1 flex flex-col gap-y-2'>
                {taskValue.map((t:ITask) => (
                    <TaskItem key={t.id} task={t}/>
                ))}
            </div>
            <AddNewTask />
        </div>
    )
}

export default MyDay