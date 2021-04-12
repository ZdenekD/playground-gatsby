import React from 'react';
import {graphql, Link} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogLink = styled(Link)`
    text-decoration: none;
`;
const BlogTitle = styled.h3`
    margin-bottom: 20px;
    color: blue;
`;

const IndexPage = ({data}) => (
    <Layout>
        <Seo title="Home" />
        <div>
            <h1>Hi people</h1>
        </div>
        <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
        {data.allMarkdownRemark.edges.map(({node}) => (
            <div key={node.id}>
                <BlogLink to={node.fields.slug}>
                    <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
                </BlogLink>
                <p>
                    {node.excerpt}
                </p>
            </div>
        ))}
    </Layout>
);

export default IndexPage;

export const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        date
                        description
                        title
                    }
                    fields {
                        slug
                    }
                    html
                    excerpt
                }
            }
        }
    }
`;
