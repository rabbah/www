module.exports.commonHeaderPrologue = function() {
  return `
    <meta property="og:url" content="https://rabbah.io"/>
    <meta property="og:site_name" content="Rodric Rabbah"/>

    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#2b5797">
    <meta name="theme-color" content="#ffffff">
 
    <meta name="description" content="RODRIC RABBAH"/>
    <meta name="keywords" content="RODRIC,RABBAH,SERVERLESS,OPENWHISK,LAMBDA,IBM,RESEARCH"/>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`
}

module.exports.mobileHeaderBody = function() {
    return `
      <link id="wsite-base-style" rel="stylesheet" type="text/css" href="//cdn2.editmysite.com/css/sites.css?buildTime=1521156149"/>
      <link rel="stylesheet" type="text/css" href="//cdn2.editmysite.com/css/mobile-sites.css?buildTime=1521156149"/>
      <link rel="stylesheet" type="text/css" href="/files/mobile/main_style.css?1521149617" title="wsite-theme-css"/>
      <link href="//fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext" rel="stylesheet" type="text/css"/>
      <link href="//fonts.googleapis.com/css?family=Montserrat:400,700&subset=latin,latin-ext" rel="stylesheet" type="text/css"/>
      <link href="//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext" rel="stylesheet" type="text/css"/>

      <style type="text/css">
        .wmobile-line,
        .wmobile-bar,
        .wmobile-button {
          background-color: #383B3D !important;
        }
      </style>`
}

module.exports.commonHeaderEpilogue = function() {
  return `
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

    <script type="text/javascript" src="//cdn2.editmysite.com/js/lang/en/stl.js?buildTime=1521134113&"></script>
    <script src="//cdn2.editmysite.com/js/site/main-mobile.js?buildTime=1521156149"></script>
    <script type="text/javascript" src="//cdn2.editmysite.com/js/lang/en/stl.js?buildTime=1521156149&"></script>`
}

module.exports.mobileBodyBanner = function() {
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

module.exports.mobileMenu = function(tabs, activeTab) {
  return `
    <div id="menu-wrapper" class="wsite-menu-wrapper">
      <div id="search"></div>
      <div id="menu">
        ${menu(tabs, activeTab)}
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

function menu(tabs, activeTab) {
  let html = `<ul class="wsite-menu-default">`

  Object.getOwnPropertyNames(tabs).forEach(tab => {
    let id = activeTab.label == tabs[tab].label ? 'id="active"' : ''
    html += `<li ${id} class="wsite-menu-item-wrap">
      <a href="${tab}" class="wsite-menu-item">${tabs[tab].label}</a>
    </li>`
  })

  html += `</ul>`
  return html
}

module.exports.footer = function(enable) {
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

module.exports.gtracker = function() {
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
