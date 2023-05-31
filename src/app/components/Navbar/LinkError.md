# Bug Fix Report - 404 Error on Navbar Link Navigation

## Issue:

The application was encountering a 404 error when attempting to navigate to another page from the navbar using `next/link`. The links were defined correctly in the TSX, but upon clicking, the application was unable to route to the desired page, leading to a 404 error.

## Diagnosis:

The bug occurred due to an incorrect directory naming in the project.
In this case, the `about` page was created as `src/app/pages/about.tsx`. However, Next.js was unable to recognize this file as a route because of its location.

## Solution:

The file structure was corrected to align with Next.js's routing by changing `about.tsx` to `page.tsx` and placing it in a directory called `/about` changing the file path from `src/app/pages/about.tsx` to `src/app/about/page.tsx`.

This adjustment enabled Next.js to correctly identify the `about` route when a user clicked on the corresponding link in the navbar.

## Notes:

- It's important to follow the correct file structure in Next.js projects for routing to work correctly.
- Ensure that all page components are located under the `pages` directory in the project root.
- The filename of the component (or index file inside a directory under `pages`) will be used as the route path.

## Environment:

- Framework: Next.js
- Version: v13.4.4
