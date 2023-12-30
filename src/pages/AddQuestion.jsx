import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import axios from 'axios'
import { Editor } from "@monaco-editor/react";
const AddQuestion = () => {

    const [markdown, setMarkdown] = React.useState('')

    const [isLoading, setIsLoading] = React.useState(false)

    const [testCases, setTestCases] = React.useState([{ input: '', expectedResult: '' }])
    const addTestCase = () => {
        setTestCases(prevState => [...prevState, ])
    }
    const handleSave = async () => {
        try {
            await axios.post('http://localhost:3001/question', {  })
        } catch (error) {
            console.log(error)
        }
    }

    return <section className={'flex justify-between mx-[150px]'}>
        <div className={'flex flex-col gap-[1.5rem] max-w-[800px] w-full'}>
            <h1>Markdown: content</h1>
            <div className={'h-full w-full'}>
                <Editor height={'70vh'} defaultLanguage={'txt'} onChange={(markdown) => setMarkdown(markdown)} theme={'light'} />
            </div>
            <h1>Add Test Cases</h1>
            <div className={''}>
                <div className={'flex gap-[1rem]'}>
                    { testCases.map(item => (
                        <>
                            <div className={'flex gap-[.5rem]'}>
                                <h2>Input</h2>
                                <input className={'rounded border-2 text-lg outline-0'} value={item.input} />
                            </div>
                            <div className={'flex gap-[.5rem]'}>
                                <h2>Expected Result</h2>
                                <input className={'rounded border-2 text-lg outline-0'} value={item.expectedResult} />
                            </div>
                        </>
                    )) }
                </div>
                <button className={'bg-gray-800 text-white rounded py-1 px-5'}>Add</button>
            </div>
            <div>
                <button className={'bg-gray-800 text-white rounded py-1 px-5'}>Save</button>
            </div>
        </div>
        <div className={'flex flex-col gap-[1.5rem] max-w-[650px]'}>
            <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        </div>
    </section>
}

export default AddQuestion
