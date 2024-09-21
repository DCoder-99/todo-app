import { initialTasksSection, tasksSectionReducer, TypeDispatchTaskSection } from '@/context/tasks-reducer'
import { DContextMenuNewSection } from '@/lib/data'
import { IContextMenuNewSectionTask, IContextType, ITaskSection } from '@/lib/interface'
import React, { useContext, useReducer, useState } from 'react'
import '../styles/item-task-section.css'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from './ui/context-menu'
import { TasksContext } from '@/context/tasks-context'
import useTasksContext from '@/hooks/useTasksContext'

type Props = {
    taskSection: ITaskSection,
    handleChangeTaskSection: (id?: string) => void,
    // handleUpdateTaskSection: (taskSection: ITaskSection) => void
}

const ItemTaskSection: React.FC<Props> = ({ taskSection, handleChangeTaskSection }) => {

    const { dispatch } = useTasksContext()
    const [isEdit, setIsEdit] = useState(false)
    const [sectionValue, setSectionValue] = useState('')

    const handleRenameSection = () => {
        setIsEdit(true)
        setSectionValue(taskSection.lable)
    }

    const handleBlurRename = () => {
        setIsEdit(false)
        dispatch({
            type: TypeDispatchTaskSection.EDIT_TASK_SECTION,
            id: taskSection.id,
            value: {
                ...taskSection,
                lable: sectionValue
            }
        });
    }

    const handleSelectMenu = (menu: IContextMenuNewSectionTask) => {
        console.log('[debugger] menu: ', menu)
        switch (menu.id) {
            case 'rename':
                return handleRenameSection()
            default:
                break;
        }
    }

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <div id={taskSection.id}
                    className={`flex rounded-sm my-1 px-3 py-2 hover:bg-slate-200 cursor-pointer gap-x-3 w-64
                    ${taskSection.active ? 'bg-slate-100 relative task-section-active' : 'bg-white'}`}
                    onClick={() => handleChangeTaskSection(taskSection.id)}>
                    <taskSection.icon />
                    {
                        isEdit ? 
                        <input value={sectionValue} onChange={(e) => setSectionValue(e.target.value)} onBlur={handleBlurRename}/> : 
                        <span className='overflow-hidden text-ellipsis whitespace-nowrap w-64' title={taskSection.lable}>{taskSection.lable}</span>
                    }
                </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
                {DContextMenuNewSection.map((menu) => (
                    <ContextMenuItem key={menu.id} className='flex justify-between w-64' onClick={() => handleSelectMenu(menu)}>
                        <div className='flex items-center gap-x-3'>
                            <menu.icon />
                            {menu.label}
                        </div>
                        {menu.shortcut}
                    </ContextMenuItem>
                ))}
            </ContextMenuContent>
        </ContextMenu>
    )
}

export default ItemTaskSection