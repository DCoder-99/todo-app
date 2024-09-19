'use client'

import React, { useState } from 'react'
import { Input } from './ui/input'
import { IconSearch, IconX } from './icons'

const SearchTask = () => {

    const [ searchValue, setSearchValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log("Search value: ", searchValue)
    }
   
    return (
        <form onSubmit={handleSearch}>
            <div className='flex border-[1px] rounded-md items-center pr-2 overflow-hidden focus-within:border-l-primary focus-within:border-l-2'>
                <Input 
                    className='border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0'
                    placeholder='Search'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)} />
                <IconSearch className={`cursor-pointer ${isFocused || searchValue ? 'hidden' : 'block'}`} />
                <IconX className={`cursor-pointer ${isFocused || searchValue ? 'block' : 'hidden'}`} onClick={() => setSearchValue('')}/>
            </div>
        </form>
    )
}

export default SearchTask