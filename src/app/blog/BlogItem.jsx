import React from 'react'
import BlogNav from '../shared/BlogNav'
import BlogContent from '../shared/BlogContent';

const BlogItem = (props) => {
  const normalizedPath = (props.path || '').replace(/^\/+/, '')

  return (
    <article className="blog-card">
      <BlogContent limit={150} {...props }>
        <BlogNav date={props.date} to={{
          pathname: `/post/${normalizedPath}`,
          state: { props },
        }} status ={props.status} textread= 'Read More' linkVariant="light" />
      </BlogContent>
    </article>
  )
}

export default BlogItem