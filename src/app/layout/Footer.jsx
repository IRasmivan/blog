import React from 'react'

const Footer = () => (
  <footer className="footer">
      <div className="content has-text-centered">
        <p>Built on <strong>React</strong> using style with <strong> bulma </strong>and blog content from <strong> contentful </strong> by <a href="https://rasmivan.com/">Rasmivan!</a>
          <br /> Copyright {(new Date().getFullYear())}
        </p>
      </div>
  </footer>
)

export default Footer