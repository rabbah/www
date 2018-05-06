let common = require('./common')

module.exports.mobile = function(tabs, activeTab, content) {
  let title = activeTab.title || activeTab.label
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>${title}</title>
      <meta property="og:title" content="${title}"/>
      <meta property="og:description" content="${title}"/>
      ${common.commonHeaderPrologue()}
      ${common.mobileHeaderBody()}
      ${common.commonHeaderEpilogue()}
    </head>
     
    <body class="no-touch no-header-page wsite-menu-slideright  wsite-theme-light  wsite-page-index wsite-mobile wsite-render3d" ontouchstart="">
    ${common.mobileBodyBanner()}
    ${common.mobileMenu(tabs, activeTab)}
    ${content}
    ${common.footer(true)}
    ${common.gtracker()}
    </body>
    </html>`
}