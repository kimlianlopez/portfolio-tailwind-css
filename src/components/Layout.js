import React from "react"
import PropTypes from "prop-types"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./Layout.css"
import Logo from "../../static/logo.svg"
import ChevronUp from "../../static/chevron-up-solid.svg"

const Layout = ({ children }) => {
  return (
    <div>
      <button
        className="fixed hidden md:block z-50 bg-teal-500 hover:bg-teal-600 text-white text-xl rounded-full focus:outline-none px-4 w-16 h-16"
        style={{ bottom: "1rem", right: "1rem" }}
        onClick={() => scrollTo("#landing")}
      >
        <ChevronUp />
      </button>
      <main>{children}</main>
      <footer className="container mx-auto py-24 md:py-32">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 md:w-32 md:h-32">
            <Logo />
          </div>
          <h1 className="heading-text text-gray-800">Kim Lian Lopez</h1>
          <h3 className="text-lg md:text-2xl text-gray-700 font-semibold">
            Full-Stack Web Developer
          </h3>
          <div className="mt-24 text-center">
            <span className="block sm:inline-block">
              © {new Date().getFullYear()} Kim Lian Lopez{" "}
            </span>
            <span className="hidden sm:inline-block mx-2">|</span>
            <a
              href="mailto:thekimlopez@gmail.com"
              className="text-teal-700 hover:text-teal-900 font-semibold"
            >
              thekimlopez@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
