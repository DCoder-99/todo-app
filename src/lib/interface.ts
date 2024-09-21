import React from "react";

export interface ITaskSection {
    id: string,
    lable: string,
    icon: React.FC,
    link: string,
    active: boolean,
    tasks?: ITask[]
}

export interface ITask {
    id: string, 
    label: string,
    status: 0 | 1,  // 0: todo, 1: done
    taskSectionId: string
}

export interface IContextMenuNewSectionTask {
    id: string, 
    label: string,
    icon: React.FC,
    type: 'normal' | 'danger',
    shortcut?: string
}

export interface IContextType {
    state: any,
    dispatch: (action: any) => void
}