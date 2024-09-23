'use client'
import { TypeDispatchTaskSection } from '@/context/tasks-reducer'
import useTask from '@/hooks/useTask'
import useTasksContext from '@/hooks/useTasksContext'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { ITaskSection } from '@/lib/interface'
import ItemTaskSection from './item-task-section'

const ListTaskSection = () => {

    const { newTaskSection } = useTask()
    const { state, dispatch } = useTasksContext()
    const { taskSections } = state

    const handleAddTaskSection = () => {

        const _newTaskSection = newTaskSection()

        dispatch({
            type: TypeDispatchTaskSection.ADD_TASK_SECTION,
            payload: {
                taskSection: _newTaskSection
            }
        })

        dispatch({
            type: TypeDispatchTaskSection.CHOOSE_TASK_SECTION,
            payload: {
                sectionId: _newTaskSection.id
            }
        })
    }

    console.log('[debugger] state: ', state.taskSections)

    return (
        <div id='list-task-section' className='mt-3 flex flex-col flex-1 justify-between'>
            <ScrollArea id='render-list' className='w-64 h-[calc(100vh-250px)]'>
                {Object.entries(taskSections).map(([sectionId, section]:[string, ITaskSection]) => (
                    <ItemTaskSection
                        key={sectionId}
                        taskSection={section}
                    />
                ))}
            </ScrollArea>
            <div id='add-task-section'>
                <Button onClick={handleAddTaskSection}>Add New Section</Button>
            </div>
        </div>
    )
}

export default ListTaskSection