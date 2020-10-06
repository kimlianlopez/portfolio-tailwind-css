module.exports = {
  siteMetadata: {
    title: `Kim Lopez | Web Developer`,
    description: `I'm a passionate and experienced web developer with a knack for building amazing 
    web applications. Naturally curious and enthusiastic, I love to learn new technology and development 
    stacks every now and then.`,
    author: `Kim Lian Lopez`,
    url: "https://onepage.thekimlopez.com",
    image: "/cover.png",
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
