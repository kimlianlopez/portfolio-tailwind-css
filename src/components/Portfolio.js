import React from "react"

import "./Portfolio.css"
import GithubIcon from "../../static/github-brands.svg"
import WebsiteIcon from "../../static/globe-solid.svg"

const projectList = [
  {
    name: "My Main Portfolio",
    image: "/main-portfolio.png",
    tags: ["react", "gatsbyjs", "javascript", "scss"],
    links: {
      site: "https://thekimlopez.com/",
    },
  },
  {
    name: "JLopez Photografia",
    image: "/jlopez-photografia.JPG",
    tags: ["react", "gatsbyjs", "javascript", "html5", "css3", "scss"],
    links: {
      site: "https://jlopezphotografia.com/",
    },
  },
  {
    name: "Gatsby Starter Readify",
    image: "/gatsby-starter-readify.png",
    tags: ["react", "gatsbyjs", "javascript", "html5", "css3", "scss"],
    links: {
      site: "https://gatsby-starter-readify.netlify.app/",
      github: "https://github.com/kimlianlopez/gatsby-starter-readify",
    },
  },
  {
    name: "Snake Game",
    image: "/snake-game.jpg",
    tags: ["react", "javascript", "scss"],
    links: {
      site: "https://code.thekimlopez.com/snake-game/",
      github:
        "https://github.com/kimlianlopez/code-lab/tree/master/src/projects/Snake",
    },
  },
  {
    name: "Gooey Social Icons",
    image: "/gooeysocialicons.jpg",
    tags: ["react", "javascript", "scss"],
    links: {
      site: "https://code.thekimlopez.com/gooey-social-icons/",
      github:
        "https://github.com/kimlianlopez/code-lab/tree/master/src/projects/GooeySocialIcons",
    },
  },
]

const Portfolio = () => {
  return (
    <div className="bg-gray-800" id="portfolio">
      <div className="container mx-auto pt-16 md:pb-10 lg:py-16">
        <div className="flex flex-col justify-center mb-8">
          <div className="md:w-4/6 px-4">
            <h1 className="heading-text mb-4 text-white">
              Developer Portfolio
            </h1>
            <p className="body-text text-gray-200">
              From simple websites and applications to ReactJS, GatsbyJS and
              NodeJS. Check out my latest web development projects.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          {projectList.map((project, i) => {
            return (
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8" key={i}>
                <div className="flex flex-col">
                  <div className="relative pb-2/3 mb-3 aspect-ratio">
                    {Object.keys(project.links).map((link, i) => {
                      const left = link === "github" ? "3.5rem" : ".5rem"

                      return (
                        <a
                          href={project.links[link]}
                          key={i}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white rounded-full text-teal-700 focus:outline-none hover:bg-teal-700 hover:text-white absolute z-20 w-10 h-10 p-1 shadow-lg"
                          style={{ top: ".5rem", left }}
                        >
                          {link === "github" ? <GithubIcon /> : <WebsiteIcon />}
                        </a>
                      )
                    })}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute h-full w-full object-cover z-10"
                    />
                  </div>
                  <p className="text-white text-lg font-bold mb-3">
                    {project.name}
                  </p>
                  <div className="flex flex-row flex-wrap">
                    {project.tags.map(tag => {
                      return (
                        <span className="text-xs text-white px-2 py-1 mr-1 mb-1 bg-gray-900 leading-normal">
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
