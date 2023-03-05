import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <div className="list-group-item">
                <i className="bi bi-fonts"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Tuiter</div>
            </div>
            <Link className={`list-group-item
                    ${active === 'home'?'active':''}`} to="/tuiter">
                <i className="bi bi-house-door-fill"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Home</div>
            </Link>
            <Link className={`list-group-item
                    ${active === 'explore'?'active':''}`} to="/tuiter/explore">
                <i className="bi bi-hash"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Explore</div>
            </Link>
            <Link className={`list-group-item
                    ${active === 'labs'?'active':''}`} to="/">
                <i className="bi bi-journal-text"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Labs</div>
            </Link>
            <Link className={`list-group-item
                    ${active === 'notifications'?'active':''}`} to="#">
                <i className="bi bi-bell-fill"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Notifications</div>
            </Link>
            <Link className={`list-group-item
                    ${active === 'messages'?'active':''}`} to="#">
                <i className="bi bi-envelope-fill"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Messages</div>
            </Link>
            <Link className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} to="#">
                <i className="bi bi-bookmark-fill"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Bookmarks</div>
            </Link>
            <Link className={`list-group-item
                    ${active === 'lists'?'active':''}`} to="#">
                <i className="bi bi-list-ul"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Lists</div>
            </Link>
            <Link className={`list-group-item
                    ${active === 'profile'?'active':''}`} to="#">
                <i className="bi bi-person-fill"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Profile</div>
            </Link>
            <Link className={`list-group-item
                    ${active === 'more'?'active':''}`} to="#">
                <i className="bi bi-three-dots"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">More</div>
            </Link>
        </div>
    );
};
export default NavigationSidebar;