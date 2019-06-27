import React from 'react'
import PropTypes from 'prop-types'

import lodgel from '../images/lodgel.jpg'
import compound from '../images/compound.jpg'
import headshot from '../images/headshot.jpg'


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blog</h2>
          <p>Links to articles and videos will be uploaded shortly.</p>
          {close}
        </article>
        
        <article id="security" className={`${this.props.article === 'security' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Security</h2>
          <p>Links to articles will be uploaded shortly.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Portfolio</h2>
          <a href="https://cleanerpos.netlify.com" target="_blank" rel="noopener noreferrer"><h2 className="link">Lodgel</h2></a>
          <span className="image main"><img src={lodgel} alt="" /></span>
          <p>Lambda School Capstone project. Facilitates short-term property rentals by coordinating turnover assistants and individual property requirements, and features checkout through Stripe. Built with React Hooks, Node, and Postgres, and TypeScript.</p>
          <a href="https://cleanerpos.netlify.com" target="_blank" rel="noopener noreferrer">Link to project</a>
          <br />
          <br />
          <a href="https://github.com/Lambda-School-Labs/labs9-cleaner-pos" target="_blank" rel="noopener noreferrer">Link to Github repo (see 'labs9-master' branch)</a>
          <br />
          <br />
          <a href="https://compound.careers" target="_blank" rel="noopener noreferrer"><h2 className="link">Compound</h2></a>
          <span className="image main"><img src={compound} alt="" /></span>
          <p>Lambda School Winter 2019 Hackathon || Winner of Most Beautiful Visualization. Calculator that projects potential increase in income and visualizes the comparison of income against one's current earnings. Built with React and Redux.</p>
          <a href="https://compound.careers" target="_blank" rel="noopener noreferrer">Link to project</a>
          <br />
          <br />
          <a href="https://github.com/LambdaWinter19Hackathon-Calculator/Hackathon_Income_Calculator" target="_blank" rel="noopener noreferrer">Link to Github repo</a>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <div className="stack">
            <h2 className="major">About</h2>
          </div>
          <div className="bio">
            <img className="headshot" src={headshot} alt='' />
            <div className="biotext">
              <p>Lambda School graduate, where I learned how to learn about technology.</p>
              <p>Holder of FINRA Series 7 & 63 finance licenses, which taught me that some risks are worth taking.</p>
              <p>Volunteered in South Korea for 2 years, and found that being kind is more important than being smart.</p>
            </div>
          </div>
          <h3 className="major">Languages and Technologies</h3>
          <ul className="list">
            <li className="listItem">HTML/CSS</li>
            <li className="listItem">TypeScript</li>
            <li className="listItem">Node.js</li>
            <li className="listItem">Python</li>
            <li className="listItem">BootStrap/LESS</li>
            <li className="listItem">React.js</li>
            <li className="listItem">MongoDB</li>
            <li className="listItem">C</li>
            <li className="listItem">JavaScript</li>
            <li className="listItem">Redux</li>
            <li className="listItem">GraphQL</li>
            <li className="listItem">Git</li>
          </ul>
          {/* <h3 className="major">Resume</h3>
          <ul>
            <li><a href="https://resume.creddle.io/resume/h6uzm4ghs2y" target="_blank" rel="noopener noreferrer">Link to Resume</a></li>
          </ul> */}

          {/* <h3 className="major">Education</h3>
          <ul>
            <li>Lambda School || Certificate in Software Development || February 2019</li>
            <li>Maryville University || M.S. in Cybersecurity (4.0 GPA) || December 2019</li>
            <li>Brigham Young University || B.A. in Asian Studies || April 2017</li>
          </ul> */}
          {/* <span className="image"><img src={headshot} alt="" /></span> */}
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="POST" action="https://formspree.io/christopher.honda92@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" placeholder="Your email"/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <p>I am happy to speak with you about your project requirements. Please feel free to reach out!</p>
          <h3>Email:</h3>
          <p>christopher.honda92@gmail.com</p>
          <h3>Phone:</h3>
          <p>(916) 709-8892</p>
          <ul className="icons">
            <li><a href="https://twitter.com/chrishonda0716" target="_blank" rel="noopener noreferrer" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://linkedin.com/in/ichirohonda" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/honda0306" target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main