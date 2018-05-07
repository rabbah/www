let common = require('./common')

module.exports.detectMobile = function(event) {
  if (event.hasOwnProperty('queryStringParameters') && event.queryStringParameters.hasOwnProperty('mode')) {
    let mode = event.queryStringParameters.mode.toLowerCase()
    if (mode === 'desktop') return false
    else if (mode === 'mobile') return true
  }

  if (event.hasOwnProperty('headers') && event.headers.hasOwnProperty('user-agent')) {
    let userAgent = event.headers["user-agent"]
    return ((userAgent.match("iPhone") || userAgent.match("Android"))) != null
  }

  return false
}

module.exports.generate = function(tabs, activeTab, content, mobile) {
  let title = activeTab.title || activeTab.label
  let bodyClass = mobile ?
      "no-touch no-header-page wsite-menu-slideright  wsite-theme-light  wsite-page-index wsite-mobile wsite-render3d" :
      "short-header-page  wsite-theme-light  wsite-page-software-and-artifacts"

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>${title}</title>
      <meta property="og:title" content="${title}"/>
      <meta property="og:description" content="${title}"/>
      <meta property="og:url" content="https://rabbah.io"/>
      <meta property="og:site_name" content="Rodric Rabbah"/>

      ${common.commonHeaderPrologue()}
      ${mobile ? common.mobileHeaderBody() : common.webHeaderBody()}
      ${common.commonHeaderEpilogue({mobile: true})}
    </head>

    <body class="${bodyClass}">
      ${mobile ? common.mobileBodyBanner() : ''}
      ${mobile ? common.mobileMenu(tabs, activeTab) : common.webMenu(tabs, activeTab)}

      ${mobile ? mobileContent(content) : webContent(content)}

      ${common.footer(mobile)}
      ${common.gtracker()}
    </body>
    </html>`
}

function mobileContent(content) {
  return `
    <div class="content-wrapper">
      ${content}
    </div>`
}

function webContent(content) {
  return `
    <div id="main-wrap">
      <div id="page">
        <div id="main">
          <div id="content">
            ${content}
          </div>
        </div>
      </div>
    </div>`
}