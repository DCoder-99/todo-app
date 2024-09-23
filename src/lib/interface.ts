import React from "react";

export interface ITaskSectionMap {
    [sectionId: string]: ITaskSection;
}

export interface ITaskMap {
    [taskId: string]: ITask;
}
  
export interface ITaskState {
    taskSections: ITaskSectionMap;
    tasks: ITaskMap;
    sectionIdActive: string; 
}

export interface ITaskSection {
    id: string,
    lable: string,
    icon: React.FC,
    link: string,
    tasks: string[]
}

export interface ITask {
    id: string, 
    label: string,
    status: 0 | 1,  // 0: todo, 1: done
    taskSectionId: string,
    isImportant?: 0 | 1
}

export interface IContextMenuNewSectionTask {
    id: string, 
    label: string,
    icon: React.FC,
    type: 'normal' | 'danger',
    shortcut?: string
}

export interface IContextType {
    state: ITaskState,
    dispatch: (action: any) => void
}