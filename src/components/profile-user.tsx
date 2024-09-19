import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const ProfileUser = () => {
    return (
        <div id='profile-user' className='flex items-center gap-x-3 py-2'>
            <div id='pu-avatar'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@todo-app"/>
                    <AvatarFallback>TODO APP</AvatarFallback>
                </Avatar>
            </div>
            <h3 id='pu-user-info' className='font-semibold'>Todo app</h3>
        </div>
    )
}

export default ProfileUser