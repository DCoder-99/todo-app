import { TasksContext } from '@/context/tasks-context';
import { IContextType } from '@/lib/interface';
import React, { useContext } from 'react'

const useTasksContext = ():IContextType => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error('useCount must be used within a CountProvider');
    }
    return context;
}

export default useTasksContext