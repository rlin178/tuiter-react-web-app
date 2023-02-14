const WhoToFollowListItem = (who) => {
    return(`
   <li class="list-group-item ps-0 pe-0">
        <div class="row m-0 align-items-center">
            <div class="col-md-3 col-lg-2 col-xxl-2">
                <img class="wd-pfp-size rounded-circle" src=${who.avatarIcon}>
            </div>
            <div class="col-md-5 col-lg-6 col-xxl-7 pe-0 text-nowrap">
                <span class="fw-bold">${who.userName} </span>
                <i class="fas fa-check-circle"></i><br>
                <span class="text-secondary">@${who.handle}</span>
            </div>
            <div class="col-md-4 col-xxl-3 ps-0">
                <a href="#">
                    <button class="float-end btn btn-primary rounded-pill">
                        Follow
                    </button>
                </a>
            </div>
        </div>
    </li>
 `);
}
export default WhoToFollowListItem;

export function whoToFollowListItemComponent(who) {
    $('#wd-who-to-follow-list').append(`
        ${WhoToFollowListItem(who)}
    `);
}

whoToFollowListItemComponent({
        avatarIcon: '../../../images/virgin.png',
        userName: 'Virgin Galactic',
        handle: 'virgingalactic',
    }
);