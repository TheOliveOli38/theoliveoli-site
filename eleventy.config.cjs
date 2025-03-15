module.exports = async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/*");
    eleventyConfig.addPassthroughCopy("assets/blog/*");
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("style-blog.css");
    const { EleventyRenderPlugin } = await import("@11ty/eleventy");
	  eleventyConfig.addPlugin(EleventyRenderPlugin);
  };