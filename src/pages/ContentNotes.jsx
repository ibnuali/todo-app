import React, { useEffect, useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Breadcrums from '../components/Breadcrums';
const ContentNotes = () => {

    const [propNote, setPropNote] = useState({})


    useEffect(() => {
        let objectNote = {
            id: 1,
            title: "Title 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel eleifend elit. Suspendisse consequat, magna.",
            tags: [],
            date_publish: "20 April 2022",
            created_by: "Ibnu",
            created_at: "20 April 2022",
            updated_at: "20 April 2022",
        }
        setPropNote(objectNote)
    }, [])

    return (
        <div className='flex flex-col'>
            <div>
                <Breadcrums />
            </div>
            <hr />
            <div className='flex-col p-2'>
                <h1 className='text-xl font-bold my-2'>{propNote.title}</h1>
                <table>
                    <tr>
                        <td>created by </td>
                        <td>: </td>
                        <td>{propNote.created_by} </td>
                    </tr>
                    <tr>
                        <td>last modify</td>
                        <td >:</td>
                        <td>{propNote.updated_at} </td>
                    </tr>
                    <tr>
                        <td>tags : </td>
                    </tr>
                </table>
                {/* <span>created by: {propNote.created_by}</span>
                <span>created by: {propNote.created_by}</span> */}
            </div>
            <div>
                <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                />
            </div>
        </div>
    )
}

export default ContentNotes