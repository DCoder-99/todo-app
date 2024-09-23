import { IconCalendarCheck, IconHome, IconStar, IconSun, IconUser } from './../components/icons';
import { IContextMenuNewSectionTask, ITaskSectionMap } from "./interface";

export const DEFEAULT_ID_TASK_SECTION = {
    MY_DAY: 'ts-my-day',
    IMPORTANT: 'ts-important',
    PLANNED: 'ts-planned',
    ASSIGNED_TO_ME: 'ts-assigned-to-me',
    TASKS: 'ts-tasks'
}

// Inital task sections
export const DTaskSection:ITaskSectionMap = {
    'ts-my-day': {
        id: DEFEAULT_ID_TASK_SECTION.MY_DAY,
        lable: 'My day',
        icon: IconSun,
        link: '',
        tasks: []
    },
    'ts-important': {
        id: DEFEAULT_ID_TASK_SECTION.IMPORTANT,
        lable: 'Important',
        icon: IconStar,
        link: '',
        tasks: []
    }
    // ,
    // 'ts-planned': {
    //     id: DEFEAULT_ID_TASK_SECTION.PLANNED,
    //     lable: 'Planned',
    //     icon: IconCalendarCheck,
    //     link: '',
    //     tasks: []
    // },
    // 'ts-assigned-to-me': {
    //     id: DEFEAULT_ID_TASK_SECTION.ASSIGNED_TO_ME,
    //     lable: 'Assigned to me',
    //     icon: IconUser,
    //     link: '',
    //     tasks: []
    // },
    // 'ts-tasks': {
    //     id: DEFEAULT_ID_TASK_SECTION.TASKS,
    //     lable: 'Tasks',
    //     icon: IconHome,
    //     link: '',
    //     tasks: []
    // }
}

export const DContextMenuNewSection:IContextMenuNewSectionTask[] = [
    {
        id: 'rename',
        label: 'Rename list',
        icon: IconStar,
        type: 'normal',
        shortcut: 'F2'
    }
    // {
    //     id: 'share',
    //     label: 'Share list',
    //     icon: IconStar,
    //     type: 'normal'
    // },
    // {
    //     id: 'print',
    //     label: 'Print list',
    //     icon: IconStar,
    //     type: 'normal'
    // },
    // {
    //     id: 'email',
    //     label: 'Email list',
    //     icon: IconStar,
    //     type: 'normal'
    // },
    // {
    //     id: 'pin',
    //     label: 'Pin to Start',
    //     icon: IconStar,
    //     type: 'normal'
    // },
    // {
    //     id: 'duplicate',
    //     label: 'Duplicate list',
    //     icon: IconStar,
    //     type: 'normal'
    // }
    ,{
        id: 'delete',
        label: 'Delete list',
        icon: IconStar,
        type: 'danger',
        shortcut: 'Delete'
    }
]