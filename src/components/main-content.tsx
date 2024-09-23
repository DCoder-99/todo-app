'use client'
import useTasksContext from '@/hooks/useTasksContext'
import { ITask, ITaskSection } from '@/lib/interface'
import MyDay from './task/my-day'
import AddNewTask from './task/add-new-task'
import TaskItem from './task/task-item'
import { DEFEAULT_ID_TASK_SECTION } from '@/lib/data'

const MainContent = () => {

    const { state } = useTasksContext()
    const { taskSections, sectionIdActive } = state

    if(sectionIdActive === DEFEAULT_ID_TASK_SECTION.MY_DAY) {
        return (
            <MyDay />
        )
    }

    return (
        <div>
            {/* {activeTaskSection.tasks.map((t: ITask) => (
                <TaskItem key={t.id} task={t}/>
            ))} */}
            {/* <AddNewTask /> */}
        </div>
    )
}

export default MainContent