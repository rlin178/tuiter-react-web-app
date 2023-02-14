import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <!-- search field and cog -->
            <div class="row m-0 align-items-center">
                <div class="row col-11 border-1 border rounded-pill bg-white m-0">
                    <i class="fas fa-search col-form-label col-1 p-0 pt-2 ps-1"></i>
                    <div class="col-11 p-0">
                        <input type="email"
                               class="form-control border-0 ps-0 shadow-none"
                               id="searchinput"
                               placeholder="Search Tuiter">
                    </div>
                </div>
                <div class="col-1 p-0">
                    <a class="float-end" href="explore.settings.html">
                        <i class="fas fa-cog fa-lg text-primary"></i>
                    </a>
                </div>
           </div>
           <!--Tabs-->
           <ul class="nav nav-tabs p-0 pt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <!--Image-->
            <div class="position-relative">
                <img class="img-fluid pt-2" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
                <p class="position-absolute text-white bottom-0 start-0 m-2 mb-1 fs-3 fw-bold">SpaceX's Starship </p>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

export function exploreComponent() {
    $('#wd-explore-component').append(`
        ${ExploreComponent()}
    `);
}

exploreComponent();