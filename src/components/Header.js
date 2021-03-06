import React from 'react'
import PropTypes from 'prop-types'
import headshot from '../images/small_headshot.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-globe"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Chris Honda</h1>
                <p>Full-stack software developer. Security enthusiast. </p>
                <p>Former investment professional. Chicken teriyaki connoisseur.</p>
            </div>
        </div>
        <nav>
            <ul>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Blog</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>My Work</a></li>
                {/* Make a new section for projects that I led */}
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('security')}}>Security</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
