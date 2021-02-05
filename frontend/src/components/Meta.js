import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Welcome To Pittoresco",
  description: "Pittoresco is the best place to buy artwork online...",
  keywords: "canvas, art, art works",
};

export default Meta
