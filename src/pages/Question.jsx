import React from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { Editor } from "@monaco-editor/react";
import { CircleLoader } from "react-spinners";

import ReactMarkdown from 'react-markdown';

const options = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
]

const defaultQuestion = {
    title: "Reverse String",
    category: "String",
    testCases: [
/*
        {input: "[1,2,3,4,5,6,7,8,9,10]", expectedOutput: "[10,9,8,7,6,5,4,3,2,1]"},
*/
        {input: '[["1","1","1","1","0"], ["1","1","0","1","0"], ["1","1","0","0","0"], ["0","0","0","0","0"]]', expectedOutput: "1" },
/*
        {input: '"aaaaaaa"', expectedOutput: "aaaaaaa"},
        {input: "'aaaaaac'", expectedOutput: "caaaaaa"},
        {input: "'!@#$%'", expectedOutput: "%$#@!"},
*/
/*
        {input: "'aaaaaaa'", expectedOutput: "aaaaaaa"},
/*
        {input: "'aaaaaaa'", expectedOutput: "aaaaaaa"},
        {input: "'aaaaaac'", expectedOutput: "caaaaaa"},
        {input: "'radar'", expectedOutput: "radar"},
        {input: "'HeLLo WoRLd'", expectedOutput: "dLRoW oLLeH"},
        {input: "'abcdefghijklmnopqrstuvwxyz'", expectedOutput: "zyxwvutsrqponmlkjihgfedcba"},
*/
    ],
    description: "",
    methodName: ""
}

const defaultOutput = {
    funcOutput: '',
    stdout: '',
    exitCode: '',
    executionTime: ''
}

const defaultPythonTemplate = 'class Solution:\n\n\tdef solve(self, s):\n\t\tpass'
//const defaultJavaTemplate = ''

const Question = () => {

    const { id } = useParams()

    const [selectedOption, setSelectedOption] = React.useState({ value: 'python', label: 'Python' })

    const [code, setCode] = React.useState('')

    const [output, setOutput] = React.useState(defaultOutput)

    const [params, setParams] = React.useState([])

    const [funcOutput, setFuncOutput] = React.useState([])

    const [question, setQuestion] = React.useState(defaultQuestion)

    const [isLoading, setIsLoading] = React.useState(false)

    const [isQuestionLoading, setIsQuestionLoading] = React.useState(true)
    const fetchQuestion = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/questions/${id}`)
            console.log(data)
            setQuestion(data)
        } catch (error) {
            console.log(error)
        }
        finally {
            setIsQuestionLoading(false)
        }
    }
    const onLanguageChange = (value) => setSelectedOption(value)
    const handleOnCodeChange = (code, _) => setCode(code)
    const handleSendCode = async () => {
        try {
            setOutput(defaultOutput)

            setIsLoading(true)

            const { data } = await axios.post('http://localhost:3000/runcode',
                { code, method_name: 'solve', testCases: defaultQuestion.testCases })

            setOutput(data.result)

            let filteredData = data.result.funcOutput

            filteredData = filteredData.replaceAll("'", '"')

            filteredData = JSON.parse(filteredData)

            const testCaseOutput = defaultQuestion
                .testCases.map((item, idx) =>
                    [item.expectedOutput, typeof filteredData[idx] === "string" ? filteredData[idx] : JSON.stringify(filteredData[idx])])

            setFuncOutput(testCaseOutput)

            console.log(testCaseOutput, filteredData)

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        fetchQuestion()
    }, [])


    return (
        <section className={'flex justify-between mx-[150px] my-[50px]'}>
            <div className={'flex flex-col max-w-[450px] whitespace-pre-wrap'}>
                <CircleLoader
                    loading={isQuestionLoading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                { !isQuestionLoading ? (
                    <ReactMarkdown>
                        {question.description}
                    </ReactMarkdown>
                ) : null }
            </div>
            <div className={'h-full w-[3px] bg-black'}></div>
            <div className={'flex flex-col h-full gap-[2rem] w-full max-w-[800px]'}>
                <div className={'flex justify-end'}>
                    <Select
                        defaultValue={'python'}
                        value={selectedOption}
                        onChange={onLanguageChange}
                        options={options}
                    />

                </div>
                <Editor
                    height="70vh"
                    defaultLanguage={'python'}
                    value={code}
                    theme={'vs-dark'}
                    onChange={handleOnCodeChange}
                    language={selectedOption?.value}
                    defaultValue={defaultPythonTemplate}
                />
                <div>
                    <button className={'bg-gray-800 text-white rounded py-1 px-5'} onClick={handleSendCode}>Run Code</button>
                </div>
                <CircleLoader
                    loading={isLoading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                { output.exitCode === 124 ? <div>Time Limit Exceeded</div> : null }
                { output.exitCode !== 0 && output.exitCode && output.exitCode !== 124 ? <div>{ output.funcOutput }</div> : null }
                { output.stdout ? <div>Stdout: { output.stdout }</div> : null }
                { output.funcOutput ? <div className={'flex flex-col gap-[.5rem]'}>
                    Your code output: { funcOutput.map(item => <span key={item}>
                    <div className={'flex gap-[1rem]'}>
                        <span className={'font-bold'}>Input: {item[0]}</span>
                        <span className={item[0] === item[1] ? 'text-green-600' : 'text-red-600'}>{item[0] === item[1] ? 'Test Case Passed' : 'Test Case Failed'}</span>
                        <span>
                            { item[0] !== item[1] ? <span>Expected { item[0]} but got {item[1] }</span> : null }
                        </span>
                        <span>{ output.executionTime }</span>
                    </div>
                    </span> ) }
                </div> : null }
            </div>
        </section>
    )
}

export default Question