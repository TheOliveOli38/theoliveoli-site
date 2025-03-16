module.exports = async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/*");
    eleventyConfig.addPassthroughCopy("assets/blog/*");
    eleventyConfig.addPassthroughCopy("favicon.png");
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("style-blog.css");
    eleventyConfig.addPassthroughCopy("aeroring/pmoring.js");
    eleventyConfig.addPassthroughCopy("aeroring/pmoring.config.js");
    
    const { EleventyRenderPlugin } = await import("@11ty/eleventy");
	  eleventyConfig.addPlugin(EleventyRenderPlugin);
  };