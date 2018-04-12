import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className="main-section">
        <div className="nav">
          <h2>ALEC<strong>DAVIDSON</strong></h2>
        </div>
        <div className="section-content wow fadeInUp" style={{ visibility: 'visible', animationName: "fadeInUp" }}>
          <h1>FULL-STACK ENGINEER</h1>
          {/*<div className="small"><em>From Node to React and Everything inbetween</em></div>*/}
          <p>Specializing in full-stack Javascript applications</p>
        </div>
      </div>
      <div className="section white-bg">
        <div className="section-content wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
          <div className="title">
            <h1>About</h1>
          </div>
          <div className="content">
            <div>
              <h2>Alec Davidson</h2>
              <p>
                After working at Women Tech Founders and sharing the stories of passionate entrepreneurs, I became insatiably interested in all things tech. I cultivated this interest through college with classes in CS and small business, while also majoring in philosophy and religious studies. After graduating from school in 2017, I quickly applied to Fullstack Academy to learn more about Javascript and hone my skills as a software developer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section blue-bg">
        <div className="section-content wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          <div className="title">
            <h1>Work Experience</h1>
          </div>

          <div className="content">
            <div>
              <div className="box">
                <h2>ZipFit Inc.</h2>
                <div className="small">June 2017 - November 2017</div>
                <p>Operations Intern</p>
              </div>
              <div className="box">
                <h2>Women Tech Founders</h2>
                <div className="small">April 2016 - September 2016</div>
                <p>Social Media Manager and Content Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section white-bg">
        <div className="section-content wow fadeInUp" style={{/*visibility: 'hidden',*/ animationNname: 'none' }}>
          <div className="title">
            <h1>Skillset</h1>

          </div>

          <div className="content">
            <div>
              <div className="dual-col">
                <h2>Node.js</h2>
              </div>
              <div className="dual-col">
                <h2>Javascript</h2>
              </div>
              <div className="dual-col">
                <h2>Express</h2>
              </div>
              <div className="dual-col">
                <h2>React</h2>
              </div>
              <div className="dual-col">
                <h2>SQL</h2>
              </div>
              <div className="dual-col">
                <h2>HTML5</h2>
              </div>
              <div className="dual-col">
                <h2>Sequelize</h2>
              </div>
              <div className="dual-col">
                <h2>CSS3</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section blue-bg">
        <div className="section-content wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          <div className="title">
            <h1>Education</h1>
          </div>

          <div className="content">
            <div>
              <div className="small">2018 </div>
              <h2>Fullstack Academy</h2>
              <p>13 week intensive bootcamp</p>
              <br />
              <div className="small">2017</div>
              <h2>Brown University</h2>
              <p>B.A. Religous Studies</p>
            </div>
          </div>
        </div>
      </div>


      <div className="section white-bg" style={{ borderBottom: `1px solid #eee` }}>
        <div className="section-content wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          <div className="title">
            <h1>PROJECTS</h1>
          </div>
          <div className="content">
            <div>
              <div className="dual-col img-col">
                <a target="_blank" href="http://unblock-me.herokuapp.com">
                  <img src="/images/unblock.png" />
                </a>
                <a target="_blank" href="http://unblock-me.herokuapp.com">
                  <h2>Unblock</h2>
                </a>
                <div className="tag">NLP</div>
                <div className="tag">Quill</div>
                <div className="tag">Data Visualization</div>
                <div className="tag">Material Design</div>
              </div>
              <div className="dual-col img-col">
                <a target="_blank" href="https://life-socks-shopper.herokuapp.com/">
                  <img src="/images/lifesocks.png" /></a>
                <a target="_blank" href="https://life-socks-shopper.herokuapp.com/">
                  <h2>Socks Shopper</h2>
                </a>
                <div className="tag">E-Commerce</div>
                <div className="tag">Shopping Cart</div>
                <div className="tag">React</div>
                <div className="tag">Redux</div>
              </div>
              <div className="dual-col img-col">
                <a target="_blank" href="https://weather-skycast.herokuapp.com">
                  <img src="/images/skycast.png" />
                </a>
                <a target="_blank" href="https://weather-skycast.herokuapp.com">
                  <h2>SkyCast</h2>
                </a>
                <div className="tag">API usage</div>
                <div className="tag">Google Maps API + React Integration</div>
                <div className="tag">Victory Charts</div>
                <div className="tag">Data Manipulation</div>
              </div>
              <div className="dual-col img-col">
                <a target="_blank" href="https://happy-news-now.herokuapp.com/">
                  <img src="/images/happynews.png" />
                </a>
                <a target="_blank" href="https://happy-news-now.herokuapp.com/">
                  <h2>Happy News</h2>
                </a>
                <div className="tag">API Usage</div>
                <div className="tag">NLP</div>
              </div>
              <div className="dual-col img-col">
                <a target="_blank" href="https://expensive-paintings-scatter.herokuapp.com/">
                  <img src="/images/scatter.png" />
                </a>
                <a target="_blank" href="https://expensive-paintings-scatter.herokuapp.com/">
                  <h2>Experimenting with D3</h2>
                </a>
                <div className="tag">D3</div>
                <div className="tag">Data Visualization</div>
                <div className="tag">Data Animation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section blue-bg">
        <div className="section-content wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          <div className="title">
            <h1>WRITING</h1>
          </div>
          <div className="content">
            <div>
              <a target="_blank" href="https://medium.com/@davidson9076/elm-for-the-curious-513fb62c1e60">
                <div className="box">
                  <h2>Elm for The Curious</h2>
                  <p>The batteries included language for modern webapps</p>
                </div>
              </a>
              <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@davidson9076/diving-into-serverless-architecture-7ac13e6549d5">
                <div className="box">
                  <h2>Diving into Serverless Architecture</h2>
                  <p>The trend that's abstracting servers away from developers</p>
                </div>
              </a>
              <a target="_blank" href="https://medium.com/@davidson9076/web-performance-in-2018-ea718a0655e3">
                <div className="box">
                  <h2>Web Performance in 2018</h2>
                  <p>Practical ways to speed up your slow site</p>
                </div>
              </a>
              <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@davidson9076/react-native-950939902b09">
                <div className="box">
                  <h2>React Native</h2>
                  <p>Learn Once, Write Everywhere (Sort of)</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section white-bg">
        <div className="section-content wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          <div className="title">
            <h1>CONTACT</h1>
            <img src="images/mail-icon.png" width="40px" alt="mail icon" />
          </div>
          <div className="content">
            <div>
              <a href="mailto:davidson9076@gmail.com"><h2>davidson9076@gmail.com</h2></a><br />
              <a target="_blank" href="https://www.linkedin.com/in/alecdavidson"><h2>www.linkedin.com/in/alecdavidson</h2></a><br />
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/aw-davidson">
                <h2>github.com/aw-davidson</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer section">
        <div className="section-content">
          <p>ALEC<strong>DAVIDSON</strong></p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
