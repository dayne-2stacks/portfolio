import React from 'react'
import Layout from '../components/Layout/Layout'
import BlogPost from '../components/Blog/BlogPost'
import { Container } from '../components/Base/Container'

export const BlogPage = () => {
  return (
    <Layout> 
        <Container>

        <BlogPost/>
        </Container>
    </Layout>
  )
}
