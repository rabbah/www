let common = require('./common')

module.exports.detectMobile = function(event) {
  if (event.hasOwnProperty('queryStringParameters') && event.queryStringParameters.hasOwnProperty('mode')) {
    let mode = event.queryStringParameters.mode.toLowerCase()
    if (mode === 'desktop') return { mobile: false, override: true }
    else if (mode === 'mobile') return { mobile: true, override: true }
  }

  if (event.hasOwnProperty('headers') && event.headers.hasOwnProperty('user-agent')) {
    let userAgent = event.headers["user-agent"]
    let mobile = ((userAgent.match("iPhone") || userAgent.match("Android"))) != null
    return { mobile: mobile, override: false }
  }

  return { mobile: false, override: false }
}

module.exports.generate = function(tabs, activeTab, content, mode) {
  let title = activeTab.title || activeTab.label
  let bodyClass = mode.mobile ?
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
      ${mode.mobile ? common.mobileHeaderBody() : common.desktopHeaderBody()}
      ${common.commonHeaderEpilogue({mobile: mode.mobile})}
    </head>

    <body class="${bodyClass}">
      ${mode.mobile ? common.mobileBodyBanner() : ''}
      ${mode.mobile ? common.mobileMenu(tabs, activeTab, mode) : common.desktopMenu(tabs, activeTab, mode)}

      ${mode.mobile ? mobileContent(content) : webContent(content)}

      ${common.footer(mode.mobile)}
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