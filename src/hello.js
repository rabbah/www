function commonHeaderPrologue() {
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

function mobileHeaderBody() {
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

function commonHeaderEpilogue() {
  return `
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

    <script type="text/javascript" src="//cdn2.editmysite.com/js/lang/en/stl.js?buildTime=1521134113&"></script>
    <script src="//cdn2.editmysite.com/js/site/main-mobile.js?buildTime=1521156149"></script>
    <script type="text/javascript" src="//cdn2.editmysite.com/js/lang/en/stl.js?buildTime=1521156149&"></script>`
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

function assemble(mobile) {
  return `
    <!DOCTYPE html>
    <html lang="en">
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
    ${content()}
    ${footer(true)}
    ${gtracker()}
    </body>
    </html>`
}

function content() {
  return `
<div class="content-wrapper">
  <div id="content">
    <div id="wsite-content" class="wsite-elements wsite-not-footer">
      <div>
        <div class="wsite-multicol">
          <div class="wsite-multicol-table-wrap" style="margin:0 -15px;">
            <table class="wsite-multicol-table">
              <tbody class="wsite-multicol-tbody">
              <tr class="wsite-multicol-tr">

                <td class="wsite-multicol-col" style="width:74.193548387097%; padding:0 15px;">
                   <div class="paragraph">
                     I am one of the creators and the lead technical contributor
                     to <a href="http://openwhisk.org">Apache OpenWhisk</a>, an event based computing
                     model for the cloud. I was a founder of this effort&nbsp;<a
                           href="https://researcher.watson.ibm.com/researcher/view_group_subpage.php?id=9368">at
                     IBM Research</a> and contributed significantly to the design and
                     implementation of the core architecture, tooling and runtimes. You can find the
                     source code on <a href="https://github.com/openwhisk/openwhisk">GitHub</a>.
                     OpenWhisk is <em>the</em> open source platform for research and innovation in
                     serverless computing, which is also known as Functions-as-a-Service. It is
                     production-ready and available as a service via <a
                           href="https://ibm.biz/openwhisk">IBM Cloud Functions</a> and <a
                           href="https://www.adobe.io/apis/cloudplatform/runtime.html">Adobe as I/O
                     runtime</a>. It is also integrated with Red Hat's <span>OpenShift</span> and
                     deployed on-prem in several organization worldwide.<br/><br/>I am currently
                     pursuing a broader agenda around programming models and tooling for serverless
                     computing. This is reflected in <a
                           href="https://ibm.biz/serverless-composition">Composer</a> and the <a
                           href="https://ibm.biz/serverless-shell">Cloud Shell</a>, which we are
                     now <a href="https://www.npmjs.com/package/@ibm-functions/shell">available</a>
                     as technology previews from <a href="https://ibm.biz/serverless-research">IBM
                     Research</a>. Composer and Shell enable many classes of applications in IoT,
                     workflow orchestration, chatbots, and HPC to take advantage of the promises
                     offered by serverless computing: no infrastructure to maintain, elastic scaling
                     on demand, pay for what you use and not idle time.<br/><br/>Before OpenWhisk, I
                     spent several years leading the <a href="https://lime.mybluemix.net/">Liquid
                     Metal</a> project, which I also helped start. It was a research effort that
                     produced a language, compiler, and runtime for high level synthesis of
                     reconfigurable hardware. My other contributions at IBM include <a
                           href="https://www.ibm.com/support/knowledgecenter/SSCRJU_4.1.0/com.ibm.streams.welcome.doc/doc/excel_overview.html">computing
                     with spreadsheets</a>, and the <a href="https://researcher.ibm.com">content
                     management system for all IBM Researchers</a>.<br/><br/>Prior to joining
                     IBM, I spent several years as a research scientist at MIT where I contributed to
                     <a href="http://groups.csail.mit.edu/cag/streamit/">StreamIt</a>, a language,
                     compiler and runtime for stream programming. I later developed and co-taught a
                     multicore programming <a
                           href="http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-189-multicore-programming-primer-january-iap-2007/">primer</a>
                     as MIT OpenCourseWare.<br/><br/>As an undergraduate, and later in graduate
                     school, I made several contributions and supported <a
                           href="http://www.trimaran.org">Trimaran</a>, a compiler and simulator
                     for VLIW architectures. It was particularly rewarding because Trimaran was used
                     for teaching a few compiler courses around the world.<br/>
                   </div>
                </td>

                <td class="wsite-multicol-col" style="width:25.806451612903%; padding:0 15px;">
                  <div class="paragraph" style="text-align:left;">
                    <strong><a href="/uploads/rabbah-cv.pdf" target="_blank">Curriculum Vitae</a></strong>
                    <br/><br/>
                    <strong>Highlights</strong>
                    <ul>
                      <li>I recorded a podcast explaining <a
                              href="https://dzone.com/articles/key-serverless-concepts-for-developers"
                              target="_blank">some of the key Serverless concepts for
                        developers</a> with DZone's <a
                              href="https://dzone.com/users/1216575/travisvan.html"
                              target="_blank">Travis Van</a> and <a
                              href="https://dzone.com/users/1442703/travis_carlson.html"
                              target="_blank">Travis Carlson</a>.
                      </li>
                      <li>I talked about serverless application at <a
                              href="https://www-01.ibm.com/events/wwe/indexconf/indexconf18.nsf/"
                              target="_blank">Index San Fransisco </a>in February.
                      </li>
                      <li>I <a href="http://www.cs.cmu.edu/~15719/syllabus.html" target="_blank">visited
                        CMU to talk about</a> serverless computing and FaaS.
                      </li>
                      <li>I recorded a podcast on <a
                              href="https://softwareengineeringdaily.com/2017/12/04/serverless-scheduling-with-rodric-rabbah/"
                              target="_blank">Serverless Scheduling and the Serverless Trilemma</a>.
                      </li>
                      <li>We <a
                              href="https://www.ibm.com/blogs/bluemix/2017/10/serverless-composition-ibm-cloud-functions/">announced</a>
                        serverless compositions at <a href="http://serverlessconf.io/">Serverless
                          NYC</a> on October 10. Read about it in <a
                                href="http://www.zdnet.com/article/ibm-unveils-new-programming-model-for-building-serverless-applications/">ZDNet</a>
                        or try it on <a href="https://ibm.biz/serverless-composition">GitHub</a>
                        and <a href="https://www.npmjs.com/package/@ibm-functions/shell">npm</a>.&nbsp;
                      </li>
                      <li>Read our wo<em>rk at <a
                              href="https://conf.researchr.org/home/onward-2017">Onward!</a> </em>on
                        the<em> <a href="http://doi.acm.org/10.1145/3133850.3133855"
                                   target="_blank">Serverless Trilemma</a>.</em></li>
                    </ul>
                  </div>

                  <div class="paragraph" style="text-align:left;"><strong>Technical notes</strong>
                    <ul>
                      <li>
                        <a href="https://medium.com/@rabbah/performance-debugging-for-serverless-functions-using-the-ibm-cloud-shell-ceed43e07b5e"
                           target="_blank">Performance debugging for serverless functions using
                          the IBM Cloud Shell</a><br/></li>
                      <li>
                        <a href="https://medium.com/openwhisk/serverless-functions-in-your-favorite-language-with-openwhisk-f7c447558f42"
                           target="_blank">Serverless functions in your favorite language with
                          OpenWhisk</a><br/></li>
                      <li>
                        <a href="https://medium.com/openwhisk/the-duality-between-serverless-functions-and-apis-3cc4e525edab">The
                          duality between serverless functions and APIs</a></li>
                      <li>
                        <a href="https://medium.com/openwhisk/composing-functions-into-applications-70d3200d0fac">Composing
                          functions into applications</a></li>
                      <li>
                        <a href="https://medium.com/openwhisk/serverless-http-handlers-with-openwhisk-90a986cc7cdd">Serverless
                          HTTP handlers with OpenWhisk</a></li>
                      <li>
                        <a href="https://medium.com/openwhisk/run-swiftly-precompiled-swift-actions-775addae0345">Run
                          Swiftly: precompiled Swift actions</a></li>
                      <li>
                        <a href="https://www.ibm.com/blogs/bluemix/2017/01/docker-bluemix-openwhisk/">Using
                          Docker actions, running Golang, and other fun things with
                          OpenWhisk</a></li>
                      <li>
                        <a href="https://medium.com/openwhisk/advanced-debugging-of-openwhisk-actions-518414636932#.xb952o51a">Locally
                          debugging OpenWhisk actions</a></li>
                    </ul>
                    <br/>Read more of my articles on <a href="https://medium.com/@rabbah">Medium</a>.<br/>
                  </div>
                </td>

              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
}

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: assemble()
  });
}