// export function tasksReducer(tasks, action) {
//     switch (action.type) {
//         case 'added': {
//             return [...tasks, {
//             id: action.id,
//             text: action.text,
//             done: false
//             }];
//         }
//         case 'changed': {
//             return tasks.map(t => {
//             if (t.id === action.task.id) {
//                 return action.task;
//             } else {
//                 return t;
//             }
//             });
//         }
//         case 'deleted': {
//             return tasks.filter(t => t.id !== action.id);
//         }
//         default: {
//             throw Error('Unknown action: ' + action.type);
//         }
//     }
// }

import { DTaskSection } from "@/lib/data";
import { ITaskSection } from "@/lib/interface";

export const initialTasksSection = DTaskSection

export enum TypeDispatchTaskSection {
    ADD_TASK_SECTION = 'ADD_TASK_SECTION',
    EDIT_TASK_SECTION = 'EDIT_TASK_SECTION',
    CHOOSE_TASK_SECTION = 'CHOOSE_TASK_SECTION',
    DELETE_TASK_SECTION = 'DELETE_TASK_SECTION',
}

interface ITaskSectionAction {
    type: TypeDispatchTaskSection,
    value?: ITaskSection,
    id?: string
}

export function tasksSectionReducer(tasksSection: ITaskSection[], action: ITaskSectionAction) {
    switch (action.type) {
        case TypeDispatchTaskSection.DELETE_TASK_SECTION: // Delete task section
          return tasksSection.filter(t => t.id !== action?.id);
    
        case TypeDispatchTaskSection.ADD_TASK_SECTION: // Add task section
          return action?.value ? [...tasksSection, action.value] : tasksSection;
    
        case TypeDispatchTaskSection.EDIT_TASK_SECTION: // Edit task section
          return tasksSection.map(t => (t.id === action?.id ? action?.value || t : t));
    
        case TypeDispatchTaskSection.CHOOSE_TASK_SECTION: // Choose task section (activate/deactivate)
          return tasksSection.map(t =>
            t.id === action?.id ? { ...t, active: true } : { ...t, active: false }
          );
    
        default:
          throw new Error('Unknown action: ' + action.type);
    }
}

