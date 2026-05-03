import React from 'react'
import * as Markdown from 'react-markdown'

const BlogContent = (props) => {
  const HeadingTag = props.limit ? 'h2' : 'h1'

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
        <Markdown
          source={
            props.limit
            ? props.content.split(" ").splice(0,props.limit).join(" ").concat('...')
            : props.content
          }
        />
        </div>
        { props.children }
      </div>
    </article>
  )
}

export default BlogContent