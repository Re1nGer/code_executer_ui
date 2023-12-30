import BuyAlgoExpertButton from "@/components/BuyAlgoExpertButton.jsx";
import { motion } from "framer-motion";
import ProductPromptSkeletons from "@/components/ProductPromptSkeletons.jsx";
import  CrossIcon from "../icons/CrossIcon.svg?react";
import TickIcon from '../icons/TickIcon.svg?react';

function ProductTestSkeletons() {
    return <div
        className={"bg-[#15314b] flex flex-col rounded-[4px] border-[2px] border-[#15314b] max-w-[291px] w-full"}>
        <div className={"max-h-[30px] h-full flex justify-between"}>
            <h3 className={"pl-[10px]"}>Input</h3>
            <button className={"bg-[#0046c7] text-white text-center px-[15px] h-full"}>Run</button>
        </div>
        <div className={"flex flex-col rounded-[3px] gap-[4px] p-[10px] bg-[#02203c] h-full"}>
            <div className={"flex gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div className={"flex gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div className={"flex pl-[1rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div className={"flex pl-[1rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div className={"flex pl-[.5rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </div>
        </div>
        <div className={"flex flex-col rounded-[3px] gap-[4px] p-[10px] pt-0 bg-[#02203c] h-full"}>
            <div className={"flex gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div className={"flex gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div className={"flex pl-[1rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div className={"flex pl-[1rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div className={"flex pl-[.5rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </div>
        </div>
    </div>;
}

function ProductInputSkeletons() {
    return <div
        className={"bg-[#15314b] max-h-[205px] flex flex-col rounded-[4px] border-[2px] border-[#15314b] max-w-[291px] h-full w-full"}>
        <div className={"max-h-[30px] h-full"}>
            <h3 className={"pl-[10px]"}>Tests</h3>
        </div>
        <div className={"flex flex-col gap-[10px] bg-[#02203c] product__test_scrollbar"}>
            <div
                className={"rounded-[4px] flex gap-[4px] items-center h-[50px]  mt-[10px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div
                className={"rounded-[4px] flex items-center gap-[4px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div
                className={"rounded-[4px] flex items-center gap-[4px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div
                className={"rounded-[4px] flex items-center gap-[4px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
            </div>
            <div
                className={"rounded-[4px] flex items-center gap-[4px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
            </div>
        </div>
    </div>;
}

const Product = () => {

    return (
        <div className={`flex justify-center min-h-[320px] gap-[50px]`}>
            <div className={'pl-[20px] text-white basis-[50%] flex justify-end'}>
                <div className={'max-w-[500px] flex flex-col items-start justify-center'}>
                    <h1 className={'text-[38px] mb-[20px]'}>AlgoExpert</h1>
                    <p className={'font-open_sans text-[18px] mb-[30px]'}>The ultimate resource to prepare for coding
                        interviews.
                        Everything you need, in one streamlined platform.</p>
                    <motion.div initial={{scale: .5}} animate={{scale: 1}} className={'w-full'}>
                        <BuyAlgoExpertButton className={'w-full'}/>
                    </motion.div>
                </div>
            </div>
            <div className={'flex-1 max-h-[700px] product__banner_container'}>
                <div
                    className={'flex flex-wrap gap-[10px] text-white font-bold max-h-[500px] max-w-[600px] product__banner'}>
                    <ProductPromptSkeletons/>
                    <ProductTestSkeletons/>
                    <ProductInputSkeletons />
                    <div
                        className={"bg-[#15314b] max-h-[205px] flex flex-col rounded-[4px] border-[2px] border-[#15314b] max-w-[291px] h-full w-full"}>
                        <div className={"max-h-[30px] h-full flex justify-between items-center"}>
                            <h3 className={"pl-[10px]"}>Output</h3>
                            <button className={"bg-[#008529] text-white text-center px-[15px] font-normal h-full"}>Submit</button>
                        </div>
                        <div className={"flex flex-col gap-[10px] bg-[#02203c] product__test_scrollbar"}>
                            <div className={"rounded-[4px] flex gap-[10px] items-center h-[50px] mt-[10px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                                <CrossIcon className={'h-[24px] w-[24px] text-[#c54242]'} />
                                <div className={'w-[160px] py-[7px] px-[9px] h-[13px] bg-[#c54242] rounded-[4px]'}></div>
                            </div>
                            <div
                                className={"rounded-[4px] flex items-center gap-[10px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                                <TickIcon className={'h-[24px] w-[24px] text-[#3f8854]'} />
                                <div className={'w-[160px] py-[7px] px-[9px] h-[13px] bg-[#3f8854] rounded-[4px]'}></div>
                            </div>
                            <div
                                className={"rounded-[4px] flex items-center gap-[10px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                                <TickIcon className={'h-[24px] w-[24px] text-[#3f8854]'} />
                                <div className={'w-[160px] py-[7px] px-[9px] h-[13px] bg-[#3f8854] rounded-[4px]'}></div>
                            </div>
                            <div
                                className={"rounded-[4px] flex items-center gap-[10px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                                <TickIcon className={'h-[24px] w-[24px] text-[#3f8854]'} />
                                <div className={'w-[160px] py-[7px] px-[9px] h-[13px] bg-[#3f8854] rounded-[4px]'}></div>
                            </div>
                            <div
                                className={"rounded-[4px] flex items-center gap-[10px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                                <CrossIcon className={'h-[24px] w-[24px] text-[#c54242]'} />
                                <div className={'w-[160px] py-[7px] px-[9px] h-[13px] bg-[#c54242] rounded-[4px]'}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Product
