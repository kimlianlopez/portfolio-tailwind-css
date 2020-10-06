import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Landing = () => {
  return (
    <div className="bg-indigo-700 h-screen" id="landing">
      <div className="container mx-auto py-24 h-full">
        <div className="h-full flex flex-col justify-center">
          <div className="md:w-5/6 px-4">
            <h1 className="heading-text mb-4 text-white">Looking for Kim?</h1>
            <p className="body-text text-gray-200">
              I'm a full-stack web developer currently focused in modern
              JavaScript. I design and code stunning websites and applications,
              and I love what I do.
            </p>
            <button
              className="btn btn-main my-8 mr-3"
              onClick={() => scrollTo("#portfolio")}
            >
              View Portfolio
            </button>
            <button
              className="btn btn-main-outline my-8"
              onClick={() => scrollTo("#about")}
            >
              About Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
