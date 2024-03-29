import React from 'react'
import PageContent from '../layout/PageContent'
import BlogNav from '../shared/BlogNav'
import BlogContent from '../shared/BlogContent'
const BlogPost = ({ location: { state: { props } }}) => (
  <PageContent>
    <BlogNav date={props.date} status={props.status} to="/post" textread ="Back to Blog" />
    <BlogContent {...props } />
  </PageContent>
)
export default BlogPost