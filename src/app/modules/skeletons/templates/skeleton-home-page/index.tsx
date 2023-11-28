import SkeletonCardItem from "../../components/skeleton-card-item";

const SkeletonHomePage = () => {

    return (
        <main className="max-w-7xl w-full min-h-screen mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-2 mt-3 h-full hidden xl:block">
                    LEFT
                </div>
                <div className="xl:col-span-7 lg:col-span-8 col-span-full mt-3">
                    <SkeletonCardItem count={5}/>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 col-span-full mt-3 h-full">
                    RIGHT
                </div>
            </div>
        </main>
    )
}

export default SkeletonHomePage;