import { IContextType } from '@/lib/interface';
import { createContext } from 'react';

export const TasksContext = createContext<IContextType | undefined>(undefined);
export const TasksDispatchContext = createContext(null);