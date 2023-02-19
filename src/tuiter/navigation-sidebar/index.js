import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item" href="#">
                <i className="bi bi-fonts"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Tuiter</div>
            </a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`} href="#">
                <i className="bi bi-house-door-fill"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Home</div>
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`} href="#">
                <i className="bi bi-hash"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Explore</div>
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href="#">
                <i className="bi bi-bell-fill"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Notifications</div>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href="#">
                <i className="bi bi-envelope-fill"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Messages</div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href="#">
                <i className="bi bi-bookmark-fill"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Bookmarks</div>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href="#">
                <i className="bi bi-list-ul"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Lists</div>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href="#">
                <i className="bi bi-person-fill"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Profile</div>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href="#">
                <i className="bi bi-three-dots"></i>
                <div className="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">More</div>
            </a>
        </div>
    );
};
export default NavigationSidebar;