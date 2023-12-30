import BuyAlgoExpertButton from "@/components/BuyAlgoExpertButton.jsx";
import { motion } from "framer-motion";
import ProductPromptSkeletons from "@/components/ProductPromptSkeletons.jsx";
import ProductTestSkeletons from "@/components/ProductTestSkeletons.jsx";
import ProductInputSkeletons from "@/components/ProductInputSkeletons.jsx";
import FailTestSkeleton from "@/components/FailedTestSkeleton.jsx";
import SuccessTestSkeleton from "@/components/SuccessTestSkeleton.jsx";

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
                    <ProductInputSkeletons/>
                    <div
                        className={"bg-[#15314b] max-h-[205px] flex flex-col rounded-[4px] border-[2px] border-[#15314b] max-w-[291px] h-full w-full"}>
                        <div className={"max-h-[30px] h-full flex justify-between items-center"}>
                            <h3 className={"pl-[10px]"}>Output</h3>
                            <button
                                className={"bg-[#008529] text-white text-center px-[15px] font-normal h-full"}>Submit
                            </button>
                        </div>
                        <div className={"flex flex-col gap-[10px] bg-[#02203c] product__test_scrollbar"}>
                            <FailTestSkeleton />
                            <SuccessTestSkeleton />
                            <SuccessTestSkeleton />
                            <SuccessTestSkeleton />
                            <FailTestSkeleton />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Product
