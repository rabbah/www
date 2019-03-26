const DEBUG = process.env.SITE_DEBUG || false
const SITE_PREFIX = DEBUG ? "https://rabbah.io" : ''

module.exports.commonHeaderPrologue = function() {
  return `
    <link rel="apple-touch-icon" sizes="180x180" href="${SITE_PREFIX}/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="${SITE_PREFIX}/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="${SITE_PREFIX}/favicon/favicon-16x16.png">
    <link rel="manifest" href="${SITE_PREFIX}/favicon/site.webmanifest">
    <link rel="mask-icon" href="${SITE_PREFIX}/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#2b5797">
    <meta name="theme-color" content="#ffffff">
 
    <meta name="description" content="RODRIC RABBAH"/>
    <meta name="keywords" content="RODRIC,RABBAH,SERVERLESS,OPENWHISK,LAMBDA,IBM,RESEARCH"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`
}

module.exports.desktopHeaderBody = function() {
  return `
    <link id="wsite-base-style" rel="stylesheet" type="text/css" href="https:////cdn2.editmysite.com/css/sites.css?buildTime=1521163380" />
    <link rel="stylesheet" type="text/css" href="https://cdn2.editmysite.com/css/old/fancybox.css?1521134113" />
    <link rel="stylesheet" type="text/css" href="${SITE_PREFIX}/files/main_style2ed1.css?1521149617" title="wsite-theme-css" />
    <link href='https://fonts.googleapis.com/css?family=Actor&subset=latin,latin-ext' rel='stylesheet' type='text/css' />

    <style type='text/css'>
    .wsite-elements.wsite-not-footer:not(.wsite-header-elements) div.paragraph, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) p, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-block .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-description, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .wsite-form-field label, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .wsite-form-field label, #wsite-content div.paragraph, #wsite-content p, #wsite-content .product-block .product-title, #wsite-content .product-description, #wsite-content .wsite-form-field label, #wsite-content .wsite-form-field label, .blog-sidebar div.paragraph, .blog-sidebar p, .blog-sidebar .wsite-form-field label, .blog-sidebar .wsite-form-field label {}
    #wsite-content div.paragraph, #wsite-content p, #wsite-content .product-block .product-title, #wsite-content .product-description, #wsite-content .wsite-form-field label, #wsite-content .wsite-form-field label, .blog-sidebar div.paragraph, .blog-sidebar p, .blog-sidebar .wsite-form-field label, .blog-sidebar .wsite-form-field label {}
    .wsite-elements.wsite-footer div.paragraph, .wsite-elements.wsite-footer p, .wsite-elements.wsite-footer .product-block .product-title, .wsite-elements.wsite-footer .product-description, .wsite-elements.wsite-footer .wsite-form-field label, .wsite-elements.wsite-footer .wsite-form-field label{}
    .wsite-elements.wsite-not-footer:not(.wsite-header-elements) h2, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-long .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-large .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-small .product-title, #wsite-content h2, #wsite-content .product-long .product-title, #wsite-content .product-large .product-title, #wsite-content .product-small .product-title, .blog-sidebar h2 {}
    #wsite-content h2, #wsite-content .product-long .product-title, #wsite-content .product-large .product-title, #wsite-content .product-small .product-title, .blog-sidebar h2 {color:#3f3f3f !important;}
    .wsite-elements.wsite-footer h2, .wsite-elements.wsite-footer .product-long .product-title, .wsite-elements.wsite-footer .product-large .product-title, .wsite-elements.wsite-footer .product-small .product-title{}
    #wsite-title {}
    .wsite-menu-default a {}
    .wsite-menu a {}
    .wsite-image div, .wsite-caption {}
    .galleryCaptionInnerText {}
    .fancybox-title {}
    .wslide-caption-text {}
    .wsite-phone {}
    .wsite-headline,.wsite-header-section .wsite-content-title {}
    .wsite-headline-paragraph,.wsite-header-section .paragraph {}
    .wsite-button-inner {}
    .wsite-not-footer blockquote {}
    .wsite-footer blockquote {}
    .blog-header h2 a {}
    #wsite-content h2.wsite-product-title {}
    .wsite-product .wsite-product-price a {}
    @media screen and (min-width: 767px) {.wsite-elements.wsite-not-footer:not(.wsite-header-elements) div.paragraph, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) p, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-block .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-description, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .wsite-form-field label, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .wsite-form-field label, #wsite-content div.paragraph, #wsite-content p, #wsite-content .product-block .product-title, #wsite-content .product-description, #wsite-content .wsite-form-field label, #wsite-content .wsite-form-field label, .blog-sidebar div.paragraph, .blog-sidebar p, .blog-sidebar .wsite-form-field label, .blog-sidebar .wsite-form-field label {}
    #wsite-content div.paragraph, #wsite-content p, #wsite-content .product-block .product-title, #wsite-content .product-description, #wsite-content .wsite-form-field label, #wsite-content .wsite-form-field label, .blog-sidebar div.paragraph, .blog-sidebar p, .blog-sidebar .wsite-form-field label, .blog-sidebar .wsite-form-field label {}
    .wsite-elements.wsite-footer div.paragraph, .wsite-elements.wsite-footer p, .wsite-elements.wsite-footer .product-block .product-title, .wsite-elements.wsite-footer .product-description, .wsite-elements.wsite-footer .wsite-form-field label, .wsite-elements.wsite-footer .wsite-form-field label{}
    .wsite-elements.wsite-not-footer:not(.wsite-header-elements) h2, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-long .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-large .product-title, .wsite-elements.wsite-not-footer:not(.wsite-header-elements) .product-small .product-title, #wsite-content h2, #wsite-content .product-long .product-title, #wsite-content .product-large .product-title, #wsite-content .product-small .product-title, .blog-sidebar h2 {}
    #wsite-content h2, #wsite-content .product-long .product-title, #wsite-content .product-large .product-title, #wsite-content .product-small .product-title, .blog-sidebar h2 {}
    .wsite-elements.wsite-footer h2, .wsite-elements.wsite-footer .product-long .product-title, .wsite-elements.wsite-footer .product-large .product-title, .wsite-elements.wsite-footer .product-small .product-title{}
    #wsite-title {}
    .wsite-menu-default a {}
    .wsite-menu a {}
    .wsite-image div, .wsite-caption {}
    .galleryCaptionInnerText {}
    .fancybox-title {}
    .wslide-caption-text {}
    .wsite-phone {}
    .wsite-headline,.wsite-header-section .wsite-content-title {}
    .wsite-headline-paragraph,.wsite-header-section .paragraph {}
    .wsite-button-inner {}
    .wsite-not-footer blockquote {}
    .wsite-footer blockquote {}
    .blog-header h2 a {}
    #wsite-content h2.wsite-product-title {}
    .wsite-product .wsite-product-price a {}
    }</style>`
}

module.exports.mobileHeaderBody = function() {
  return `
    <link id="wsite-base-style" rel="stylesheet" type="text/css" href="https://cdn2.editmysite.com/css/sites.css?buildTime=1521156149"/>
    <link rel="stylesheet" type="text/css" href="https://cdn2.editmysite.com/css/mobile-sites.css?buildTime=1521156149"/>
    <link rel="stylesheet" type="text/css" href="${SITE_PREFIX}/files/mobile/main_style.css?1521149617" title="wsite-theme-css"/>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&subset=latin,latin-ext" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext" rel="stylesheet" type="text/css"/>

    <style type="text/css">
      .wmobile-line,
      .wmobile-bar,
      .wmobile-button {
        background-color: #383B3D !important;
      }
    </style>`
}

module.exports.commonHeaderEpilogue = function({mobile}) {
  return `
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

    <script type="text/javascript" src="https://cdn2.editmysite.com/js/lang/en/stl.js?buildTime=1521134113&"></script>
    <script type="text/javascript" src="https://cdn2.editmysite.com/js/site/main${mobile ? '-mobile' : ''}.js?buildTime=1521156149"></script>
    <script type="text/javascript" src="https://cdn2.editmysite.com/js/lang/en/stl.js?buildTime=1521156149&"></script>`
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

module.exports.desktopMenu = function(tabs, activeTab, mode) {
  return `
    <div id="header-wrap">
      <div id="page">
        <div id="header-container">

          <div id="topnav" style="margin-top: 10px; background-color: #ececec">
            <div style="float:left;width:80%"><ul class="wsite-menu-default">
              ${menu(tabs, activeTab, mode)}
            </ul></div>
          </div>
          <div style="float:right">
            <a style="padding:0" class='first-child wsite-social-item wsite-social-twitter' href='https://twitter.com/rabbah/' target='_blank' alt-text='Twitter'><span class='wsite-social-item-inner'></span></a>
            <a style="padding:0" class='wsite-social-item wsite-social-linkedin' href='https://www.linkedin.com/in/rodric' target='_blank' alt-text='Linkedin'><span class='wsite-social-item-inner'></span></a>
            <a style="padding:0" class='last-child wsite-social-item wsite-social-mail' href='mailto:rodric@gmail.com' target='_blank' alt-text='Mail'><span class='wsite-social-item-inner'></span></a>
          </div>

        </div>
      </div>
    </div>`
}

module.exports.mobileMenu = function(tabs, activeTab, mode) {
  return `
    <div id="menu-wrapper" class="wsite-menu-wrapper">
      <div id="search"></div>
      <div id="menu">
        <ul class="wsite-menu-default">
          ${menu(tabs, activeTab, mode)}
        </ul>
      </div>
  
      <div id="phone"></div>
      <div id="social">
        <div style="text-align:left;">
          <div style="height:0px;overflow:hidden"></div>
          <span class="wsite-social wsite-social-default">
            <a class='first-child wsite-social-item wsite-social-twitter' href='https://twitter.com/rabbah/' target='_blank' alt-text='Twitter'><span class='wsite-social-item-inner'></span></a>
            <a class='wsite-social-item wsite-social-linkedin' href='https://www.linkedin.com/in/rodric' target='_blank' alt-text='Linkedin'><span class='wsite-social-item-inner'></span></a>
            <a class='last-child wsite-social-item wsite-social-mail' href='mailto:rodric@gmail.com' target='_blank' alt-text='Mail'><span class='wsite-social-item-inner'></span></a>
          </span>
          <div style="height:0px;overflow:hidden"></div>
        </div>
      </div>
    </div>`
}

function menu(tabs, activeTab, mode) {
  let html = ''
  let override = mode.mobile && mode.override ? '?mode=mobile' : mode.override ? '?mode=desktop' : ''

  Object.getOwnPropertyNames(tabs).forEach(tab => {
    if (tabs[tab].notab === true) return;
    let id = activeTab.label == tabs[tab].label ? 'id="active"' : ''
    html += `<li ${id} class="wsite-menu-item-wrap">
      <a href="/${tabs[tab].href}${override}" class="wsite-menu-item">${tabs[tab].label}</a>
    </li>`
  })

  return html
}

module.exports.footer = function(enable) {
  if (enable) return `
    <div id="footer">
      <div class="wsite-mobile-footer">
        <div class="wsite-footer-version">
          <a class="wsite-version-web" href="?mode=desktop">request desktop site</a>
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
