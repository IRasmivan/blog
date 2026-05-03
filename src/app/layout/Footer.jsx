import React from 'react'

const Footer = () => (
  <footer className="site-footer">
    <p>
      Built on React with Contentful content and reshaped into the same editorial language as the main portfolio.
    </p>
    <p>
      <a href="https://rasmivan.com/" target="_blank" rel="noopener noreferrer">Rasmivan Ilangovan</a>
      {' '}Copyright {(new Date().getFullYear())}
    </p>
  </footer>
)

export default Footer