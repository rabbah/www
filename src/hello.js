function assemble(mobile) {
  let html = `
    <!DOCTYPE html>
    <html lang="en" lang="en">
    <head>
      <title>Rodric Rabbah</title>
      <meta property="og:title" content="Rodric Rabbah"/>
      <meta property="og:description" content="RODRIC RABBAH"/>
      ${commonHeaderPrologue()}
      ${mobileHeaderBody()}
      ${commonHeaderEpilogue()}
    </head>
     
    <body class="no-touch no-header-page wsite-menu-slideright  wsite-theme-light  wsite-page-index wsite-mobile wsite-render3d" ontouchstart="">
    ${mobileBodyBanner()}
    ${mobileMenu()}
     ...
    ${footer(true)}
    ${gtracker()}
    </body>
    </html>`
  return html
}

function commonHeaderPrologue() {
    return `
      <meta property="og:url" content="https://rabbah.io"/>
      <meta property="og:site_name" content="Rodric Rabbah"/>

      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
      <link rel="manifest" href="favicon/site.webmanifest">
      <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5">
      <meta name="msapplication-TileColor" content="#2b5797">
      <meta name="theme-color" content="#ffffff">
 
      <meta name="description" content="RODRIC RABBAH"/>
      <meta name="keywords" content="RODRIC,RABBAH,SERVERLESS,OPENWHISK,LAMBDA,IBM,RESEARCH"/>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">`
}

function mobileHeaderBody() {
    return `
      <link id="wsite-base-style" rel="stylesheet" type="text/css" href="http://cdn2.editmysite.com/css/sites.css?buildTime=1521156149"/>
      <link rel="stylesheet" type="text/css" href="http://cdn2.editmysite.com/css/mobile-sites.css?buildTime=1521156149"/>
      <link rel="stylesheet" type="text/css" href="files/mobile/main_style.css?1521149617" title="wsite-theme-css"/>
      <link href="http://fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext" rel="stylesheet" type="text/css"/>
      <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700&subset=latin,latin-ext" rel="stylesheet" type="text/css"/>
      <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext" rel="stylesheet" type="text/css"/>

      <style type="text/css">
        .wmobile-line,
        .wmobile-bar,
        .wmobile-button {
          background-color: #383B3D !important;
        }
      </style>`
}

function commonHeaderEpilogue() {
  return `
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

    <script type="text/javascript" src="http://cdn2.editmysite.com/js/lang/en/stl.js?buildTime=1521134113&"></script>
    <script src="http://cdn2.editmysite.com/js/site/main-mobile.js?buildTime=1521156149"></script>
    <script type="text/javascript" src="http://cdn2.editmysite.com/js/lang/en/stl.js?buildTime=1521156149&"></script>`
}

function mobileBodyBanner() {
  return `
    <div id="header">
      <span id="menu-button">
        <a class="wsite-menu-button">
          <span class="wsite-menu-button-text disable-user-select">Menu</span>
          <div class="wsite-menu-button-bars">
            <span class="wsite-menu-button-bar"></span>
            <span class="wsite-menu-button-bar"></span>
            <span class="wsite-menu-button-bar"></span>
          </div>
        </a>
      </span>

      <h1>
        <span class="wsite-logo">
          <a href="/">
            <span style="">Rodric Rabbah</span>
          </a>
        </span>
      </h1>

      <span id="header-button"></span>
      <div style="clear:both"></div>
    </div>`
}

function mobileMenu() {
  return `
    <div id="menu-wrapper" class="wsite-menu-wrapper">
      <div id="search"></div>
      <div id="menu">
        <ul class="wsite-menu-default">
          <li id="active" class="wsite-menu-item-wrap">
            <a href="/" class="wsite-menu-item">About Me</a>
          </li>
          <li class="wsite-menu-item-wrap">
            <a href="publications.html" class="wsite-menu-item">Publications</a>
          </li>
          <li class="wsite-menu-item-wrap">
            <a href="patents.html" class="wsite-menu-item">Patents</a>
          </li>
          <li class="wsite-menu-item-wrap">
            <a href="openwhisk.html" class="wsite-menu-item">OpenWhisk</a>
          </li>
          <li class="wsite-menu-item-wrap">
            <a href="research.html" class="wsite-menu-item">Research</a>
          </li>
          <li class="wsite-menu-item-wrap">
            <a href="software-and-artifacts.html" class="wsite-menu-item">Software and Artifacts</a>
          </li>
        </ul>
      </div>
  
      <div id="phone"></div>
      <div id="social">
        <div style="text-align:left;">
          <div style="height:0px;overflow:hidden"></div>
          <span class="wsite-social wsite-social-default">
            <a class='first-child wsite-social-item wsite-social-twitter' href='https://twitter.com/rabbah/' target='_blank' alt-text='Twitter'><span class='wsite-social-item-inner'></span></a>
            <a class='wsite-social-item wsite-social-linkedin' href='https://www.linkedin.com/in/rabbah' target='_blank' alt-text='Linkedin'><span class='wsite-social-item-inner'></span></a>
            <a class='last-child wsite-social-item wsite-social-mail' href='mailto:rodric@gmail.com' target='_blank' alt-text='Mail'><span class='wsite-social-item-inner'></span></a>
          </span>
          <div style="height:0px;overflow:hidden"></div>
        </div>
      </div>
    </div>`
}

function footer(enable) {
    if (enable) return `
      <div id="footer">
        <div class="wsite-mobile-footer">
          <div class="wsite-footer-version">
            Version:
            <span class="wsite-footer-version-text">Mobile
              <span class="wsite-footer-vertical">|</span>
              <a class="wsite-version-web" href="?view=full">Web</a>
            </span>
          </div>
        </div>
      </div>`
  else return ''
}

function gtracker() {
    return `
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112777410-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-112777410-1');
      </script>`
}

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: assemble()
  });
}