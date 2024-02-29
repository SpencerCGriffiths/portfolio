This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Thoughts whilst building: 
What is the difference between function() and const name = () => { } in how it is computed? 
Take a CSS course for better understanding
For the scroll arrow could use GSAP (GreenSock Animation Platform) that provide more control over animations, including SVG path animations.
Scroll buttons width is fixed, could this be more variable? 
How to make a pencil draw the words on the page for education? 
Blue Glow on each job description when it comes up? 
I could also have another icon to show the you can click a project to get the webpage?

Current Browser errors: 
app-index.js:35 Warning: Expected server HTML to contain a matching <article> in <a>.
    at article
    at a
    at section
    at div
    at div
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:242:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:73:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:81:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:76:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:84:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:335:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:161:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/render-from-template-context.js:16:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:354:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:73:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:81:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:76:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:84:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/dev-root-not-found-boundary.js:33:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:84:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:307:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/app-router.js:181:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:114:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:161:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/app-router.js:536:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/app-index.js:129:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/app-index.js:145:11)
window.console.error @ app-index.js:35
Show 1 more frame
Show less
react-dom.development.js:6534 Uncaught Error: Hydration failed because the initial UI does not match what was rendered on the server.
    at throwOnHydrationMismatch (react-dom.development.js:6534:19)
    at tryToClaimNextHydratableInstance (react-dom.development.js:6558:21)
    at updateHostComponent$1 (react-dom.development.js:14425:17)
    at beginWork$1 (react-dom.development.js:15970:28)
    at HTMLUnknownElement.callCallback (react-dom.development.js:17629:30)
    at Object.invokeGuardedCallbackImpl (react-dom.development.js:17667:30)
    at invokeGuardedCallback (react-dom.development.js:17729:39)
    at beginWork (react-dom.development.js:22805:21)
    at performUnitOfWork (react-dom.development.js:21852:24)
    at workLoopConcurrent (react-dom.development.js:21840:17)
    at renderRootConcurrent (react-dom.development.js:21808:25)
    at performConcurrentWorkOnRoot (react-dom.development.js:20841:48)
    at workLoop (scheduler.development.js:200:48)
    at flushWork (scheduler.development.js:178:28)
    at MessagePort.performWorkUntilDeadline (scheduler.development.js:416:35)
app-index.js:35 Warning: An error occurred during hydration. The server HTML was replaced with client content in <#document>.
window.console.error @ app-index.js:35
Show 1 more frame
Show less
app-index.js:35 Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
    at a
    at p
    at article
    at a
    at section
    at div
    at div
    at InnerLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:242:11)
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:73:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:81:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:76:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:84:11)
    at LoadingBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:335:11)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:161:11)
    at InnerScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:152:9)
    at ScrollAndFocusHandler (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:227:11)
    at RenderFromTemplateContext (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/render-from-template-context.js:16:44)
    at OuterLayoutRouter (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/layout-router.js:354:11)
    at body
    at html
    at RedirectErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:73:9)
    at RedirectBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/redirect-boundary.js:81:11)
    at NotFoundErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:76:9)
    at NotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/not-found-boundary.js:84:11)
    at DevRootNotFoundBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/dev-root-not-found-boundary.js:33:11)
    at ReactDevOverlay (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:84:9)
    at HotReload (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:307:11)
    at Router (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/app-router.js:181:11)
    at ErrorBoundaryHandler (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:114:9)
    at ErrorBoundary (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/error-boundary.js:161:11)
    at AppRouter (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/app-router.js:536:13)
    at ServerRoot (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/app-index.js:129:11)
    at RSCComponent
    at Root (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/app-index.js:145:11)
window.console.error @ app-index.js:35
Show 1 more frame
Show less
5on-recoverable-error.js:20 Uncaught Error: Hydration failed because the initial UI does not match what was rendered on the server.
    at throwOnHydrationMismatch (react-dom.development.js:6534:19)
    at tryToClaimNextHydratableInstance (react-dom.development.js:6558:21)
    at updateHostComponent$1 (react-dom.development.js:14425:17)
    at beginWork$1 (react-dom.development.js:15970:28)
    at beginWork (react-dom.development.js:22789:28)
    at performUnitOfWork (react-dom.development.js:21852:24)
    at workLoopConcurrent (react-dom.development.js:21840:17)
    at renderRootConcurrent (react-dom.development.js:21808:25)
    at performConcurrentWorkOnRoot (react-dom.development.js:20841:48)
    at workLoop (scheduler.development.js:200:48)
    at flushWork (scheduler.development.js:178:28)
    at MessagePort.performWorkUntilDeadline (scheduler.development.js:416:35)
react-dom.development.js:14381 Uncaught Error: There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.
    at updateHostRoot (react-dom.development.js:14381:71)
    at beginWork$1 (react-dom.development.js:15958:28)
    at beginWork (react-dom.development.js:22789:28)
    at performUnitOfWork (react-dom.development.js:21852:24)
    at workLoopSync (react-dom.development.js:21617:17)
    at renderRootSync (react-dom.development.js:21584:21)
    at recoverFromConcurrentError (react-dom.development.js:20917:30)
    at performConcurrentWorkOnRoot (react-dom.development.js:20871:46)
    at workLoop (scheduler.development.js:200:48)
    at flushWork (scheduler.development.js:178:28)
    at MessagePort.performWorkUntilDeadline (scheduler.development.js:416:35)