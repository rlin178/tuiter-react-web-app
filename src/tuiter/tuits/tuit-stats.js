import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk}
    from "../../services/tuits-thunks";

const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const toggleTuitLike = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.liked? tuit.likes - 1 : tuit.likes + 1,
            liked: !tuit.liked
        }))
    }
    const toggleTuitDislike = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.disliked? tuit.dislikes - 1 : tuit.dislikes + 1,
            disliked: !tuit.disliked
        }))
    }

    return(
        <div className="row text-secondary pt-2">
            <div className="pe-0 col-3">
                <button type="button" className="btn p-0 text-secondary">
                    <i className="bi bi-chat text-secondary"></i> {tuit.replies}
                </button>
            </div>
            <div className="pe-0 col-3">
                <button type="button" className="btn p-0 text-secondary">
                    <i className="bi bi-arrow-repeat text-secondary"></i> {tuit.retuits}
                </button>
            </div>
            <div className="pe-0 col-3">
                <button type="button" className="btn p-0 text-secondary" onClick={() => toggleTuitLike(tuit)}>
                    {tuit.liked? <i className="bi bi-heart-fill text-danger"></i>: <i className="bi bi-heart-fill"></i>} {tuit.likes}
                </button>
            </div>
            <div className="pe-0 col-2">
                <button type="button" className="btn p-0 text-secondary" onClick={() => toggleTuitDislike(tuit)}>
                    {tuit.disliked? <i className="bi bi-hand-thumbs-down-fill text-danger"></i>: <i className="bi bi-hand-thumbs-down-fill"></i>} {tuit.dislikes}
                </button>
            </div>
            <div className="pe-0 col-1">
                <button type="button" className="btn p-0 text-secondary">
                    <i className="bi bi-share-fill text-secondary"></i>
                </button>
            </div>
        </div>
    );
};
export default TuitStats;