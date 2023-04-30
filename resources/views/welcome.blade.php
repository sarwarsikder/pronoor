<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Pronoor</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="MyraStudio" />

        <title>Laravel</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.min.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/magnific-popup.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/materialdesignicons.min.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/font-awesome.min.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/owl.carousel.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/owl.theme.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">

    </head>
    <body class="antialiased">
        <div id="app">
        </div>

        @vite(['resources/css/app.css', 'resources/js/app.js'])

        <script type="text/javascript" src="{{asset('js/ext/jquery.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/ext/scrollspy.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/ext/feather.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/ext/bootstrap.bundle.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/ext/jquery.easing.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/ext/isotope.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/ext/scrollspy.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/ext/owl.carousel.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/ext/app.js')}}"></script>
    </body>
</html>
