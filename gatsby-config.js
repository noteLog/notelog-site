"use strict";

module.exports = {
    siteMetadata: {
        title: "Home - noteLog",
        description: "A way to search through all your information store in one place",
        siteUrl: "https://notelog.app",
    },
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: "docs",
              path: __dirname + "/content/docs/",
              ignore: [ "**/\.*" ],
            },
        },
        "gatsby-transformer-remark",
        "gatsby-plugin-typescript",
    ],
};
