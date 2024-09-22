'use client'
import useTask from '@/hooks/useTask'
import { ITaskSection } from '@/lib/interface'
import ItemTaskSection from './item-task-section'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'

interface IPropsListTaskSection {
    tasksSection: ITaskSection[],
    onChooseTaskSection: Function,
    onAddTaskSection: Function
}

const ListTaskSection = ({tasksSection, onChooseTaskSection, onAddTaskSection}:IPropsListTaskSection) => {

    const { newTaskSection } = useTask()

    const handleAddTaskSection = () => {
        onAddTaskSection(newTaskSection())
    }

    return (
        <div id='list-task-section' className='mt-3 flex flex-col flex-1 justify-between'>
            <ScrollArea id='render-list' className='w-64 h-[calc(100vh-250px)]'>
                {tasksSection.map((taskSection) => (
                    <ItemTaskSection 
                        key={taskSection.id}
                        taskSection={taskSection} 
                        handleChangeTaskSection={(id) => onChooseTaskSection(id)}
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