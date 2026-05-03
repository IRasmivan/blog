import React from 'react'
import { Link } from 'react-router-dom'
import StatusTag from '../components/StatusTag'
import moment from 'moment'

const BlogNav = ({ to, date, status, textread, className = '', showMeta = Boolean(date || status), linkVariant = 'default' }) => (
  <nav className={`blog-nav ${className}`.trim()}>
    <div className="blog-nav__primary">
      <Link className={`blog-nav__link blog-nav__link--${linkVariant}`} to={to}>{textread}</Link>
    </div>

    {showMeta && (
      <div className="blog-nav__meta">
        <StatusTag status={status} />
        {date && (
          <p className="blog-nav__date">
            {moment(date).calendar(null, {
              sameDay: '[Today]',
              lastDay: '[Yesterday]',
              lastWeek: '[Last] dddd',
              sameElse: 'MMM Do YYYY'
            })}
          </p>
        )}
      </div>
    )}
  </nav>
)

export default BlogNav