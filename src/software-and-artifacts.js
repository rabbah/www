let menu = require('./menu')
let assemble = require('./assemble')

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: assemble.mobile(menu.tabs, menu.tabs['software-and-artifacts'], content())
  });
}

function content() {
  return `
    <div class="content-wrapper">

    
<div id="content">
    <div id="wsite-content" class="wsite-elements wsite-not-footer">
        <h2 class="wsite-content-title">Software Artifacts<br></h2>

        <div>
            <div id="444173687179584922" style="width: 100%; overflow-y: hidden;" class="wcustomhtml" align="left">
                <table cellspacing="10px">
                    <tbody>
                        <tr>
                            <td style="text-align: left;"><a href="https://www.npmjs.com/package/@ibm-functions/shell">Shell</a></td>
                            <th style="text-align: left; padding-left: 10px;">&nbsp;</th>
                            <td>A programming shell for the serverless cloud.</td>
                        </tr>
                        <tr>
                            <td style="text-align: left;"><a href="https://www.npmjs.com/package/@ibm-functions/composer">Composer</a></td>
                            <th style="text-align: left; padding-left: 10px;">&nbsp;</th>
                            <td>A library for programming serverles compositions.</td>
                        </tr>
                        <tr>
                            <td style="text-align: left;"><a href="https://github.com/openwhisk/openwhisk">OpenWhisk</a></td>
                            <th style="text-align: left; padding-left: 10px;">&nbsp;</th>
                            <td>An open plaform for serverless, event-based computing.</td>
                        </tr>
                        <tr>
                            <td style="text-align: left;"><a href="http://groups.csail.mit.edu/cag/streamit">StreamIt</a></td>
                            <th style="text-align: left;">&nbsp;</th>
                            <td>Language, compiler, and benchmarks for streaming systems.</td>
                        </tr>
                        <tr>
                            <td style="text-align: left;"><a href="http://www.trimaran.org">Trimaran</a></td>
                            <th style="text-align: left;">&nbsp;</th>
                            <td>Compiler and simulator for EPIC and VLIW research.</td>
                        </tr>
                        <tr>
                            <td style="text-align: left;"><a href="http://groups.csail.mit.edu/cag/versabench/">VersaBench</a></td>
                            <th style="text-align: left;">&nbsp;</th>
                            <td>Benchmark suite for evaluating processor performance.</td>
                        </tr>
                        <tr>
                            <td style="text-align: left;"><a href="http://people.csail.mit.edu/rabbah/download/cache-pintools/">Pin iCache Tool </a></td>
                            <th style="text-align: left;">&nbsp;</th>
                            <td>Pin tool for data and instruction cache simulations.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

        <div>
            <div style="height: 20px; overflow: hidden; width: 100%;"></div>
            <hr class="styled-hr" style="width:100%;">
            <div style="height: 20px; overflow: hidden; width: 100%;"></div>
        </div>

        <h2 class="wsite-content-title">Open Courseware<br></h2>

        <div class="paragraph"><strong>MIT IAP 2007 - 6.189: Multicore Programming Primer</strong>
            <br>This course was a brand new 2007 class offering open to all MIT students (undergraduates and graduates). I co-taught the course with <a href="http://people.csail.mit.edu/saman">Prof. Saman Amarashinghe</a>. The course ran from January 8 to February 2, and covered 18 lectures including some guest speakers. In this course students spent several weeks learning about new multicore architectures and parallel programming patterns. As a practical twist to the course, student learned to program Cell processor using Sony PlayStation 3 consoles. The course culminated in an exciting competition, and prizes were awarded to the best projects. The course was a lot of fun to organize and teach, and it received a lot of publicity.
            <br>
            <br>The course is <a href="http://ocw.mit.edu/OcwWeb/Electrical-Engineering-and-Computer-Science/6-189January--IAP--2007/CourseHome/index.htm">available online as part of MIT Open Courseware</a>.
            <br>
        </div>
    </div>
</div>


    </div>`
}
