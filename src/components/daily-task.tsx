'use client'
import React from 'react'
import ItemTaskSection from './item-task-section'
import { ITaskSection } from '@/lib/interface'
import { IconListChecks } from './icons'

const DDailyTask:ITaskSection = {
    id: 'daily-task',
    lable: 'Daily task',
    icon: IconListChecks,
    link: '',
    active: false
}

const DailyTask = () => {

    const handleChangeDailyTask = () => {

    }

    return (
        <div id='daily-task' className=''>
            <ItemTaskSection taskSection={DDailyTask} handleChangeTaskSection={handleChangeDailyTask} />
        </div>
    )
}

export default DailyTask