---
title: My Hackintosh experience
datewritten: June 5th, 2025
date: 2025-06-05
desc: Wait... so I broke Apple's TOS?
layout: posts.njk
---

# My Hackintosh experience
Now, I do not own a Mac. Do I wish I did though? Of course. So I guess I gotta cope somehow... with the OpenCore Bootloader, some good old DIY-ing and a whole lot of trial and error!

## The machine
The computer I am running macOS on is my daily driver laptop, a Dell Latitude E5470. And yes, it's not the Latitude 5480 (which I mentioned as being my daily driver [here.](/blog/posts/hardware)), at least not anymore.

These are its specs:\
CPU: Intel Core i5-6300U\
GPU: Intel HD 520\
RAM: 2x8GB DDR4 2133MHz\
Storage: 256GB Intenso SATA 3 SSD\
Display: 1366x768 60Hz IPS\
Wi-Fi card: Intel Wireless AC 8260 (Wi-Fi + BT)

## Why macOS over Windows?
I do have to admit that in some regards, Windows does perform better than macOS, and sometimes yields better battery life, too. However, there are many tiny and a few bigger issues that cause me to go back to macOS on a laptop ever since I started hackintoshing over a year ago.

1. Touchpad gestures\
Dell's touchpad drivers for Windows sure are a mess. Not only does the Alps driver software cause a CPU spike of up to 10% usage whenever the touchpad is, well... touched, but it doesn't even support sideways scrolling and Windows' gesture implementation is a bit rough.

2. macOS workflow\
This also ties into the previous point. One thing I like about the workflow of macOS is how full-screened apps are put into their seperate space in Mission Control, acting the same as a virtual desktop does. This allows me to have multiple apps open in full screen, and with just a swipe, I can get to the app I want. And if I do end up not working in full screen, Mission Control lets me pull up those hidden windows easily.

3. Snappiness\
I find macOS to be quite a bit snappier than Windows. Application launch times are quite a bit slower, however the system doesn't completely freak out whenever an app has a high CPU usage, and generally, I can keep swapping between apps without any issues under high system load.

4. Stability\
This one's simple. The only times where I've had a macOS install break on me was because I screwed up something with my OpenCore configuration and when I tried to upgrade to a macOS version that doesn't work well on that specific hardware. That absolutely isn't something I can say about Windows, that's for sure.

5. The little things\
Like AirPlay, allowing me to mirror my screen because Miracast just doesn't work on this machine for some reason, and Intel Wireless Display isn't a thing anymore. And there's also Time Machine, letting me restore my system to a previous state easily through the macOS Recovery, which honestly works a lot better than Windows' system restore points and its recovery environment.

## The install itself
The macOS version I chose to install was macOS Mojave. I'm not a fan of macOS Big Sur in terms of how it looks and performs, and macOS Catalina is just a slower Mojave, too. Since all of the apps I need still work fine on Mojave (including but not limited to MS Office, Discord, VS Code and the Orion web browser) I don't see any reason to go any higher than that.

Here's my About This Mac:

![image](/assets/blog/aboutmac.png)\
And here's my current desktop and Dock layout!

![image](/assets/blog/desktop.png)

## The issues
There's always gotta be some of those, right? I've genuinely always had at least one issue with every hackintosh I've had.\
For this one, we've got some slightly broken SMC detection, with the laptop still functioning when macOS shows the battery as being 0% charged, although that might not be an issue exclusive to macOS.\
The biggest and only major issue, however, is the Intel Wi-Fi. The AirportItlwm kext sure shows its weaknesses under low signal strength, which I unfortunately do get in my room. While the network speeds are just as slow as on Windows, the main issue is that it randomly disconnects from the network, mostly around every 5 minutes depending on the load, and the only way to connect back is to completely turn off, then turn back on the Wi-Fi.

But other than that, daily driving a hackintosh has been quite enjoyable, and sure does save me some headaches from when I were to use Windows on this thing. And while sure, I do break the Apple TOS, I.. don't really care about that lmfao.