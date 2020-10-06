import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            image
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  const url = site.siteMetadata.url
  const metaImage = `${site.siteMetadata.url}${site.siteMetadata.image}`
  const siteTitle = title || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={siteTitle}
      link={[
        {
          href: site.url,
          rel: "canonical",
        },
        {
          href: "/favicon.png",
          rel: "shortcut icon",
          type: "image/png",
        },
      ]}
      meta={[
        {
          charSet: "utf-8",
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: metaImage,
        },
        {
          name: `url`,
          content: url,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `twitter:card `,
          content: "summary_large_image",
        },
        {
          property: `twitter:title`,
          content: siteTitle,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  title: "",
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
