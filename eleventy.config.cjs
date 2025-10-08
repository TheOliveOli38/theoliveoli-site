module.exports = async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/*");
    eleventyConfig.addPassthroughCopy("assets/blog/*");
    eleventyConfig.addPassthroughCopy("assets/blog/css/*");
    eleventyConfig.addPassthroughCopy("assets/webring/*");
    eleventyConfig.addPassthroughCopy("favicon.png");
    eleventyConfig.addPassthroughCopy("style/*");
    
    const { EleventyRenderPlugin } = await import("@11ty/eleventy");
	  eleventyConfig.addPlugin(EleventyRenderPlugin);
  };