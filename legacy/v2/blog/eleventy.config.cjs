module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("style-blog.css");
    eleventyConfig.addPassthroughCopy("monob.otf");
    eleventyConfig.addPassthroughCopy("mono.otf");
  };