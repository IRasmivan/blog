import styled from 'styled-components'

const PageContent = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 0 2rem 3rem;

  &.blog-post-page {
    padding: 2.5rem 2rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.25rem 2.5rem;

    &.blog-post-page {
      padding: 2rem 1.25rem 2.5rem;
    }
  }
`
export default PageContent