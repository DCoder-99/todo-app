import { IconCalendarCheck, IconHome, IconStar, IconSun, IconUser } from './../components/icons';
import { ITaskSection } from "./interface";

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