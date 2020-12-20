---
title: "Receive bus information quickly via a web app"
excerpt: "YDNABusapp provides you with all the information you need for your next bus ride."
coverImage: "/images/ydna-bus-app/bustimings.png"
date: "Dec 2020"
author:
  name: Jerron Lim
category: "Software dev"
featured: "True"
---

If you would like to test out the app click [here](https://youdontneedabusapp.now.sh/) or if you would like to help improve it, here is the [github repo](https://github.com/StreetLamb/YDNABusApp).

The main reason for building YDNABusApp (You Don't Need a Bus App) was to practice my react skills after neglecting it for a while. I challenged myself to complete it within a week and not use any bootstrap components. I also wanted to see if it is possible to build a bus web app with similar or better capabilities than bus apps on the app store.

For the web app to be usable, it needs to be something that users can quickly bring up on their phones and easily look up bus timings and bus routes. To make this possible, I decided to keep it simple. The app will just have two components, a map and an information list as seen in the photo above.
For the map, I utilised Mapbox GL JS maps. It was my first time using it and it took some time reading the documentation to understand how it works. After getting the hang of adding layers, filtering points etc., I found Mapbox to be highly customisable and allowed me to develop my ideas quickly! The final result of the map component allowed users to simply slide across the map, and bus stops in view will be highlighted in red and displayed in the list component. This reduces the need for additional user actions to click or tap on the bus stops in the map.

For the list component, I wanted to keep it simple and not have multiple tabs for bus timings, routes, search etc. but still have all these functionalities. Therefore, for the final list component, users can search for bus routes and bus stops in the search bar. Users can also click on the bus service number to receive bus route information all from the same list.

Reflecting on the project, I am quite happy how it turned out. However, I can see some features that might be worth adding in the future. I'm also contemplating making it a cohesive app with information for both trains and taxis. Working on this project also allowed me to learn how to use Mapbox which I can see myself using in the future.
