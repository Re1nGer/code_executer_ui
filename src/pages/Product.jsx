import ProductPromptSkeletons from "@/components/ProductPromptSkeletons.jsx";
import ProductTestSkeletons from "@/components/ProductTestSkeletons.jsx";
import ProductInputSkeletons from "@/components/ProductInputSkeletons.jsx";
import ProductLanding from "@/components/ProductLanding.jsx";
import ProductOutputSkeleton from "@/components/ProductOutputSkeleton.jsx";

const Product = () => {

    return (
        <div className={`flex justify-center min-h-[320px] gap-[50px]`}>
            <div className={'pl-[20px] text-white basis-[50%] flex justify-end'}>
                <ProductLanding />
            </div>
            <div className={'flex-1 max-h-[700px] product__banner_container'}>
                <div
                    className={'flex flex-wrap gap-[10px] text-white font-bold max-h-[500px] max-w-[600px] product__banner'}>
                    <ProductPromptSkeletons />
                    <ProductTestSkeletons />
                    <ProductInputSkeletons />
                    <ProductOutputSkeleton />
                </div>
            </div>
        </div>
    )
}

export default Product
