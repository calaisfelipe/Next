---
title: 'Server and Client Components'
date: '2023-03-12'
---

**Server Components**
All components inside the app directory are React Server Components (RSC) by default, including special files and colocated components. This allows you to automatically adopt Server Components with no extra work, and achieve great performance out of the box.

**Why Server Components?**
Server Components allow developers to better leverage server infrastructure. For example, large dependencies that previously would impact the JavaScript bundle size on the client can instead remain entirely on the server, leading to improved performance.

Server Components make writing a React application feel similar to PHP or Ruby on Rails, but with the power and flexibility of React for templating UI.

When a route is loaded with Next.js, the initial HTML is rendered on the server. This HTML is then progressively enhanced in the browser, allowing the client to take over the application and add interactivity, by asynchronously loading the Next.js and React client-side runtime.

With Server Components, the initial page load is faster, and the client-side JavaScript bundle size is reduced. The base client-side runtime is cacheable and predictable in size, and does not increase as your application grows. Additional JavaScript is only added as client-side interactivity is used in your application through Client Components.

