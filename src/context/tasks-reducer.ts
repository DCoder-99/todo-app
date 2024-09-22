import { DTaskSection } from "@/lib/data";
import { ITask, ITaskSection } from "@/lib/interface";

export const initialTasksSection = DTaskSection

export enum TypeDispatchTaskSection {
    ADD_TASK_SECTION = 'ADD_TASK_SECTION',
    EDIT_TASK_SECTION = 'EDIT_TASK_SECTION',
    CHOOSE_TASK_SECTION = 'CHOOSE_TASK_SECTION',
    DELETE_TASK_SECTION = 'DELETE_TASK_SECTION',
    ADD_NEW_TASK = 'ADD_NEW_TASK',
    COMPLETED_TASK = 'COMPLETED_TASK'
}

interface ITaskSectionAction {
    type: TypeDispatchTaskSection,
    value?: ITaskSection,
    task?: ITask,
    id?: string,
    taskCompleteId?: string
}

export function tasksSectionReducer(tasksSection: ITaskSection[], action: ITaskSectionAction) {
    switch (action.type) {
        case TypeDispatchTaskSection.DELETE_TASK_SECTION: // Delete task section
          return tasksSection.filter(t => t.id !== action?.id);
    
        case TypeDispatchTaskSection.ADD_TASK_SECTION: // Add task section
          {
            let _tasksSection = tasksSection.map(t => ({ ...t, active: false }));
            return action?.value ? [..._tasksSection, action.value] : tasksSection;
          }
        case TypeDispatchTaskSection.EDIT_TASK_SECTION: // Edit task section
          {
            return tasksSection.map(t => (t.id === action?.id ? action?.value || t : t));
          }
    
        case TypeDispatchTaskSection.CHOOSE_TASK_SECTION: // Choose task section (activate/deactivate)
          return tasksSection.map(t =>
            t.id === action?.id ? { ...t, active: true } : { ...t, active: false }
          );
        case TypeDispatchTaskSection.ADD_NEW_TASK:  // Add new task to task section
          {
            return tasksSection.map(t => (t.id === action?.id && action?.task && !t.tasks?.some(tt => tt.id === action.task?.id)) ? t.tasks?.push(action?.task) : t)
          }
        default:
          throw new Error('Unknown action: ' + action.type);
    }
}

