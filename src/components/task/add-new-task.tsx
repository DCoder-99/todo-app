import React, { useState } from 'react'
import { IconCircle, IconPlus } from '../icons'
import { Input } from '../ui/input'
import useTasksContext from '@/hooks/useTasksContext'
import useTask from '@/hooks/useTask'
import { ITaskSection } from '@/lib/interface'
import { TypeDispatchTaskSection } from '@/context/tasks-reducer'

const AddNewTask = () => {

    const [ isFocus, setIsFocus] = useState(false)
    const [taskLabel, setTaskLabel] = useState('')
    const { state, dispatch } = useTasksContext()
    const { sectionIdActive } = state
    const { newTask } = useTask()

    const handleAddNewTask = () => {
        dispatch({
            type: TypeDispatchTaskSection.ADD_NEW_TASK,
            payload: {
                task: newTask(taskLabel, sectionIdActive)
            }
        }) 

        setTaskLabel('')
    }

    const iconInput = isFocus ? <IconCircle /> : <IconPlus />
    const placeholderInput = isFocus ? `Try typing 'Pay utilites bill by Friday 6pm'` : 'Add a task'

    return (
        <div className='add-task h-9 flex items-center rounded-md bg-white overflow-hidden pl-2'>
            {iconInput}
            <Input
                className='input-add-task'
                variant='text'
                placeholder={placeholderInput}
                value={taskLabel}
                onChange={(e) => setTaskLabel(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && handleAddNewTask()}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                />
        </div>
    )
}

export default AddNewTask