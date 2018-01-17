<html lang="en"><head>
    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="Nick Slabbekoorn - Developer">
    <meta name="keywords" content="Nick, Slabbekoorn, PHP, Developer, Ontwikkelaar, PHP">
    <meta name="author" content="Nick Slabbekoorn">

    <title>Last.fm</title>

    <!-- Open Sans Google font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400">
    <!-- Raleway Google font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:700">
    <!-- Favicons -->
    <link rel="shortcut icon" href="/img/favico/marqa.ico">
    <link rel="apple-touch-icon" sizes="60x60" href="/img/favico/apple-icon-60x60.png">
    <!-- Ionicon fonts css file -->
    <link rel="stylesheet" href="/css/ionicons.min.css">
    <!-- magnific popup css file -->
    <link rel="stylesheet" href="/css/magnific-popup.css">
    <!-- Animate.css file -->
    <link rel="stylesheet" href="/css/animate.css">
    <!-- Owl carousel css file -->
    <link rel="stylesheet" href="/css/owl.carousel.css">
    <!-- Bootstrap file -->
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <!-- Custom styles css file -->
    <link rel="stylesheet" href="/css/style.css">
    <!-- Vegas BG slider -->
    <link rel="stylesheet" href="/css/vegas.css">
    <link rel="stylesheet" href="/lastfm/css/font-awesome.min.css">

    <link rel="stylesheet" href="/lastfm/css/lastfm.css">

    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.js"></script>
    <![endif]-->

<body>
<!-- Start Loading page -->
<div class="loading loaded">
    <div class="loading-wrapper">
        <div class="rec r1"></div>
        <div class="rec r2"></div>
        <div class="rec r3"></div>
        <div class="rec r4"></div>
        <div class="rec r5"></div>
    </div>
</div>
<!-- End Loading page -->

<div id="users">

</div>

<!-- TODO init users script. -->

<div class="col-lg-3" id="user-template" style="display:none">
    <h1><a href="{{userurl}}" target="_blank">{{username}}</a></h1>
    <div class="profile-pic">
        <img src="{{userimage}}" />
    </div>
    <div class="row current-tracks" id="current-tracks-{{username}}" style="">

    </div>
    <div class="row track-history" id="tracks-{{username}}">

    </div>
</div>

<div class="col-lg-12 text-center current-track" id="current-track-template" style="display:none">
    <div class="row">
        <div class="col-lg-12">
            <img src="{{image-src}}"/>
        </div>
        <div class="col-lg-12">
            <h3>
                <img id="nowplaying-{{username}}"src="https://www.last.fm/static/images/icons/eq_icon.2ee5f390e4e9.gif"/>
                {{artist}} - {{titel}}
            </h3>
            <br/><br/>
        </div>
    </div>
</div>

<div class="col-lg-12 track text-center" id="track-template" style="display:none">
    <div class="row">
        <div class="col-lg-4">
            <img src="{{image-src}}"/>
        </div>
        <div class="col-lg-8 text-left">
            <h6>{{datetime}}</h6>
            <h7>
                {{artist}} - {{titel}}
                <a href="spotify:search:{{searchQuery}}" class="text-success"><i class="fa fa-spotify"></i></a>
            </h7>
        </div>
    </div>
</div>

<!-- End Footer Section -->
<script src="/js/jquery-1.12.1.min.js"></script>
<script src="/lastfm/js/lastfm.api.cache.js"></script>
<script src="/lastfm/js/lastfm.api.js"></script>
<script src="/lastfm/js/lastfm.api.md5.js"></script>
<script src="/lastfm/config.js"></script>
<script src="/lastfm/js/scripts.js"></script>

</body></html>