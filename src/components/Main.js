import React from 'react'
import PropTypes from 'prop-types'

import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

import headshot from '../images/formal_headshot.jpg'
import lodgel from '../images/lodgel.jpg'
import compound from '../images/compound.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        {/* Commented out since the intro section is not in use
        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>This is an explanation.</p>
          <p>This is cool.</p>
          {close}
        </article> */}

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Portfolio</h2>
          <h2>Lodgel</h2>
          <span className="image main"><img src={lodgel} alt="" /></span>
          <p>Lambda School Capstone project. Facilitates short-term property rentals by coordinating turnover assistants and individual property requirements, and features checkout through Stripe.</p>
          <p>Built in React, Node, and Postgres, and experimentation with React Hooks and TypeScript.</p>
          <h2>Compound</h2>
          <span className="image main"><img src={compound} alt="" /></span>
          <p>Lambda School Winter 2019 Hackathon || Winner of Most Beautiful Visualization. Calculator that projects potential increase in income and visualizes the comparison of income against one's current earnings.</p>
          <p>Built in React and Redux.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <h3 className="major">Resume</h3>
          <ul>
            <li><a href='https://resume.creddle.io/resume/h6uzm4ghs2y'>Link to Resume</a></li>
          </ul>

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
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form> */}
          <p>I am happy to speak with you about your project requirements. Please feel free to reach out!</p>
          <h3>Email:</h3>
          <p>christopher.honda92@gmail.com</p>
          <h3>Phone:</h3>
          <p>(916) 709-8892</p>
          <ul className="icons">
            <li><a href="https://twitter.com/chrishonda0716" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://linkedin.com/in/ichirohonda" className="icon fa-linkedin"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/honda0306" className="icon fa-github"><span className="label">GitHub</span></a></li>
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