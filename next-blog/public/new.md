---
title: 'new Post Testing revalidation'
date: '2023-05-19'
---

**In Next.js**, a route can be statically or dynamically rendered.

In a static route, components are rendered on the server at build time. The result of the work is cached and reused on subsequent requests.
In a dynamic route, components are rendered on the server at request time.
Static Rendering (Default)
Static rendering (default) improves performance because all the rendering work is done ahead of time and can be served from a Content Delivery Network (CDN) geographically closer to the user.

You can opt into dynamic rendering by using a dynamic function or dynamic data fetching in a layout or page. This will cause Next.js to render the whole route dynamically, at request time.

This table summarizes how dynamic functions and static data fetching (caching) affect the rendering behavior of a route.