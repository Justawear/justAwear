import React, { Fragment } from 'react';

import {FacebookFilled, TwitterSquareFilled, LinkedinFilled, GithubFilled} from '@ant-design/icons'

import "./style.css"

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer-distributed">

<div className="footer-left">

  <h3>JUST<span>AWARE</span></h3>

  <p className="footer-links">
    <a href="#">Made in Texas BABY</a>
  </p>

  <p className="footer-company-name">copyrights &copy; 2022</p>
</div>

<div className="footer-center">

  <div>
    <i className="fa fa-map-marker"></i>
    <p><span>21 Revolution Street</span> Austin, Texas</p>
  </div>

  <div>
    <i className="fa fa-phone"></i>
    <p>+1 555 123456</p>
  </div>

  <div>
    <i className="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">info@justware.com</a></p>
  </div>

</div>

<div className="footer-right">

  <p className="footer-company-about">
    <span>About the company</span>
    Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
  </p>

  <div className="footer-icons">

    <a href="www.facebook.com"><FacebookFilled /></a>
    <a href="www.twitter.com"><TwitterSquareFilled /></a>
    <a href="www.linkedin.com"><LinkedinFilled /></a>
    <a href="www.github.com"><GithubFilled /></a>

  </div>

</div>

</footer>

    </Fragment>
  )
}

export default Footer;
