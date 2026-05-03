import React from 'react'
import * as contentful from 'contentful'
import { Link } from 'react-router-dom'
import PageContent from '../layout/PageContent'
import BlogNav from '../shared/BlogNav'
import BlogContent from '../shared/BlogContent'

class BlogPost extends React.Component {
  state = {
    post: this.props.location && this.props.location.state ? this.props.location.state.props : null,
    isLoading: !(this.props.location && this.props.location.state),
  }

  client = contentful.createClient({
    space: 'wby4w0sk2gzn',
    accessToken: 'UIebK8lb22HNEVAODIIxdCX0m388c5Z05fkAR2jyDH0'
  })

  componentDidMount() {
    if (!this.state.post) {
      this.fetchPost()
    }
  }

  normalizePath = value => (value || '').replace(/^\/+|\/+$/g, '')

  fetchPost = async () => {
    const { match: { params: { blogPost } } } = this.props
    const response = await this.client.getEntries()
    const post = response.items
      .map(item => item.fields)
      .find(fields => this.normalizePath(fields.path) === this.normalizePath(blogPost))

    this.setState({
      post: post || null,
      isLoading: false,
    })
  }

  renderBreadcrumb = title => (
    <nav className="blog-breadcrumb" aria-label="Breadcrumb">
      <Link className="blog-breadcrumb__link" to="/">Blog</Link>
      <span className="blog-breadcrumb__separator">/</span>
      <span className="blog-breadcrumb__current">{title}</span>
    </nav>
  )

  render() {
    const { post, isLoading } = this.state

    if (isLoading) {
      return (
        <div className="blog-post-view">
          <div className="blog-post-topbar">
            {this.renderBreadcrumb('Loading')}
          </div>
          <PageContent className="blog-post-page">
            <p>Loading post...</p>
          </PageContent>
        </div>
      )
    }

    if (!post) {
      return (
        <div className="blog-post-view">
          <div className="blog-post-topbar">
            {this.renderBreadcrumb('Not Found')}
          </div>
          <PageContent className="blog-post-page">
            <p>That post could not be found.</p>
            <BlogNav to="/" textread="Back to Blog" className="blog-nav--post-footer" showMeta={false} />
          </PageContent>
        </div>
      )
    }

    return (
      <div className="blog-post-view">
        <div className="blog-post-topbar">
          {this.renderBreadcrumb(post.title)}
        </div>
        <PageContent className="blog-post-page">
          <BlogContent {...post } />
          <BlogNav date={post.date} status={post.status} to="/" textread ="Back to Blog" className="blog-nav--post-footer" />
        </PageContent>
      </div>
    )
  }
}

export default BlogPost