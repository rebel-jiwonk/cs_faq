module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addPassthroughCopy("search.html");

    return {
        dir: {
            input: '.',
            output: '_site'
        }
    }
}
