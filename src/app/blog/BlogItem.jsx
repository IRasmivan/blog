import React from 'react'
import BlogNav from '../shared/BlogNav'
import BlogContent from '../shared/BlogContent';
const BlogItem = (props) => (
  <div className="box">
    <BlogContent limit={150} {...props }>
    {console.log({props})}
      <BlogNav date={props.date} to={{
        pathname: `/post${props.path}`,
        state: { props },
      }} status ={props.status} textread= 'Read More' />
    </BlogContent>
  </div>
)
export default BlogItem