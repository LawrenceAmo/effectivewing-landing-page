
Vue.component('head-links', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<span>
    <link rel="stylesheet" href="../css/style.css">
      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather:400,700|Montserrat:300,400,500">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          

          
	<link rel="icon" href="favicon.ico" sizes="32x32" type="image/x-icon">
	<link rel="icon" href="favicon.ico" sizes="" type="image/x-icon">

  </span>`
  })




Vue.component('nav-bar', {
    data: function () {
      return {
        count: 0
      }
    },
    template: ` <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white scrolling-navbar shadow-none my-0"
    id="navbar-scroll">
    <div class="container my-0">

        <!-- Brand -->
        <a class="navbar-brand m-0 p-0" href="/">
            <img src="../img/logo.png" width="200" height="50px"
                class=" p-0 m-0 rounded-top rounded-right rounded-bottom rounded-left rounded-circle" alt="">
        </a>

        <!-- Collapse -->
        <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <!-- Left -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item  rounded">
                    <a class="nav-link" href="/">Home
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#coursecategory">Courses</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../pg/pricing.html">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../pg/about.html">About</a>
                </li>
                <li class="nav-item d-none">
                    <a href="https://www.facebook.com/effectivewing" class="nav-link">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li class="nav-item  py-0" id="login">
                    <a href="../pg/signin.html" class="nav-link   ">Log in
                        
                    </a>
                </li>
                
                <li class="nav-item  py-0 " id="register">
                    <a href="../pg/register.html" class="nav-link   ">Register
                        <i class="fas fa-user-plus mr-1 "></i>
                    </a>
                </li>
                <li class="nav-item  py-0" >
                    <a href="../pg/user.html" class="nav-link   d-none " id="admin">                    
                    </a>
                 </li>

                 <li class="nav-item  py-0 d-none" id="logout">
                    <a  class="nav-link " onclick="logout()">  
                    Log out                  
                    </a>
                 </li>

            </ul>

        </div>

    </div>
</nav>`
  })
