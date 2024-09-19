import { ITaskSection } from '@/lib/interface'
import React from 'react'
import '../styles/item-task-section.css'

type Props = {
    taskSection: ITaskSection,
    handleChangeTaskSection: (id?: string) => void
}

const ItemTaskSection:React.FC<Props> = ({taskSection, handleChangeTaskSection}) => {
    return (
        <div id={taskSection.id} 
            className={`flex rounded-sm my-1 px-3 py-2 hover:bg-slate-200 cursor-pointer gap-x-3
                ${taskSection.active ? 'bg-slate-100 relative task-section-active' : 'bg-white'}`}
            onClick={() => handleChangeTaskSection(taskSection.id)}>
            <taskSection.icon />
            {taskSection.lable}
        </div>
    )
}

export default ItemTaskSection