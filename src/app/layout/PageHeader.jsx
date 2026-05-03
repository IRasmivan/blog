import React from 'react'

const PageHeader = (props) => (
  <section className="page-hero">
    <p className="page-hero__eyebrow">Recent Blog</p>
    <h2 className="page-hero__title">{props.title}</h2>
    <div className="page-hero__summary">{props.children}</div>
  </section>
)

export default PageHeader