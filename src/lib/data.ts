import { IconCalendarCheck, IconHome, IconStar, IconSun, IconUser } from './../components/icons';
import { IContextMenuNewSectionTask, ITaskSection } from "./interface";

export const DTaskSection:ITaskSection[] = [
    {
        id: 'ts-my-day',
        lable: 'My day',
        icon: IconSun,
        link: '',
        active: true
    },
    {
        id: 'ts-important',
        lable: 'Important',
        icon: IconStar,
        link: '',
        active: false
    },
    {
        id: 'ts-planned',
        lable: 'Planned',
        icon: IconCalendarCheck,
        link: '',
        active: false
    },
    {
        id: 'ts-assigned-to-me',
        lable: 'Assigned to me',
        icon: IconUser,
        link: '',
        active: false
    },
    {
        id: 'ts-tasks',
        lable: 'Tasks',
        icon: IconHome,
        link: '',
        active: false
    }
]

export const DContextMenuNewSection:IContextMenuNewSectionTask[] = [
    {
        id: 'rename',
        label: 'Rename list',
        icon: IconStar,
        type: 'normal',
        shortcut: 'F2'
    },
    {
        id: 'share',
        label: 'Share list',
        icon: IconStar,
        type: 'normal'
    },
    {
        id: 'print',
        label: 'Print list',
        icon: IconStar,
        type: 'normal'
    },
    {
        id: 'email',
        label: 'Email list',
        icon: IconStar,
        type: 'normal'
    },
    {
        id: 'pin',
        label: 'Pin to Start',
        icon: IconStar,
        type: 'normal'
    },
    {
        id: 'duplicate',
        label: 'Duplicate list',
        icon: IconStar,
        type: 'normal'
    }
    ,{
        id: 'delete',
        label: 'Delete list',
        icon: IconStar,
        type: 'danger',
        shortcut: 'Delete'
    }
]