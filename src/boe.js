let menu = require('./menu')
let assemble = require('./assemble')

exports.handler = function(event, context, callback) {
  const mobile = assemble.detectMobile(event)
  callback(null, {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: assemble.generate(menu.tabs, menu.tabs.boe, content(mobile.mobile), mobile)
  })
}

function content(mobile) {
  return `
    <div id="content">
      <div id="wsite-content" class="wsite-elements wsite-not-footer">

        <div style="padding-bottom: 20px;">
          <h2 class="wsite-content-title" style="padding: 0;">
            ${mobile? 'Candidate for the Somers Board of Education' : 'Rodric Rabbah, Candidate for the Somers Board of Education'}
            <img src="https://rabbah.io/uploads/r.png" alt="Portrait" style="padding: 10px 0 0 20px; width:${mobile? '15%':'19%'};float: right;"><br/>
          </h2>
        </div>

        <div class="paragraph">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">Hello Somers Parents.</span><br/><br/>
          You may already know there is an upcoming election for the Somers Board of Education.
          The election this year will only be held by mail-inballots which must be received by 5PM on June 9 to be counted.
          <i>I included information <a href='#info'>at the bottom of this page</a> for online registration and requesting a paper ballot.</i><br/>
        </div>

        <div class="paragraph">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">I am Dr. Rodric Rabbah and I am running for a 3-year term on the Somers Board of Education.</span>
          My wife, a Cancer Research Scientist at a local hospital, and I have been Somers residents since 2013. We have one child in Kindergarten and another in the third grade. Like many of you during this pandemic, we are doing our best to facilitate our children's learning by day. The pandemic is stressful and heartbreaking for many, so I am finding special comfort in cherishing this unique time with my children.<br/>
        </div>

        <div class="paragraph">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">I will bring a fresh perspective to the Board of Education, especially concerning STEAM education (Science, Technology, Engineering, the Arts and Mathematics).</span>
          I hold a doctorate in Computer Science from Georgia Tech. I taught courses at the Massachusetts Institute of Technology (MIT), helping to connect students with real-world technology. One of my courses was translated and offered online by MIT to a global audience. I was a Principal Scientist at IBM Research where I spent 11 years of my career. Two years ago, I decided to leave IBM to start my own technology company.<br/>
        </div>

        <div class="paragraph">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">I am keenly interested in how our district is approaching STEAM readiness, and the curriculum changes that are being considered by the Superintendent.</span>
          While Somers is a high-ranking academic district both in Westchester and nationally, I believe we could do better. I often speak with other parents, many of whom are educators, for their perspectives. What I have found is a consistent reinforcement of my belief. I support our district's approach of focusing on the child as a whole, but I also think we can be more tactical in our approach to preparing our students for the future.<br/>
        </div>

        <div class="paragraph">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">Of course changes take time, training and investment, and I am already committed for the entire journey.</span>
          Earlier this year, I joined several committees organized by the Superintendent to raise awareness about the need for better communication with parents.
        </div>

        <div class="paragraph">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">The pandemic has brought about new challenges and realities around distance learning for which I have real world expertise.</span>
          I found it both surprising and disturbing to learn recently that some members of the Board of Education did not realize how many parents found the rollout of the distance learning program to be frustratingly slow.<br/>
        </div>

        <div class="paragraph">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">I know that establishing distance learning programs requires unique technologies and integrations, for which I can offer first-hand experience based on running my fully remote company.</span>
          I am very familiar with the technologies being used and evaluated by the district, and I understand the pros and cons of these online tools, including their privacy implications. I also understand that distance learning for younger children is not the same as distance learning for older children. And, I believe that a comprehensive plan must include how to best support Individualized Education Programs for children with special needs.          <br/>
        </div>

        <div class="paragraph">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">In summary, my background, my unique perspectives, and my experience would be vital assets in addressing the challenges facing the district. I hope I have earned your vote for the privilege to represent you and your children on the School Board.</span>
          <br/>
        </div>

        <div id="info" class="paragraph">
          Please share this letter with your friends and family.<br/>
          <ul>
            <li><span style="color:#3f3f3fe8 !important;font-weight:bold">To contact me:</span> email me at <a href='mailto:rodric@gmail.com'>rodric@gmail.com</a> or call <a href='tel:+16462486456'>646-248-6456</a>.</li>
            <li><span style="color:#3f3f3fe8 !important;font-weight:bold">To receive a paper ballot if one was not mailed to you:</span> email our District Clerk Nancy Corrado at <a href='mailto:ncorrado@somersschools.org'>ncorrado@somersschools.org</a>.</li>
            <li><span style="color:#3f3f3fe8 !important;font-weight:bold">If you are not registered to vote:</span> visit <a href='https://dmv.ny.gov/more-info/electronic-voter-registration-application'> https://dmv.ny.gov/more-info/electronic-voter-registration-application</a> to register online.</li>
          </ul>
          <br/>
          Respectfully,<br/>
          Dr. Rodric Rabbah<br/>
          Candidate for Somers Board of Education<br/>
          <br/>
        </div>
    </div>`
}
