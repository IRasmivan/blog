import React from 'react'
import Header from './Header';
const PageHeader = (props) => (
  <div>
  <section className={`hero ${props.color}`}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          {props.title}
        </h1>
        <h2 className="subtitle">
         <p> {props.children}</p>
        </h2>
      </div>
    </div>
  </section>
  </div>
)
export default PageHeader