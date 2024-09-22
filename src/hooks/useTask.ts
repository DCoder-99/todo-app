import { ITask, ITaskSection } from '@/lib/interface';
import { IconNewTask } from '../components/icons';
import useTasksContext from './useTasksContext';

/**
 * Hook task section
 * @returns 
 */
const useTask = () => {

    const { state } = useTasksContext()

    const genIdTaskSection = Math.ceil(Math.random() * 100000)  // Random id của task section
    const genId = new Date().getTime()

    const genLabelTaskSection = ():string => {
        let label = 'Untitled section'      // Khởi tạo label
        if(!state?.length) return label     // Kiểm tra giá trị state

        let isValidLabel = !state.some((ts:ITaskSection) => ts.lable === label)      // Nếu label khả dụng
        let count = 1                       // Giá trị thêm vào label
        let _label = ''

        while (!isValidLabel) {              // Nếu label không khả dụng
            _label = label + ` (${count})`
            isValidLabel = !state.some((ts:ITaskSection) => ts.lable === _label)
            count++
        }

        return _label || label
    }

    const newTaskSection = ():ITaskSection => ( // Khởi tạo một task section mới
        {   
            id: 'new-task-' + genIdTaskSection,
            lable: genLabelTaskSection(),
            active: true,
            icon: IconNewTask,
            link: '',
            tasks: []
        }
    )

    const newTask = (label: string):ITask => (
        {
            id: 'task-' + genId,
            label,
            status: 0
        }
    )

    return {
        newTaskSection,
        newTask
    }
}

export default useTask