let menu = require('./menu')
let assemble = require('./assemble')

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: assemble.generate(menu.tabs, menu.tabs.patents, content(), assemble.detectMobile(event))
  })
}

function content() {
  return `
<div id="content">
  <div id="wsite-content" class="wsite-elements wsite-not-footer">
    <h2 class="wsite-content-title">Patents<br></h2>
    <div class="paragraph"><span><strong>2017</strong></span>
      <br><a href="https://www.google.com/patents/US20170242689" target="_blank" title="javascript.site.preview.main_1">Language-Independent Program Composition using Containers</a>
      <br><span>Perry S Cheng, Stephen Fink, Vinod Muthusamy, Rodric Rabbah, Aleksander Slominski</span>
      <br><span>US Patent App. 15/438,444</span>
      <br>
      <br><a href="http://www.freepatentsonline.com/y2017/0097925.html" target="_blank">Stream-Enabled Spreadsheet as a Circuit</a>
      <br><span>Martin Hirzel, Rodric Rabbah, Philippe Suter, Olivier Tardieu, Mandana Vaziri</span>
      <br><span>US Patent 20,170,097,925</span>
      <br>
      <br><span><strong>2015</strong></span>
      <br><a href="https://www.google.com/patents/US20160110176" target="_blank">Automatic Conversion of Sequential Array-Based Programs to Parallel Map-Reduce Programs</a>
      <br><span>Stephen Fink, Rodric Rabbah, Cosmin A Radoi, Manu Sridharan</span>
      <br><span>US Patent App. 14/820,998</span>
      <br>
      <br><span><strong>2014</strong></span>
      <br><a href="http://www.freepatentsonline.com/y2014/0380291.html" target="_blank">Extracting Stream Graph Structure in a Computer Language by Pre-Executing a Deterministic Subset</a>
      <br><span>Joshua S Auerbach, David F Bacon, Perry S Cheng, Stephen Fink, Rodric Rabbah</span>
      <br><span>US Patent 20,140,380,291</span>
      <br>
      <br><span><strong>2013</strong></span>
      <br><a href="https://www.google.com/patents/US20140208300" target="_blank">Communication Stack for Software-Hardware Co-Execution on Heterogeneous Computing Systems with Processors and Reconfigurable Logic (FPGAs)</a>
      <br><span>Perry S Cheng, Rodric Rabbah, Sunil K Shukla</span>
      <br><span>US Patent App. 13/959,234</span>
      <br>
      <br><a href="https://www.google.com/patents/US8566768" target="_blank">Best Clock Frequency Search for FPGA-Based Design</a>
      <br><span>Sunil K Shukla, Perry S Cheng, Rodric Rabbah</span>
      <br><span>US Patent 8,566,768</span>
      <br>
      <br><a href="http://www.google.com/patents/US20140208300" target="_blank">Communication Stack for Software-Hardware Co-Execution on Heterogeneous Computing Systems with Processors and Reconfi gurable Logic (FPGAs)</a>
      <br><span>Perry S Cheng, Rodric Rabbah, Sunil K Shukla</span>
      <br><span>US Patent App. 13/959,234</span>
      <br>
      <br><a href="http://www.freepatentsonline.com/y2013/0036409.html" target="_blank">Technique for Compiling and Running High-Level Programs on Heterogeneous Computers</a>
      <br><span>Joshua S Auerbach, David F Bacon, Perry S Cheng, Rodric Rabbah</span>
      <br><span>US Patent 20,130,036,409</span>
      <br>
      <br><span><strong>2012</strong></span>
      <br><a href="http://www.freepatentsonline.com/y2012/0054718.html" target="_blank">Extraction of Functional Semantics and Isolated Dataflow from Imperative Object Oriented Languages</a>
      <br><span>Joshua S Auerbach, David F Bacon, Perry S Cheng, Rodric Rabbah</span>
      <br><span>US Patent 20,120,054,718</span>
      <br>
      <br><a href="http://www.freepatentsonline.com/y2012/0041850.html" target="_blank">Incentivizing Content-Receivers in Social Networks</a>
      <br><span>Rodric Rabbah</span>
      <br><span>US Patent 20,120,041,850</span>
      <br>
      <br><span><strong>2010</strong></span>
      <br><a href="http://www.freepatentsonline.com/7856529.html" target="_blank">Customizable Memory Indexing Functions</a>
      <br><span>Shripad Nagarkar, Rodric Rabbah, Anant Agarwal</span>
      <br><span>US Patent 7,856,529</span>
      <br>
    </div>
  </div>
</div>`
}
