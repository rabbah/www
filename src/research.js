let menu = require('./menu')
let assemble = require('./assemble')

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: assemble.mobile(menu.tabs, menu.tabs.research, content())
  });
}

function content() {
  return `
    <div class="content-wrapper">
      <div id="content">
        <div id="wsite-content" class="wsite-elements wsite-not-footer">
	      <h2 class="wsite-content-title">IBM Research<br/></h2>

          <div class="paragraph"><a href="https://github.com/ibm-functions/composer/" target="_blank"><strong>Composer</strong></a> is a new model of programming applications that are both serverless by constructions, and which compose serverless, polyglot, functions. It offers a functional programming oriented library of combinators to describe control and data flow. It is available as an <a href="https://www.npmjs.com/package/@ibm-functions/composer">experimental offering</a> for IBM Cloud Functions and Apache OpenWhisk. You can also get the code and run it yourself from our <a href="https://ibm.biz/serverless-composition">GitHub</a> project.<br/></div>

          <div class="paragraph"><a href="https://www.npmjs.com/package/@ibm-functions/shell" target="_blank"><strong>Cloud Shell</strong></a> is a new <a href="https://ibm.biz/serverless-composition">programming experience</a> geared for the cloud and IBM Cloud Functions. It helps with developing, deploying, running, and debugging serverless Functions and compositions. It is available as an <a href="https://www.npmjs.com/package/@ibm-functions/shell" target="_blank" title="javascript.site.preview.main_1">experimental offering</a> for IBM Cloud Functions and Apache OpenWhisk. You can also get the code and run it yourself from our <a href="https://ibm.biz/serverless-shell">GitHub</a> project.<br/></div>

          <div class="paragraph"><a href="http://openwhisk.org" target="_blank"><strong>OpenWhisk</strong></a> is a new serverless computing ability that fills an important gap in the IBM cloud portfolio. It offers a simple yet composable programming model for cloud, web and mobile development. Whisk frees developers from the burden of managing backend processing systems and affords them a greater opportunity to focus on delivering business value and exceptional user experiences. It powers the IBM Serverless offering called <a href="https://ibm.biz/openwhisk">Cloud Functions</a>. You can also get the code and run it yourself from our <a href="https://github.com/openwhisk/openwhisk">GitHub</a> project.<br/></div>

          <div class="paragraph"><a href="http://researcher.watson.ibm.com/researcher/view_group.php?id=122" target="_blank"><strong>Liquid Metal</strong></a> aimed to exploit the increasing availability of FPGAs to offer end-to-end high-performance and low-power solutions for a broad range of applications. The challenge is that FPGA programming remains a difficult, time-consuming task and resources are often left under-utilized. The project aims to create a single unified programming language and environment that allows (all) portions of a system to move fluidly between hardware and software, dynamically and adaptively.</div>

          <div class="paragraph"><strong><a href="http://researcher.watson.ibm.com/researcher/view_group.php?id=5093" target="_blank">ActiveSheets</a></strong> made it feasible to use an off-the-shelf spreadsheet as a graphical user interface for visualizing and editing live streaming data. Spreadsheets are an easy platform that non-programmers can use to visualize and analyze data. With ActiveSheets, a user could debug and understand streaming code more easily, visualize executions, as well as edit the underlying code. They would thus act as sensors and actuators in a streaming program, providing a unique graphical user interface in which code can be edited in the same place where executions of that code are visualized. A <a href="http://rd.springer.com/chapter/10.1007/978-3-662-44202-9_15">paper</a> describing ActiveSheets was awarded a Distinguished Paper Award at the 2014 <a href="http://ecoop14.it.uu.se/">European Conference on Object-Oriented Programming</a> (ECOOP) and is an offering part of IBM Streams.<br/></div>

          <div>
            <div style="height: 20px; overflow: hidden; width: 100%;"></div>
            <hr class="styled-hr" style="width:100%;">
            <div style="height: 20px; overflow: hidden; width: 100%;"></div>
          </div>

          <h2 class="wsite-content-title">MIT CSAIL<br/></h2>

          <div class="paragraph"><a href="http://groups.csail.mit.edu/cag/streamit/" target="_blank"><strong>StreamIt</strong></a> was a novel language and compiler for streaming and signal processing applications, and a powerful optimizing compiler for commercial off-the-shelf DSP architectures, conventional CPUs, server farms, and emerging tiled-processor architectures. The ultimate goal of the StreamIt project is to develop a practical, high-level stream language that is easy to use but achieves the performance of hand-coded C and assembly code for DSP applications.<br/></div>

          <div class="paragraph"><a href="https://dl.acm.org/citation.cfm?id=1064978.1065045" target="_blank"><strong>StreamBit</strong></a> is a compiler that aims to increase productivity in the development of applications that process streams at the bit level. Such bit-stream programs occur in several domains such as cryptography and coding, and they are characterized by strong performance requirements and huge performance differences between highly tuned implementations and more naively written ones. For this reason, widely used implementations often combine clever high-level optimizations with careful low-level coding. StreamBit combines StreamIt with optimization sketches to allow for separation of concerns between the algorithm specification and the implementation details, greatly simplifying the development process.<br/></div>

          <div class="paragraph"><a href="http://groups.csail.mit.edu/cag/versabench/" target="_blank"><strong>VersaBench</strong></a> had three goals. The first is to understand how program behavior varies with its input workload. The second is to deliver a set of robust algorithms for the discovery of program phases. The third goal is to use the program characteristics to drive the investigation of various high-impact and low-cost architecture and ISA modifications.<br/></div>

          <div class="paragraph"><strong><a href="https://dl.acm.org/citation.cfm?id=1037947.1024416" target="_blank">Adaptive and Cooperative Execution</a></strong> allowed a program to adapt its behavior to runtime information communicated to it by the architecture. ACE relies on the compiler to orchestrate and embed within a program a set of precomputation chains that lead to runtime speculation geared toward faster (and more efficient) program execution.<br/></div>

          <div class="paragraph"><a href="http://dspace.mit.edu/handle/1721.1/34372" target="_blank"><strong>Reptile</strong></a> was focused on innovating compilation techniques to effectively parallelize C programs for the emerging class of tiled-processor architectures. Our immediate emphasis is on the <a href="http://groups.csail.mit.edu/cag/raw">MIT Raw processor</a>, an architecture designed to address the challenges that limit the scalability of current monolithic systems. Raw is a distributed and wired-exposed processors, with sixteen simple cores and compiled-controlled interconnect. Raw affords massive levels of parallelism and bandwidth, but as with any tiled-processor, it increases the burden on the compiler to effectively parallelize programs implemented in the traditional von Neumann model of computation (e.g., C programs). Reptile culminated in a <a href="http://dspace.mit.edu/handle/1721.1/34372">S.M. thesis</a> authored by <a href="http://www.linkedin.com/pub/ian-bratt/9/224/676/">Ian Bratt</a>.<br/></div>

          <div class="paragraph"><a href="http://www.trimaran.org/" target="_blank"><strong>Trimaran</strong></a> is a publicly available compilation and simulation framework for VLIW research. It is based on the HPL-PD parameterized processor architecture which supports novel features such as predication, control and data speculation, and compiler controlled management of the memory hierarchy. The HPL-PD is a precursor to the Intel Itanium Processor Family. Trimaran consists of a full suite of analysis and optimization modules, as well as a graph-based intermediate language. Optimizations and analysis modules can be easily added, deleted or bypassed, thus facilitating compiler optimization research. Similarly, computer architecture research can be conducted by varying the HPL-PD configuration via a machine description language, or through extension to the detailed simulation environment.<br/></div>
        </div>
      </div>
    </div>`
}
