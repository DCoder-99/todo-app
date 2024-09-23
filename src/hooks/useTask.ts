import { ITask, ITaskSection } from '@/lib/interface';
import { IconNewTask } from '../components/icons';
import useTasksContext from './useTasksContext';

/**
 * Hook task section
 * @returns 
 */
const useTask = () => {

    const { state } = useTasksContext()
    const { taskSections } = state

    const genId = new Date().getTime()

    const genLabelTaskSection = ():string => {
        let label = 'Untitled section'      // Khởi tạo label
        if(!Object.keys(taskSections).length) return label     // Kiểm tra giá trị state

        let isValidLabel = !Object.keys(taskSections).some((id) => taskSections[id].lable === label)      // Nếu label khả dụng
        let count = 1                       // Giá trị thêm vào label
        let _label = ''

        while (!isValidLabel) {              // Nếu label không khả dụng
            _label = label + ` (${count})`
            isValidLabel = !Object.keys(taskSections).some((id) => taskSections[id].lable === _label)
            count++
        }

        return _label || label
    }

    const newTaskSection = ():ITaskSection => ( // Khởi tạo một task section mới
        {   
            id: 'new-task-' + genId,
            lable: genLabelTaskSection(),
            icon: IconNewTask,
            link: '',
            tasks: []
        }
    )

    const newTask = (label: string, taskSectionId: string):ITask => (
        {
            id: 'task-' + genId,
            label,
            status: 0,
            taskSectionId
        }
    )

    return {
        newTaskSection,
        newTask
    }
}

export default useTask