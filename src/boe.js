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

        <div style="padding-bottom:${mobile? '10px' : '20px'}">
          ${mobile? '' : '<h2 class="wsite-content-title" style="padding-bottom: 20px;">Vote Rodric Rabbah for the Somers Board of Education</h2>'}
          <span style="${mobile ? '' : 'color:#3f3f3fe8 !important;'}font-weight:bold">Hello Somers Parents.</span>
        </div>

        <div class="paragraph">
          <img src="https://rabbah.io/uploads/r.png" alt="Portrait" style="margin: ${mobile? "-10px 20px 20px 20px" : "-10px 20px 20px 20px"}; width: ${mobile? "25%":"20%"}; float: right;border-radius: 50%">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">I am Dr. Rodric Rabbah and I am running for a 3-year term on the Somers Board of Education.</span>
          I have two children in the district, Michel in the fourth grade and Timothy in the first grade. My wife Cynthia is a radiation physicist in cancer treatment.
          We moved to Somers 8 years ago and we love living here.<br/>
          <br/>
          My educational background includes a Doctorate in Computer Science from Georgia Tech, and several more years in academia at MIT.
          There, I enjoyed teaching new computer science classes to undergraduate and graduate students.<br/>
          <br/>
          I then spent eleven years at IBM Research in Yorktown. And now I am the co-founder of a cloud computing company with notable recognition from industry analysts.<br/>
          <br/>
        </div>

        <div class="paragraph">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">My academic roots, and my experience with research and in industry make me uniquely qualified to be your Trustee on the Somers Board of Education.</span> My top three reasons for running in this election:
          <ol>
            <li>To ensure our district is preparing every student for a future that is going to heavily emphasize STEAM.</li>
            <li>Advocacy for the elementary grades and Individualized Education Programs for children with special needs.</li>
            <li> Fiscal responsibility and strategic investment in our educators and facilities.</li>
          </ol>
          We need new perspectives and relevant experience on the Board, and I will be an effective advocate for you and your children.<br/>
          <br/>
        </div>

        <div class="paragraph">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">Highlights of my involvment with the District and Administration in the past year:</span>
          <ul>
            <li>I have engaged our administration to discuss ways to make computer science instruction more practical given industry trends.</li>
            <li>I joined the PTA Council and serve as your PTA delegate for Primrose.</li>
            <li>I take part of the Superintendent’s Educational Equity Advisory Team (SEEAT).</li>
            <li>I participate in the SEEAT curriculum reviews with our district educators.</li>
            <li>I attend monthly round tables with our superintendent.</li>
            <li>I attend and participate in Board meetings regularly.</li>
            <li>I have consulted with the administration on issues impacting e-learning.</li>
          </ul>
        </div>

        <div class="paragraph">
          <span style="color:#3f3f3fe8 !important;font-weight:bold">In summary, my background, my unique perspectives, and my experience would be vital assets to help push our district forward to equip everyone of our students for the 21st century. This starts in the elementary grades, with a strong emphasis on STEAM, and with responsible investment in our educators and facilities.</span><br/>
          <br/>
        </div>

        <div id="info" class="paragraph">
          Please share this letter with your friends and family.<br/>
          <ul>
            <li><span style="color:#3f3f3fe8 !important;font-weight:bold">Vote on May 18 at the Somers Middle School. Polls are open from 7am to 9pm.</li>
            <li><span style="color:#3f3f3fe8 !important;font-weight:bold">To receive a paper ballot, you must request one no later than May 11. Email our District Clerk Nancy Corrado at <a href='mailto:ncorrado@somersschools.org'>ncorrado@somersschools.org</a>.</li>
            <li><span style="color:#3f3f3fe8 !important;font-weight:bold">If you are not registered to vote, visit <a href='https://dmv.ny.gov/more-info/electronic-voter-registration-application'> https://dmv.ny.gov/more-info/electronic-voter-registration-application</a> to register online.</li>
            <li><span style="color:#3f3f3fe8 !important;font-weight:bold">Contact me at <a href='mailto:rodric@gmail.com'>rodric@gmail.com</a> or call <a href='tel:+16462486456'>646-248-6456</a>.</li>
          </ul>
          <br/>
          Respectfully,<br/>
          Dr. Rodric Rabbah<br/>
          Candidate for Somers Board of Education<br/>
          <br/>
        </div>
    </div>`
}
