module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/*");
    eleventyConfig.addPassthroughCopy("assets/blog/*");
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("style-blog.css");
  };