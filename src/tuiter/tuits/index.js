import React from "react";
import TuitItem
    from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default PostSummaryList;