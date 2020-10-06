import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfilePicture = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-picture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const About = () => {
  return (
    <div className="container mx-auto py-16" id="about">
      <div className="flex flex-col justify-center">
        <div className="md:w-5/6 px-4">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-4">
            <ProfilePicture />
          </div>
          <h1 className="heading-text mb-4 text-gray-800">
            <span className="block">Hello!</span> I'm Kim Lian Lopez
          </h1>
          <p className="body-text text-gray-600">
            I'm a passionate and experienced web developer with a knack for
            building amazing web applications. Naturally curious and
            enthusiastic, I love to learn new technology and development stacks
            every now and then.
          </p>
          <button
            className="btn btn-main my-8 mr-3"
            onClick={() => scrollTo("#portfolio")}
          >
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
