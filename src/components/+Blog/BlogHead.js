import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const BlogHeadImage = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('${({ image }) => image}');
`

const BlogHeadName = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10vh;
  left: 0;
  right: 0;
  background-image: linear-gradient(0deg, #000c 0%, #0000 100%);
  color: #fff;
  text-align: center;
`

const BlogHead = ({ name, source, category, image: { url } }) => (
  <Fragment>
    <Helmet>
      <title>{name} - Blog | Mathew Kleppin</title>
    </Helmet>
    <BlogHeadImage
      image={url}
    >
      <BlogHeadName>
        <h1>{name}</h1>
        <h5>{source}</h5>
      </BlogHeadName>
    </BlogHeadImage>
  </Fragment>
)

export default BlogHead