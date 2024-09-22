'use client'

import { TypeDispatchTaskSection } from '@/context/tasks-reducer'
import useTasksContext from '@/hooks/useTasksContext'
import { ITaskSection } from '@/lib/interface'
import ListTaskSection from './list-task-section'
import ProfileUser from './profile-user'
import SearchTask from './search-task'

const MainNavBar = () => {

    const { state: tasksSection, dispatch } = useTasksContext()

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
            <ProfileUser />
            <SearchTask />
            <ListTaskSection 
                tasksSection={tasksSection}
                onChooseTaskSection={handleChooseTaskSection}
                onAddTaskSection={handleAddTaskSection} />
                {/* <DailyTask /> */}
        </div>
    )
}

export default MainNavBar