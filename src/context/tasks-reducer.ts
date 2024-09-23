import { DEFEAULT_ID_TASK_SECTION, DTaskSection } from "@/lib/data";
import { ITask, ITaskSection, ITaskState } from "@/lib/interface";

export const initialTasksSection = {
  taskSections: DTaskSection,
  tasks: {},
  sectionIdActive: DEFEAULT_ID_TASK_SECTION.MY_DAY
};

export enum TypeDispatchTaskSection {
  ADD_TASK_SECTION = "ADD_TASK_SECTION",
  EDIT_TASK_SECTION = "EDIT_TASK_SECTION",
  CHOOSE_TASK_SECTION = "CHOOSE_TASK_SECTION",
  DELETE_TASK_SECTION = "DELETE_TASK_SECTION",
  ADD_NEW_TASK = "ADD_NEW_TASK",
  UPDATE_STATUS_TASK = "UPDATE_STATUS_TASK",
}

type Action =
  | {
      type: TypeDispatchTaskSection.ADD_TASK_SECTION;
      payload: { taskSection: ITaskSection };
    }
  | {
      type: TypeDispatchTaskSection.DELETE_TASK_SECTION;
      payload: { sectionId: string };
    }
  | {
      type: TypeDispatchTaskSection.EDIT_TASK_SECTION;
      payload: { taskSection: ITaskSection };
    }
  | {
      type: TypeDispatchTaskSection.CHOOSE_TASK_SECTION;
      payload: { sectionId: string };
    }
  | {
      type: TypeDispatchTaskSection.ADD_NEW_TASK;
      payload: { task: ITask };
    }
  | {
      type: TypeDispatchTaskSection.UPDATE_STATUS_TASK;
      payload: { task: ITask };
    };

export function tasksSectionReducer(taskState: ITaskState, action: Action) {
  /**
   * TODO:
   * - Add task section
   * - Delete task section
   * - Edit task section
   * - Choose task section
   * - Add task
   * - Delete task
   * - Edit task
   * - Completed task
   * - UnCompleted task
   */
  switch (action.type) {
    // Add a new task section
    case TypeDispatchTaskSection.ADD_TASK_SECTION: {
      const { taskSection } = action.payload
      return {
        ...taskState,
        taskSections: {
          ...taskState.taskSections,
          [taskSection.id]: taskSection
        }
      }
    }
    // Choose a task section 
    case TypeDispatchTaskSection.CHOOSE_TASK_SECTION: {
      const { sectionId } = action.payload
      return {
        ...taskState,
        sectionIdActive: sectionId
      }
    }
    // Edit a task section
    case TypeDispatchTaskSection.EDIT_TASK_SECTION: {
      const { taskSection } = action.payload

      return {
        ...taskState,
        taskSections: {
          ...taskState.taskSections,
          [taskSection.id]: taskSection
        }
      }
    }

    // Delete a task section
    case TypeDispatchTaskSection.DELETE_TASK_SECTION: {
      const { sectionId } = action.payload

      if(taskState.taskSections[sectionId]) {
        delete taskState.taskSections[sectionId]
      }

      return {
        ...taskState
      }
    }

    // Add a new task
    case TypeDispatchTaskSection.ADD_NEW_TASK: {
      const { task } = action.payload

      return {
        ...taskState,
        taskSections: {
          ...taskState.taskSections,
          [task.taskSectionId]: {
            ...taskState.taskSections[task.taskSectionId],
            tasks: [...taskState.taskSections[task.taskSectionId].tasks, task.id]
          }
        },
        tasks: {
          ...taskState.tasks,
          [task.id]: task
        }
      }
    }

    // Completed a task
    case TypeDispatchTaskSection.UPDATE_STATUS_TASK: {
      const { task } = action.payload

      return {
        ...taskState,
        tasks: {
          ...taskState.tasks,
          [task.id]: {
            ...taskState.tasks[task.id],
            status: task.status
          }
        }
      }
    }
    
    default:
      throw new Error("Unknown action: " + action);
  }
}
