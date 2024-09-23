import { TypeDispatchTaskSection } from '@/context/tasks-reducer'
import useTasksContext from '@/hooks/useTasksContext'
import { DContextMenuNewSection } from '@/lib/data'
import { IContextMenuNewSectionTask, ITaskSection } from '@/lib/interface'
import React, { useRef, useState } from 'react'
import '../styles/item-task-section.css'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from './ui/context-menu'

type Props = {
    taskSection: ITaskSection
}

const ItemTaskSection: React.FC<Props> = ({ taskSection }) => {

    const { state, dispatch } = useTasksContext()
    const { sectionIdActive } = state
    const [isEdit, setIsEdit] = useState(false)
    const [sectionValue, setSectionValue] = useState('')
    const sectionRef = useRef<HTMLInputElement>(null)

    const isSectionActive = sectionIdActive === taskSection.id

    const handleChooseTaskSection = (id:string) => {
        dispatch({
            type: TypeDispatchTaskSection.CHOOSE_TASK_SECTION,
            payload: {
                sectionId: id
            }
        })
    }

    const handleRenameSection = () => {
        setIsEdit(true)
        setSectionValue(taskSection.lable)
        setTimeout(() => { 
            sectionRef?.current?.focus()
        }, 100)
    }

    const handleDeleteSection = () => {
        dispatch({
            type: TypeDispatchTaskSection.DELETE_TASK_SECTION,
            payload: {
                sectionId: taskSection.id
            }
        })
    }

    const handleBlurRename = () => {
        setIsEdit(false)
        if(!sectionValue) return
        dispatch({
            type: TypeDispatchTaskSection.EDIT_TASK_SECTION,
            payload: {
                taskSection: {
                    ...taskSection,
                    lable: sectionValue
                }
            }
        });
    }

    const handleSelectMenu = (menu: IContextMenuNewSectionTask) => {
        switch (menu.id) {
            case 'rename':
                return handleRenameSection()
            case 'delete':
                return handleDeleteSection()
            default:
                break;
        }
    }

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <div id={taskSection.id}
                    className={`flex rounded-sm my-1 px-3 py-2 hover:bg-slate-200 cursor-pointer gap-x-3 w-64
                    ${isSectionActive ? 'bg-slate-100 relative task-section-active' : 'bg-white'}`}
                    onClick={() => handleChooseTaskSection(taskSection.id)}
                    >
                    <taskSection.icon />
                    {
                        isEdit ? 
                        <input ref={sectionRef} className='w-[calc(100%-24px)]' value={sectionValue} onChange={(e) => setSectionValue(e.target.value)} onBlur={handleBlurRename} onKeyDown={(e) => e.key === "Enter" && handleBlurRename()}/> : 
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