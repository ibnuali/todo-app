import React from 'react'
import { LIST_NOTES } from '../store/constant'

export const ListNotes = () => {
    return (
        <div className='flex flex-col  h-screen'>
            <div className='mt-4'>
                <h1 className='font-bold text-xl'>My Notes</h1>
            </div>

            <div className='mt-4 '>
                <div className='flex flex-col justify-between gap-y-4'>
                    <div>
                        <button>Add Notes</button>
                    </div>
                    <div>
                        <input type="text" placeholder='Search ...' />
                    </div>
                </div>

                <div className='h-[800px] overflow-y-auto'>
                    {LIST_NOTES.map((value) => (
                        <div key={value.id} >
                            <div className='my-4'>
                                <h2 className='font-bold'>{value.title}</h2>
                                <div className='my-2'>
                                    <p>{value.content}</p>
                                </div>
                                <span>{value.date_publish}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
