import React from 'react'
import { FOLDER } from '../store/constant'

const Sidebar = () => {
    return (
        <div className='flex flex-col  justify-between h-screen'>
            <div className='mx-auto pt-4'>
                User
            </div>

            <div className='mx-auto mt-8'>
                {FOLDER.map((value) => (
                    <div key={value.id} >
                        <div className='my-4'>
                            {value.name}
                        </div>
                    </div>
                ))}
            </div>

            <div className='m-auto'>
                <div>Add New Folder</div>
                <div>setting</div>
            </div>
        </div>
    )
}

export default Sidebar