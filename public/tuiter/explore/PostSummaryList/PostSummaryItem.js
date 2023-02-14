const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item p-0">
        <div class="row p-2 ps-3 pe-3 m-0">
           <div class="col-sm-9 col-xxl-10 p-0 pe-xxl-2">
                ${ post.topic === ""? `` : `<span class="text-secondary">${post.topic}</span><br>`}
                ${ post.userName === ""? `` : `<span class="fw-bold text-white">${post.userName} </span>`}
                <i class="fas fa-check-circle text-white"></i>
                <span class="text-secondary"> - ${post.time}</span><br>
                ${ post.title === ""? `` : `<span class="fw-bold text-white">${post.title}</span><br>`}
                ${ post.tweets === undefined? `` : `<span class="text-secondary">${post.tweets} Tuits</span>`}
            </div>
            <div class="col-sm-3 col-xxl-2 p-0">
                <img class="wd-image-size float-end" src=${post.image}>
            </div>
        </div>
    </li>
 `);
}
export default PostSummaryItem;

export function postSummaryItemComponent(post) {
    $('#wd-post-summary-item').append(`
        ${PostSummaryItem(post)}
    `);
}

postSummaryItemComponent({
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "image": "../../../images/react-blue.png",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    }

);