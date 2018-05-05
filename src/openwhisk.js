let common = require('./common')

function assemble(mobile) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>OpenWhisk</title>
      <meta property="og:title" content="OpenWhisk"/>
      <meta property="og:description" content="OpenWhisk"/>
      ${common.commonHeaderPrologue()}
      ${common.mobileHeaderBody()}
      ${common.commonHeaderEpilogue()}
    </head>
     
    <body class="no-touch no-header-page wsite-menu-slideright  wsite-theme-light  wsite-page-index wsite-mobile wsite-render3d" ontouchstart="">
    ${common.mobileBodyBanner()}
    ${common.mobileMenu()}
    ${content()}
    ${common.footer(true)}
    ${common.gtracker()}
    </body>
    </html>`
}

function content() {
  return `
  <div class="content-wrapper">
    <div id="content">
      <div id="wsite-content" class="wsite-elements wsite-not-footer">
	    <h2 class="wsite-content-title">OpenWhisk</h2>
        <div class="paragraph">
          In early 2015, a small group of us in Research started a new effort to bring a cloud-first and distributed
          event-based programming service to market. In February 2016 at
          <a href="http://www.ibm.com/cloud-computing/us/en/interconnect/">IBM InterConnect</a> in Las Vegas,
          <a href="http://www.ibm.com/cloud-computing/bluemix/openwhisk/">OpenWhisk</a> was announced publicly for the
          first time with availability on <a href="https://ibm.biz/openwhisk">Bluemix</a> and on
          <a href="https://github.com/openwhisk/openwhisk">GitHub</a>. In December of 2016, the platform became
          generally available. OpenWhisk was also admitted into the
          <a href="http://incubator.apache.org/">Apache Software Foundation Incubator</a> at about the same time.
          <br/><br/>
          OpenWhisk started as a small IBM Research endeavor, and grew significantly with two objectives:
          One, realize the compelling promise of serverless programming for cloud native applications.
          And two, seed the open source and research communities with a robust foundation on which further advances
          in serverless programming may be fostered. I am proud to be one of the founding members of OpenWhisk and to
          have continued my contributions to this work in what I think is a testament to a new and reinvented IBM.
          <br/><br/>
          I'm also responsible for the project name and the Whisk in OpenWhisk. Whisk, as in 
          "to move nimbly and quickly". Code runs quickly and then its resources are whisked away.
          The name lent itself to a 3 character command line tool "wsk" which is pronounced Whisk as well.
          The Open prefix was added later, for open source.
          <br/><br/>
          In developing OpenWhisk, my colleagues and I took a vertical approach that crossed many levels of
          abstraction from applications, to programming model, runtime and system architecture. This holistic approach
          is characteristic of my past contributions to research and open source, and is made possible by working along
          IBMers that have both broad skills and deep expertise in many facets of computer science and engineering.
          <br/><br/>
          I am excited by the potential OpenWhisk holds for IBM, the open source community, and academic research.
          <br/>
        </div>

        <div>
          <div style="height: 20px; overflow: hidden; width: 100%;"></div>
          <hr class="styled-hr" style="width:100%;">
          <div style="height: 20px; overflow: hidden; width: 100%;"></div>
        </div>

        <h2 class="wsite-content-title">Highlights and news<br/></h2>

        <div class="paragraph">
          <ul>
            <li>IBM Cloud Functions <a href="http://ibm.co/2kZFyxX">customer success story</a>, and <a href="https://medium.com/openwhisk/whisking-the-weather-74ecda4d7105">another</a>.</li>
            <li><a href="https://www.adobe.io/apis/cloudplatform/runtime.html">Adobe I/O runtime</a> now powered by Apache OpenWhisk.</li>
            <li><a href="https://developers.redhat.com/blog/2017/06/07/red-hat-and-apache-openwhisk/">Red Hat</a> joins Apache OpenWhisk.</li>
            <li>OpenWhisk sessions from <a href="http://openwhisk.org/events">IBM InterConnect 2017</a>.</li>
            <li>Apache OpenWhisk now <a href="https://www.ibm.com/blogs/bluemix/2016/12/general-availability-openwhisk/">generally available</a> on IBM <a href="https://ibm.biz/openwhisk">Bluemix</a>.</li>
            <li>OpenWhisk accepted as an <a href="http://incubator.apache.org/projects/openwhisk.html">Apache Incubator</a>.</li>
            <li><a href="https://github.com/openwhisk/awesome-openwhisk">Awesome OpenWhisk things</a>.</li>
            <li>Bluemix OpenWhisk announced at <a href="http://www.ibm.com/cloud-computing/us/en/interconnect/">IBM InterConnect 2016</a>.</li><li><a href="https://github.com/openwhisk/openwhisk">OpenWhisk source code </a> powering new Bluemix serverless computing capability released on GitHub to the open-source community under Apache License 2.0.</li>
          </ul>
        </div>

        <div>
          <div style="height: 20px; overflow: hidden; width: 100%;"></div>
          <hr class="styled-hr" style="width:100%;">
          <div style="height: 20px; overflow: hidden; width: 100%;"></div>
        </div>

        <h2 class="wsite-content-title">OpenWhisk coverage at launch<br/></h2>

        <div class="paragraph">
          <ul>
            <li><span><em>"OpenWhisk is coming into the world more fully baked [than AWS' Lambda]" – <a href="http://www.informationweek.com/cloud/platform-as-a-service/openwhisk-vies-with-aws-lambda-as-developer-service/d/d-id/1324672">InformationWeek</a></em></span></li>
            <li><span><em>"The new open-source cloud product announced, OpenWhisk, is a shot across Amazon’s bow." – <a href="http://www.forbes.com/sites/alexkonrad/2016/02/22/ibm-and-vmware-join-forces-to-move-millions-of-workloads-to-ibm-cloud" target="_blank">Forbes</a></em></span></li>
            <li><span><em>"IBM’s work around Swift, OpenWhisk and API Connect are worthy of attention." – <a href="http://redmonk.com/fryan/2016/02/29/swift-openwhisk-and-apis-reflections-on-ibm-interconnect/" target="_blank">Redmonk</a></em></span></li>
            <li><span><em>"OpenWhisk is IBM’s answer to Amazon Web Services’ event driven system Lambda."&nbsp;&nbsp;– <a href="http://www.businesscloudnews.com/2016/02/22/ibm-launches-swift-answer-to-lambda-at-interconnect-2016" target="_blank">Business Cloud News</a></em></span></li>
            <li><span><em>"OpenWhisk event-driven platform runs on Bluemix and has one advantage those other two platforms [Amazon Lambda and Google Cloud Function] don't". – <a href="http://www.infoworld.com/article/3036158/application-development/ibm-pursues-new-school-and-old-guard-with-latest-cloud-wares.html" target="_blank">InfoWorld</a></em></span></li>
            <li><span><em>"IBM is also launching a new cloud service called Bluemix OpenWhisk that represents an answer to Lambda event-driven computing service from public cloud market leader Amazon Web Services (AWS)."</em> – <a href="http://venturebeat.com/2016/02/22/ibm-cloud-launches-swift-runtime-open-source-aws-lambda-competitor-github-enterprise-vmware-support/" target="_blank">VentureBeat</a></span></li>
            <li><span><em>"The bottom line is that this serverless computing technology is ushering in a new way for developers to build applications, particularly apps serving the Internet of Things market."</em> – <a href="http://www.networkworld.com/article/3036100/cloud-computing/ibm-unveils-its-own-open-source-serverless-computing-platform.html" target="_blank">Network World</a></span></li>
            <li><span><em>"Servers? We don’t need no stinkin’ servers."</em> – <a href="http://techspective.net/2016/03/01/ibm-joins-serverless-computing-trend-with-bluemix-openwhisk/" target="_blank">TechSpective</a></span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>`
}

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: assemble()
  });
}