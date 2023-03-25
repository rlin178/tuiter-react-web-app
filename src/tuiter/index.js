import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import Nav from "../nav";
import {Routes, Route} from "react-router";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import summaryReducer from "./reducers/summary-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, summaries: summaryReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            {/*<Nav></Nav>*/}
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <Routes>
                        <Route index element={<NavigationSidebar active="home"/>}></Route>
                        <Route path="explore" element={<NavigationSidebar active="explore"/>}></Route>
                    </Routes>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route index element={<HomeComponent/>}></Route>
                        <Route path="/explore" element={<ExploreComponent/>}></Route>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter

// <WhoToFollowListItem who={{
//     userName: 'NASA', handle: 'NASA',
//         avatarIcon: 'nasa.png',
// }}/>
// <WhoToFollowListItem who={{
//     userName: 'Tesla', handle: 'tesla',
//     avatarIcon: 'tesla.png',
// }}/>
// <WhoToFollowListItem who={{
//     userName: 'SpaceX', handle: 'SpaceX',
//     avatarIcon: 'spacex.png',
// }}/>
