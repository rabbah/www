let menu = require('./menu')
let assemble = require('./assemble')

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: assemble.generate(menu.tabs, menu.tabs.pintools, content(), assemble.detectMobile(event))
  })
}

function content() {
  return `
<div id="content">
  <div id="wsite-content" class="wsite-elements wsite-not-footer">
    <h2 class="wsite-content-title">Cache Pintools<br></h2>

    <div>
      <div style="width: 100%; overflow-y: hidden;" class="wcustomhtml" align="left">
        To use the cache tools, you first need to <a href="https://software.intel.com/en-us/articles/pin-a-binary-instrumentation-tool-downloads">obtain and install Pin</a>. Then <a href="uploads/cache-pintools.tgz">download</a> and install the cache tool as shown below.<br>
         <br>
         <div class="paragraph"><strong>Download and Installation</strong><br>
           The following commands unpack the tarball, and compile the cache simulation
           tools. The instructions assume Pin is installed in <tt>/home/pin</tt>, and
           that you are using a C shell.<br>
           <br>
           <pre>
             wget https://rabbah.io/uploads/cache-pintools.tgz
             tar zxvf cache-pintools.tgz
             cd cache-pintools
             setenv PIN_HOME /home/pin
             make
           </pre>

           The tarball includes a file (<tt>envars.tcsh</tt>) that you may edit and source before <tt>make</tt>. In the file, you may also set your preferred C++ compiler (although it must be compatible with the version of Pin you have installed).
         </div>

         <div class="paragraph"><strong>How to Use</strong><br>
           The cache tool is used like any other Pin tool.
           The following command line instruments <tt>a.out</tt>,
           extracts the instruction trace and simulates a 32KB 8-way associative instruction cache with
           128B lines:<br>
           <br>
           <pre>
             pin -t icache -c 32 -a 8 -b 128 -- a.out
           </pre>

           A list of the command line options for the instruction cache tool is available by running
           the tool as follows:<br>
           <br>
           <pre>
             pin -t icache -h -- ls
           </pre>

           Similarly for the data cache tool:<br>
           <br>
           <pre>
             pin -t dcache -h -- ls
           </pre>

           Both tools include an option (<tt>-z</tt>) to ignore the size of each reference.
           In addition, the data cache tool includes an option (<tt>-ns</tt>) to ignore
           all memory writes (stores).
         </div>

         <div class="paragraph"><strong>Credit</strong><br>
           The Pin tools are made available under the same license used by Pin. The instruction cache tool is modeled after the data cache tool that is distributed with Pin. At some point, I imagine the instruction cache tool will also be included with Pin distributions.<br>
           <br>
           If you use the cache tool for your research, follow the citation rules for Pin.
         </div>
      </div>
    </div>
  </div>
</div>`
}
