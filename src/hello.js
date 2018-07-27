let menu = require('./menu')
let assemble = require('./assemble')

exports.handler = function(event, context, callback) {
  let mode = assemble.detectMobile(event)

  callback(null, {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: assemble.generate(menu.tabs, menu.tabs.hello, content(mode.mobile), mode)
  })
}

function content(mobile) {
  let banner = mobile ? '' : `
    <div id="logo" class="wsite-logo" style="float:left">
      <span class="wsite-title" style="color: #515151;"><b>Rodric Rabbah</b></span>
      <br/>
      <span style="font-size: 18px; color: #515151;">rodric@gmail.com or @rabbah</span>
    </div>

    <div>
    <img src="https://rabbah.io/uploads/rr.png" alt="Portrait" style="padding: 15px 0 0 20px; width:10%" />
    </div>

    <div style="clear:both"></div>`

  return `
<div id="content">
  <div id="wsite-content" class="wsite-elements wsite-not-footer">
    <div>
      ${banner}

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
                  <strong><a href="/cv" target="_blank">Curriculum Vitae</a></strong>
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
                    <li>I talked about serverless applications at <a
                            href="https://www-01.ibm.com/events/wwe/indexconf/indexconf18.nsf/"
                            target="_blank">Index San Francisco </a>in February.
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
              </td>

            </tr>
            </tbody>
          </table>
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
      
      </div>
    </div>
  </div>
</div>`
}
