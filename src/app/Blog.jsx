import React from 'react';
import * as contentful from 'contentful';
import PageHeader from './layout/PageHeader';
import BlogItem from './blog/BlogItem';
import PageContent from './layout/PageContent';
class Blog extends React.Component {
  state = {
    posts: []
  }
  client = contentful.createClient({
    space: 'wby4w0sk2gzn',
    accessToken: 'UIebK8lb22HNEVAODIIxdCX0m388c5Z05fkAR2jyDH0' 
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {

    this.setState({
      posts: response.items
    })
  }
  render() {
    return (
      <div>
        <PageHeader color="is-primary" title="Code Blog">
            This blog is a mix of random posts on Angular, React, Java, Docker & K8s.
        </PageHeader>
        <br/>
        <PageContent>
          { this.state.posts.map(({fields}, i) =>
            <BlogItem key={i} {...fields} />
          )}
        </PageContent>
      </div>
    )
  }
}
export default Blog