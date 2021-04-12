import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = ({data}) => {
    console.log(data.allMarkdownRemark.edges);

    return (
        <Layout>
            <Seo title="Home" />
            <div>
                <h1>Hi people</h1>
            </div>
            <h2>{data.allMarkdownRemark.totalCount}</h2>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id}>
                    <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
                    <p>
                        {node.excerpt}
                    </p>
                </div>
            ))}
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        date
                        description
                        title
                    }
                    html
                    excerpt
                }
            }
        }
    }
`;
