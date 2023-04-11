import { useState } from 'react'
import './index.css'
import ContentNotes from './pages/ContentNotes'
import { ListNotes } from './pages/ListNotes'
import Sidebar from './pages/Sidebar'

function App() {
  return (
    <div className="grid grid-cols-12">
      <div className='col-span-2'>
        <Sidebar />
      </div>
      <div className='col-span-2'>
        <ListNotes />
      </div>
      <div className='col-span-8'>
        <ContentNotes />
      </div>
    </div>
  )
}

export default App
