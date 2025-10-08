---
title: Optimizing the site CSS
datewritten: October 8th, 2025
date: 2025-10-08
desc: Some data about my CSS optimization process for this site.
layout: posts.njk
---
# Optimizing the site CSS
So I've spent the better part of yesterday doing some work on my site CSS. The goal: Make it less messy, while trying to save storage space.

## The process
The first idea that came to my mind was splitting up my CSS. This could potentially reduce the amount that needs to be loaded for pages that don't use specific components.

I ended up splitting my CSS into 4 different files: Base, which contains font declarations and body container styling; Title, for styling of the site title and subtitle as well as managing mobile compatibility by swapping between two different elements with different styling; Sidebar, which handles the desktop sidebar's positioning and styling; And Nav, which includes the styling for the navigation elements as well as the mobile styling of those which is responsible for turning the header nav elements into a bottom navigation bar.

Once that was done, I then went through the code to shave off as many characters as I could, for example, by omitting empty lines between brackets and combining multiple margin statements for different directions into one. I however did not remove comments or spaces, to still keep a decent amount of readability.

## The results
I've got a few graphs prepared for this. First, here's the total file size of my CSS:

![image](/assets/blog/css/1.png)

The higher file size when having split, but not optimized the CSS is most likely due to the fact that having 4 files with the same content as 1 file will result in a higher total size, due to things like additional file headers being present.

Next, here's the file size of the CSS being loaded in blog pages:

![image](/assets/blog/css/2.png)

Here, we already see a decrease with the split unoptimized CSS due to the sidebar not being loaded on desktop in the blog pages.

Speaking of the sidebar, here's the CSS file size for the mobile sidebar page:

![image](/assets/blog/css/3.png)

Once again, there's a decrease with the split CSS, this time however, it's even more amplified due to not having to load the Title CSS which is almost 1 KB in size.

Now, the combined size of loaded CSS on all pages. There are 5 pages with all CSS loaded, 8 blog pages with no sidebar CSS loaded, and the mobile sidebar page.

![image](/assets/blog/css/4.png)

The optimization helped a lot here across the 14 pages, with my average CSS file size per page doing down from 3267 bytes post-split to 2850 post-optimization.

I'll finish with 2 interesting comparisons, this time across V1, V2, the old V3 and the CSS optimized V3.

First, the site load times with the cache disabled.

![image](/assets/blog/css/5.png)

Here the biggest difference is between V1 and V2. This is mainly caused by the site asset size, which we can see here:

![image](/assets/blog/css/6.png)

A big part of the 6 MB is the font, with 2 MB for the regular and bold fonts. And with no fallback font, the browser needs to wait until the fonts are downloaded and loaded up, thus increasing load times.

## Conclusion
So overall, this pretty much did nothing, since obviously saving between a half and one kilobyte won't do much. However, it did give me an opportunity to clean up and look over my CSS code, which is very much a plus.