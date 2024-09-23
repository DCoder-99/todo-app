'use client'
import useTasksContext from '@/hooks/useTasksContext'
import { DEFEAULT_ID_TASK_SECTION } from '@/lib/data'
import { ITask } from '@/lib/interface'
import AddNewTask from './task/add-new-task'
import MyDay from './task/my-day'
import TaskItem from './task/task-item'

const MainContent = () => {

    const { state } = useTasksContext()
    const { taskSections, sectionIdActive, tasks } = state

    if(sectionIdActive === DEFEAULT_ID_TASK_SECTION.MY_DAY) {
        return (
            <MyDay />
        )
    }

    const taskValue: ITask[] = []

    Object.keys(tasks).map((id) => {
        if (taskSections[sectionIdActive].tasks?.includes(id)) taskValue.push(tasks[id])
    })

    return (
        <div>
            {taskValue.map((t: ITask) => (
                <TaskItem key={t.id} task={t}/>
            ))}
            <AddNewTask />
        </div>
    )
}

export default MainContent