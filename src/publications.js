let menu = require('./menu')
let assemble = require('./assemble')

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: assemble.generate(menu.tabs, menu.tabs.publications, content(), assemble.detectMobile(event))
  })
}

function content() {
  return `
<div id="content">
  <div id="wsite-content" class="wsite-elements wsite-not-footer">
    <h2 class="wsite-content-title"><font color="#515151"></font>Serverless, Reactive, and Stream Processing<font color="#515151"></font><br></h2>
    <div class="paragraph"><a href="http://dl.acm.org/citation.cfm?id=3133855" target="_blank">The Serverless Trilemma: Function Composition for Serverless Computing</a>
      <br><span>Ioana Baldini, Perry Cheng, Stephen J Fink, Nick Mitchell, Vinod Muthusamy, Rodric Rabbah, Philippe Suter and Olivier Tardieu.<br>In the proceedings of the Onward!, Vancouver, Canada, October 2017.</span>
      <br>
      <br><a href="https://arxiv.org/abs/1706.03178" target="_blank">Serverless Computing: Current Trends and Open Problems</a>
      <br><span>Ioana Baldini, Paul Castro, Kerry Chang, Perry Cheng, Stephen Fink, Vatche Ishakian, Nick Mitchell, Vinod Muthusamy, Rodric Rabbah, Aleksander Slominski, Philippe Suter.</span>
      <br><span>In arXiv </span> arXiv:1706.03178<span>, June 2017.</span>
      <br>
      <br><a href="http://dl.acm.org/citation.cfm?id=2897713" target="_blank">Cloud-Native, Event-based Programming for Mobile Applications</a>
      <br><span>Ioana Baldini, Paul Castro, Perry Cheng, Stephen Fink, Vatche Ishakian, Nick Mitchell, Vinod Muthusamy, Rodric Rabbah, Philippe Suter</span>
      <br><span>In proceedings of the International Workshop on Mobile Software Engineering and Systems, pp. 287--288, 2016</span>
      <br>
      <br><a href="http://dl.acm.org/citation.cfm?id=2933607" target="_blank">Spreadsheets for Stream Processing with Unbounded Windows and Partitions</a>
      <br><span>Martin Hirzel, Rodric Rabbah, Philippe Suter, Olivier Tardieu and Mandana Vaziri.<br>In proceedings of the 10th ACM International Conference on Distributed and Event-based System (DEBS), Irvine, CA, June 2016. </span>
      <br>
      <br><a href="http://arxiv.org/abs/1503.04215" target="_blank">Spreadsheets for Stream Partitions and Windows</a>
      <br><span>Martin Hirzel, Rodric Rabbah, Philippe Suter, Olivier Tardieu and Mandana Vaziri.<br>In proceedings of the Second Workshop on Software Engineering Methods in Spreadsheet, Florence, Italy, May 2015. </span>
      <br>
      <br><a href="http://dl.acm.org/citation.cfm?id=2660228" target="_blank">Translating Imperative Code to MapReduce</a>
      <br><span>Cosmin Radoi, Stephen J Fink, Rodric Rabbah and Manu Sridharan.<br>In proceedings of the ACM International Conference on Object Oriented Programming Systems Languages and Applications (OOPSLA), Portland, OR, October 2014. </span>
      <br>
      <br><a href="http://link.springer.com/chapter/10.1007/978-3-662-44202-9_15" target="_blank">Stream Processing with a Spreadsheet</a>
      <br><span>Mandana Vaziri, Olivier Tardieu, Rodric Rabbah, Philippe Suter and Martin Hirzel.<br>In procedings of the European Conference on Object-Oriented Programming (ECOOP), Uppsala, Sweden, July 2014. </span>
      <br>
    </div>
    <div>
      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
      <hr class="styled-hr" style="width:100%;">
      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
    </div>
    <h2 class="wsite-content-title">Hardware Synthesis<br></h2>
    <div class="paragraph"><a href="http://drops.dagstuhl.de/opus/volltexte/2015/5014/" target="_blank">Growing a Software Language for Hardware Design</a>
      <br><span>Joshua Auerbach, David Bacon, Perry Cheng, Stephen Fink, Rodric Rabbah and Sunil Shukla<br>In proceedings of the First Summit oN Advances in Programming Languages (SNAPL), Asilomar, CA, May 2015.</span>
      <br>
      <br><a href="http://researcher.watson.ibm.com/researcher/files/us-sjfink/blokusICFPT2013.pdf" target="_blank">The Liquid Metal Blokus Duo Design</a>
      <br><span>Erik Altman, Joshua Auerbach, David Bacon, Ioana Baldini, Perry Cheng, Stephen Fink and Rodric M. Rabbah.<br>In proceedings of the International Conference on Field-Programmable Technology (FPT), Kyoto, Japan, December 2013.</span>
      <br>
      <br><a href="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6509614" target="_blank">The Liquid Metal IP bridge</a>
      <br><span>Perry Cheng, Stephen J Fink, Rodric M Rabbah and Sunil Shukla.<br>In proceedings of the 18th Asia and South Pacific Design Automation Conference (ASP-DAC), Yokohama, Japan, January 2013. </span>
      <br>
      <br><a href="http://researcher.ibm.com/files/us-bacon/Bacon13FPGA.pdf" target="_blank">FPGA Programming for the Masses</a>
      <br><span>David F. Bacon, Rodric Rabbah and Sunil Shukla.<br>In Communications of the ACM (CACM), 56(4), April 2013. </span>
      <br>
      <br><a href="http://link.springer.com/chapter/10.1007/978-3-642-39038-8_28" target="_blank">The Shape of Things to Run</a>
      <br><span>Josh Auerbach, Dave F Bacon, Perry Cheng, Steve Fink and Rodric Rabbah.<br>In proceedings of the European Conference on Object-Oriented Programming (ECOOP), Montpellier, France, July 2013. </span>
      <br>
      <br><span><a href="http://doi.acm.org/10.1145/2228360.2228411" target="_blank">A Compiler and Runtime for Heterogeneous Computing</a><br>Joshua Auerbach, David Bacon, Ioana Burcea, Perry Cheng, Stephen J. Fink, Rodric Rabbah, and Sunil Shukla.<br>In proceedings of the 49th Annual Design Automa- tion Conference (DAC), San Francisco, CA, June 2012. </span>
      <br>
      <br><a href="http://dl.acm.org/citation.cfm?id=2254066" target="_blank">Compiling a high-level language for GPUs via language support for architectures and compilers</a>
      <br><span>Christophe Dubach, Perry Cheng, Rodric Rabbah, David Bacon and Stephen Fink.<br>In proceedings of the 33rd ACM SIG- PLAN conference on Programming Language Design and Implementation (PLDI), Beijing, China, June 2012. </span>
      <br>
      <br><a href="http://dl.acm.org/citation.cfm?id=2024923" target="_blank">Virtualization of Heterogeneous Machines Hardware Description in a Synthesizable Object-Oriented Language</a>
      <br><span>Joshua Auerbach, David Bacon, Perry Cheng, Rodric Rabbah and Sunil Shukla.<br>In proceedings of the 48th Annual Design Automation Conference (DAC), San Diego, CA, June 2011. </span>
      <br>
      <br><span><a href="http://ieeexplore.ieee.org/document/5558652/" target="_blank">FPGA-Based Combined Architecture for Stream Categorization and Intrusion Detection.</a><br>Sunil Shukla, Rodric Rabbah, and Martin Vorbach.<br>In proceedings of the Eight IEEE/ACM International Conference on Formal Methods and Models for Codesign (MEMOCODE), Grenoble, France, August 2010. </span>
      <br>
      <br><a href="http://doi.acm.org/10.1145/1869459.1869469" target="_blank">Lime: a Java-Compatible and Synthesizable Language for Heterogeneous Architecture</a>
      <br><span>Joshua Auerbach, David Bacon, Perry Cheng, and Rodric Rabbah.<br>In proceedings of the ACM International Conference on Object- Oriented Programming Systems, Languages, and Applications (OOPSLA), Reno/Tahoe, Nevada, October 2010. </span>
      <br>
      <br><a href="http://portal.acm.org/citation.cfm?id=1735971.1736053" target="_blank">MacroSS: Macro-SIMDization of Streaming Applications</a>
      <br><span>Amir H Hormati, Yoonseo Choi, Mark Woh, Manju- nath Kudlur, Rodric Rabbah, Trevor Mudge, Scott Mahlke.<br>In proceedings of the Fifteenth International Symposium on Architectural Support for Programming Languages and Operating Systems (ASPLOS), Pittsburgh, PA, March 2010. </span>
      <br>
      <br><a href="http://ieeexplore.ieee.org/xpl/freeabs_all.jsp?arnumber=5260540" target="_blank"><span>Flextream: Adaptive Compilation of Streaming Applications for Heterogeneous Architectures</span></a>
      <br><span>Amir Hormati, Yoonseo Choi, Manjunath Kudlur, Rodric Rabbah, Trevor Mudge, and Scott Mahlke.<br>In proceedings of the In- ternational Conference on Parallel Architectures and Compilation Techniques (PACT), Raleigh, NC, September 2009. </span>
      <br>
      <br><a href="http://researcher.ibm.com/files/us-bacon/Hagiescu09Computing.pdf" target="_blank">A Computing Origami: Folding Streams in FPGAs</a>
      <br><span>Andrei Hagiescu, Weng-Fai Wong, David Bacon, and Rodric Rabbah.<br>In proceedings of the 46th Design Automation Conference (DAC), San Francisco, CA, July 2009. </span>
      <br>
      <br><span><a href="http://dl.acm.org/citation.cfm?id=1450105" target="_blank">Optimus: Efficient Realization of Streaming Applications on FPGAs</a><br>Amir Hormati, Manjunath Kudlur, David Bacon, Scott Mahlke, and Rodric Rabbah.<br>In proceedings of the International Conference on Compilers, Archi- tecture, and Synthesis for Embedded Systems (CASES), Atlanta, GA, October 2008. </span>
      <br>
      <br><a href="http://researcher.ibm.com/files/us-bacon/Huang08Liquid.pdf" target="_blank">Liquid Metal: Object-Oriented Programming Across the Hardware/Software Boundary</a>
      <br><span>Shan Shan Huang, Amir Hormati, David Bacon, and Rodric Rabbah.<br>In proceedings of the European Conference on Object-Oriented Programming (ECOOP), Paphos, Cyprus, July 2008. </span>
      <br>
    </div>
    <div>
      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
      <hr class="styled-hr" style="width:100%;">
      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
    </div>
    <h2 class="wsite-content-title"><strong>StreamIt: A language and compiler for streaming systems</strong><br></h2>
    <div class="paragraph"><span><a href="http://portal.acm.org/citation.cfm?id=1399978" target="_blank">A Lightweight Streaming Layer for Multicore Execution</a><br>Xin David Zhang, Qiuyuan J. Li, Rodric Rabbah, and Saman Amarasinghe.<br>In proceedings of the Workshop on Design, Architecture and Simulation of Chip Multi-Processors (dasCMP), Chicago, IL, December 2007. </span>
      <br>
      <br><span><a href="http://portal.acm.org/citation.cfm?id=1289819" target="_blank">Beyond Gaming: Programming the PLAYSTATION3 Cell Architecture for Cost-Effective Parallel Processing</a><br>Rodric Rabbah.<br>In proceedings of the International Conference on Hardware/Software Codesign and Synthesis (CODES+ISSS), Salzburg, Austria, September 2007. </span>
      <br>
      <br><span><a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.70.6041&amp;rep=rep1&amp;type=pdf" target="_blank">MPEG-2 in a Stream Programming Language</a><br>Matthew Drake, Hank Hoffmann, Rodric Rabbah, and Saman Amarasinghe.<br>In proceedings of the Twentieth IEEE International Parallel and Distributed Processing Sympo- sium (IPDPS), Rhodes Island, Greece, April 2006. </span>
      <br>
      <br><span>High-Productivity Stream Programming For High-Performance Systems.<br>Rodric Rabbah, Bill Thies, Michael Gordon, Janis Sermulins, and Saman Amarasinghe.<br>In proceedings of the Ninth Annual Workshop on High Performance Embedded Computing (HPEC), Lexington, MA, September 2005. </span>
      <br>
      <br><span><a href="http://portal.acm.org/citation.cfm?id=1064978.1065045" target="_blank">Programming by Sketching for Bit-Streaming Programs</a><br>Armando Solar-Lezama, Rodric Rabbah, Rastislav Bodik, and Kemal Ebcioglu.<br>In proceedings of the Conference on Programming Language Design and Implementation (PLDI), Chicago, IL, June 2005.<br>PLDI 2005 Best Paper.</span>
      <br>
      <br><span><a href="http://portal.acm.org/citation.cfm?id=1070891.1065927" target="_blank">Cache Aware Optimization of Stream Programs</a><br>Janis Sermulins, William Thies, Rodric Rabbah, and Saman Amarasinghe.<br>In proceedings of the Conference on Languages, Compilers, and Tools for Embedded Systems (LCTES), Chicago, IL, June 2005. </span>
      <br>
      <br><span><a href="http://portal.acm.org/citation.cfm?id=1065944.1065975" target="_blank">Teleport Messaging for Distributed Stream Programs.</a><br>William Thies, Michal Karczmarek, Janis Sermulins, Rodric Rabbah, and Saman Amarasinghe.<br>In proceedings of the Symposium on Principles and Practice of Parallel Programming (PPoPP), Chicago, IL, June 2005. </span>
      <br>
      <br><span><a href="https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=3&amp;ved=0ahUKEwio1tTX0uTYAhVLQq0KHYCvDycQFgg5MAI&amp;url=https%3A%2F%2Flink.springer.com%2Fcontent%2Fpdf%2F10.1007%2Fs10766-005-3590-6.pdf&amp;usg=AOvVaw2miKPimrUT1B19XOYUBMR3" target="_blank">Language and Compiler Design for Streaming Applications</a><br>Saman Amarasinghe, Michael Gordon, Michal Karczmarek, Jasper Lin, David Maze, Rodric Rabbah, and William Thies.<br>In International Journal of Parallel Programming (IJPP), Volume 33, Numbers 2-3, June 2005. </span>
      <br>
      <br><span><a href="http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.73.5114" target="_blank">A Productive Programming Environment for Stream Computing</a><br>Kimberly Kuo, Rodric Rabbah, and Saman Amarasinghe.<br>In proceedings of the Second Workshop on Productivity and Performance in High-End Computing (PPHEC), San Francisco, CA, February 2005.</span>
      <br>
    </div>
    <div>
      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
      <hr class="styled-hr" style="width:100%;">
      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
    </div>
    <h2 class="wsite-content-title">Adaptive and Cooperative Execution<br></h2>
    <div class="paragraph"><span><a href="http://portal.acm.org/citation.cfm?id=1788388" target="_blank">How to do a Million Watchpoints: Efficient Debugging Using Dynamic Instrumentation</a><br>Qin Zhao, Rodric Rab- bah, Saman Amarasinghe, Larry Rudolph, and Weng-Fai Wong.<br>In proceedings of the International Conference on Compiler Construction (CC), Budapest, Hungary, April 2008. </span>
      <br>
      <br><span><a href="http://portal.acm.org/citation.cfm?id=1252550" target="_blank">Ubiquitous Memory Introspection</a><br>Qin Zhao, Rodric Rabbah, Saman Amarasinghe, Larry Rudolph, and Weng- Fai Wong.<br>In proceedings of the 2007 International Symposium on Code Generation and Optimization (CGO), San Jose, CA, March 2007. </span>
      <br>
      <br><span>CEARCH: Cognition Enabled Architecture<br>Stephen Crago, Janice Onanian McMahon, Chris Archer, Krste Asanovic, Richard Chaung, Keith Goolsbey, Mary Hall, Christos Kozyrakis, Kunle Olukotun, Una-May O’Reilly, Rick Pancoast, Viktor Prasanna, Rodric Rabbah, Steve Ward, and Donald Yeung.<br>In proceedings of the Tenth Annual Workshop on High Performance Embedded Computing (HPEC), Lexington, MA, September 2006. </span>
      <br>
      <br><span><a href="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=1540953" target="_blank">Exploiting Vector Parallelism in Software Pipelined Loops</a><br>Sam Larsen, Rodric Rabbah, and Saman Amarasinghe.<br>In proceedings of the International Symposium on Microarchitecture (MICRO), Barcelona, Spain, November 2005. </span>
      <br>
      <br><span><a href="http://portal.acm.org/citation.cfm?id=1127577.1127584" target="_blank">Dynamic Memory Optimization using Pool Allocation and Prefetching</a><br>Qin Zhao, Rodric Rabbah, and Weng-Fai Wong.<br>In proceedings of the Workshop on Binary Instrumentation and Applications (WBIA), St. Louis, MO, September 2005. </span>
      <br>
      <br><span><a href="http://www.springerlink.com/index/9pb9kjmpq13nvwbw.pdf" target="_blank">Trimaran: an Infrastructure for Research in Instruction-Level Parallelism</a><br>Lakshmi Chakrapani, John Gyllenhaal, Wen-mei Hwu, Scott Mahlke, Krishna Palem, and Rodric Rabbah.<br>In Lecture Notes in Computer Science (LNCS), Springer-Verlag, Volume 3602, Pages 32-41, August 2005. </span>
      <br>
      <br><span><a href="http://portal.acm.org/citation.cfm?id=1037947.1024416" target="_blank">Compiler Orchestrated Prefetching via Speculation and Predication</a><br>Rodric Rabbah, Hariharan Sandanagobalane, Mongkol Ekpanyapong, and Weng-Fai Wong.<br>In proceedings of the Eleventh International Symposium on Architectural Support for Programming Languages and Operating Systems (ASPLOS), Boston, MA, October 2004. </span>
      <br>
      <br><span><a href="http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.91.6346" target="_blank">Adaptive Compiler Directed Prefetching for EPIC Processors</a><br>Jinwoo Kim, Rodric Rabbah, Krishna Palem, and Weng-Fai Wong.<br>In proceedings of the International Conference on Parallel and Distributed Processing Techniques and Applications (PDPTA), Las Vegas, NV, June 2004.</span>
      <br>
    </div>
    <div>
      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
      <hr class="styled-hr" style="width:100%;">
      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
    </div>
    <h2 class="wsite-content-title">Memory System Design and Optimizations<br></h2>
    <div class="paragraph"><a href="http://portal.acm.org/citation.cfm?id=643474" target="_blank">Data Remapping for Design Space Optimization of Embedded Memory Systems</a>
      <br><span>Rodric Rabbah, Krishna Palem.</span>
      <br><span>In ACM Transactions on Embedded Computing Systems (TECS), Volume 2, Number 2, May 2003. </span>
      <br>
      <br><a href="http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=1188729" target="_blank">PD-XML: Extensible Markup Language for Processor Description</a>
      <br><span>Shay Seng, Krishna Palem, Rodric Rabbah, Weng-Fai Wong, Wayne Luk, and P.Y.K. Cheung. </span>
      <br><span>In proceedings of the IEEE International Conference on Field- Programmable Technology (ICFPT), Hong Kong, December 2002. </span>
      <br>
      <br><a href="http://portal.acm.org/citation.cfm?id=566225.513836" target="_blank">Design Space Optimization of Embedded Memory Systems via Data Remapping</a>
      <br><span>Krishna Palem, Rodric Rab- bah, Vincent Mooney III, Pinar Korkmaz, and Kiran Puttaswamy.<br>In proceedings of the Languages, Compilers, and Tools for Embedded Systems and Software and Compilers for Embedded Systems (LCTES-SCOPES), Berlin, Germany, June 2002. </span><span></span>
      <br>
    </div>
    <div>
      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
      <hr class="styled-hr" style="width:100%;">
      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
    </div>
    <h2 class="wsite-content-title">Computational Biology<br></h2>
    <div class="paragraph"><a href="http://www.nature.com/nature/journal/v378/n6556/abs/378516a0.html" target="_blank">Mapping the Genome One Molecule at a Time: Optical Mapping</a>
      <br>Akhtar Samad, Wei Wen Cai, Xinghua Hu, Benjamin Irvin, Junping Jing, Jason Reed, Xun Meng, John Huang, Edward Huff, Brett Porter, Alex Shenkar, Thomas Anantharaman, Bhubaneswar Mishra, Virginia Clarke, Eileen Dimalanta, Joanne Edington, Catharina Hiort, Rodric Rabbah, John Skiada and David C. Schwartz
      <br><span><em>Nature</em>, 1995.</span>
      <br>
    </div>
  </div>
</div>`
}
