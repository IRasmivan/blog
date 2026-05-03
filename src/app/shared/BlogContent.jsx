import React from 'react'
import ReactMarkdown from 'react-markdown'

const BlogContent = (props) => {
  const HeadingTag = props.limit ? 'h2' : 'h1'
  const markdownSource = props.limit
    ? props.content.split(' ').splice(0, props.limit).join(' ').concat('...')
    : props.content

  return (
    <article className="blog-entry">
      <div className="blog-entry__media">
        <figure className="blog-entry__figure">
          <img src={props.icon} alt={props.title} />
        </figure>
      </div>

      <div className="blog-entry__body">
        <HeadingTag className="blog-entry__title">{props.title}</HeadingTag>
        <div className="blog-entry__content">
          <ReactMarkdown>{markdownSource}</ReactMarkdown>
        </div>
        { props.children }
      </div>
    </article>
  )
}

export default BlogContent