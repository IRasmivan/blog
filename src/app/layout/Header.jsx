import React from 'react'

const Header = () => (
  <aside className="site-sidebar">
    <div className="site-sidebar__inner">
      <a className="site-brand" href="/">
        <span className="site-brand__eyebrow">Read</span>
        <span className="site-brand__name">Rasmivan Blog</span>
      </a>

      <div className="site-sidebar__intro">
        <p className="site-sidebar__kicker">Journal</p>
        <h1 className="site-sidebar__title">Notes on engineering, delivery, and systems that have to hold up.</h1>
        <p className="site-sidebar__copy">
          A personal archive of posts on React, Angular, Java, Docker, Kubernetes, and the work around them.
        </p>
      </div>

      <nav className="site-sidebar__nav" aria-label="Secondary navigation">
        <a href="/">Recent Posts</a>
        <a href="https://rasmivan.com/" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a href="https://github.com/IRasmivan" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>

      <div className="site-sidebar__footer">
        <a className="site-sidebar__button" href="https://rasmivan.com/" target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>
    </div>
  </aside>
)

export default Header