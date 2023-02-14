import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
                ${
                    who.map(whoItem => {
                        return(WhoToFollowListItem(whoItem));
                    }).join('')
                }
           </ul>
`); }

export default WhoToFollowList;

export function whoToFollowListComponent() {
    $('#wd-who-to-follow-list').append(`
        ${WhoToFollowList()}
    `);
}

// to test with html, must change who.js to have extra "../" before every path name
whoToFollowListComponent();