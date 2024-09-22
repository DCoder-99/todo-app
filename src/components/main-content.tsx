'use client'
import useTasksContext from '@/hooks/useTasksContext'
import { ITask, ITaskSection } from '@/lib/interface'
import MyDay from './task/my-day'
import AddNewTask from './task/add-new-task'
import TaskItem from './task/task-item'

const MainContent = () => {

    const { state } = useTasksContext()

    const activeTaskSection = state.find((ts:ITaskSection) => ts.active)

    if(activeTaskSection.id === 'ts-my-day') {
        return (
            <MyDay />
        )
    }

    return (
        <div>
            {activeTaskSection.tasks.map((t: ITask) => (
                <TaskItem key={t.id} task={t}/>
            ))}
            <AddNewTask />
        </div>
    )
}

export default MainContent