import { Fragment } from "react";
import CardTag from "../components/CardTag";

const TagsTemplate = () => {

    return (
        <div className="max-w-7xl w-full min-h-screen mx-auto mb-4">
            <div className="px-3 my-3">
                <div className="-mx-3">
                    <div className="px-3 mb-3">
                        <h1 className="font-extrabold text-2xl">Tags</h1>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-1">
                        {
                            [0,1,2,3,4,5,6,7,8,9.10,11,12].map((tag) => {
                                return (
                                    <Fragment key={tag}>
                                        <CardTag />
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TagsTemplate;