import React from 'react'
import {BsCheck} from 'react-icons/bs'

const Check = ({isComplete}) => {
    return (
        <div className='mr-2 border-2 rounded-md border-pink-400 w-5 h-5'>
            {isComplete &&
            <BsCheck size={24} className ='text-gray-900'/>
            }
        </div>
    )
}

export default Check