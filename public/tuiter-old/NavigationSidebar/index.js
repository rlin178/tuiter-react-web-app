const NavigationSidebar = () => {
    return(`
    <!-- List of users -->
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item" href="../home.html">
        <i class="fas fa-home"></i>
        <div class="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Home</div>
    </a>
    <a class="list-group-item active" href="../explore.html">
        <i class="fas fa-hashtag"></i>
        <div class="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Explore</div>
    </a>
    <a class="list-group-item" href="../notifications.html">
        <i class="fas fa-bell pe-2"></i>
        <div class="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xl-inline-block ps-1">Notifications</div>
    </a>
    <a class="list-group-item" href="../messages.html">
        <i class="fas fa-envelope pe-2"></i>
        <div class="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-1">Messages</div>
    </a>
    <a class="list-group-item" href="../bookmarks/index.html">
        <i class="fas fa-bookmark"></i>
        <div class="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Bookmarks</div>
    </a>
    <a class="list-group-item" href="../lists.html">
        <i class="fas fa-list"></i>
        <div class="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Lists</div>
    </a>
    <a class="list-group-item" href="../profile.html">
        <i class="fas fa-user"></i>
        <div class="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">Profile</div>
    </a>
    <a class="list-group-item" href="#">
        <i class="fas fa-ellipsis-h"></i>
        <div class="d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block ps-2">More</div>
    </a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
    <!--   Tuit button -->
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;

export function navigationSidebarComponent() {
    $('#wd-navigation-sidebar').append(`
        ${NavigationSidebar()}
    `);
}

navigationSidebarComponent();