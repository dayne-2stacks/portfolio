import React from 'react'
import Layout from '../components/Layout/Layout'
import BlogList from '../components/Blog/BlogList'
import { Container } from '../components/Base/Container'

export const BlogListPage = () => {
  return (
    <Layout> 
        <Container>

        <BlogList/>
        </Container>
    </Layout>
  )
}
