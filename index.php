<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#1e1e1e">
  <link rel="manifest" href="/manifest.json">
  <link rel="shortcut icon" href="/favicon/favicon.ico">
  <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
  <title>My App</title>
  <style>
    .loader {
      position: relative;
      margin: 250px auto;
      width: 200px;
      height: 200px;
      transform: rotate(45deg);
      background: rgba(0,0,0,.1);
      overflow: hidden;
      animation: scale 2400ms infinite;
    }
    .loader > div {
      width: 200px;
      height: 50px;
    }

    .loader--first {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate3d(200px, 0, 0);
      animation: first 1200ms infinite;
      background: teal;
    }

    .loader--second {
      position: absolute;
      top: 75px;
      left: -75px;
      transform: translate3d(0, -200px, 0) rotate(-90deg);
      animation: second 1200ms 400ms infinite;
      background: coral;
    }

    .loader--third {
      position: absolute;
      top: 75px;
      right: -75px;
      transform: rotate(90deg);
      transform: translate3d(0, 200px, 0) rotate(90deg);
      animation: third 1200ms 800ms infinite;
      background: coral;
    }

    .loader--fourth {
      position: absolute;
      top: 150px;
      left: 0;
      transform: translate3d(-200px, 0, 0);
      animation: fourth 1200ms 1200ms infinite;
      background: teal;
    }

    @keyframes scale {
      from { transform: rotate(45deg) scale3d(1,1,1); }
      50% { transform: rotate(45deg) scale3d(0.75,0.75,1); }
      to { transform: rotate(45deg) scale3d(1,1,1); }
    }

    @keyframes first {
      from { transform: translate3d(210px, 0, 0); }
      25% { transform: translate3d(-210px, 0, 0);}
      to { transform: translate3d(-210px, 0, 0);}
    }

    @keyframes second {
      from { transform: translate3d(0, -210px, 0) rotate(-90deg); }
      25% { transform: translate3d(0, 210px, 0) rotate(-90deg);}
      to { transform: translate3d(0, 210px, 0) rotate(-90deg);}
    }

    @keyframes third {
      from { transform: translate3d(0, 210px, 0) rotate(90deg); }
      25% { transform: translate3d(0, -210px, 0) rotate(90deg);}
      to { transform: translate3d(0, -210px, 0) rotate(90deg);}
    }

    @keyframes fourth {
      from { transform: translate3d(-210px, 0, 0); }
      25% { transform: translate3d(210px, 0, 0);}
      to { transform: translate3d(210px, 0, 0);}
    }  
  </style>
</head>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root">    
    <div className='loader'>
      <div className='loader--first' />
      <div className='loader--second' />
      <div className='loader--third' />
      <div className='loader--fourth' />
    </div>
  </div>
  <div id="modal-root"></div>
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
  <script>
    WebFont.load({ google: { families: ['Open Sans:400,700,900', 'Montserrat:400,700,900'] } });
  </script>
<script type="text/javascript" src="/js/vendor.min.186890ffb5d0dbc1.js"></script><script type="text/javascript" src="/js/app.min.ecf42f824362d98d.js"></script></body>

</html>