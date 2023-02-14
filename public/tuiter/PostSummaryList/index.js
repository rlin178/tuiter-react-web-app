import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
           <ul class="list-group">
                ${
        posts.map(item => {
            return(PostSummaryItem(item));
        }).join('')
    }
           </ul>
`); }

export default PostSummaryList;

export function postSummaryListComponent() {
    $('#wd-post-summary-item').append(`
        ${PostSummaryList()}
    `);
}

// to test with html, must change who.js to have extra "../" before every path name
postSummaryListComponent();