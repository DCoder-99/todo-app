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