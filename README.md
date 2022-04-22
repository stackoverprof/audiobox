### Generasi GIGIH — Final Project 

# [![](./public/favicon.svg)]() Audiobox - Find tracks and create the Playlist you love

_Live Production: [audiobox.errbint.net](https://audiobox.errbint.net)_

A React based web application that utilizes Spotify Web-API at its finest. You can create, edit and manage playlist in your library, explore featured playlists and follow them. There's also a built-in mini player to listen a preview of the tracks. and it's all integrated to Spotify!

## Core Feature (as per the Requirements)

### Creating Playlist

You can create playlist at `/create` after logging in. First, you should search tracks, seeing their details and add/remove them to the cart, then you should fill up the title (minimal 10 char), description, and click submit. Should you successfully created your playlist, you will see a pop up that will redirect you to the `/playlist/:playlist_id` page to see the result.

## Extra Feature

### Library

You can see all the playlist you have in the `/library`, be it your own or the public playlist you've followed. You can edit the playlist (if you owned them) by changing the title, description and tracks. You can also remove any playlist from your library.

### Playlist Manager

Open any playlist in the library and you'll see their dedicated page at `playlist/:playlist_id` where you can do some actions like editing them and reselecting the tracks.

### Explore

Spotify provides you a highly curated playlist that is featured in the `/explore` page. You can eventually meet a playlists that match your taste and add them to your library. You can find a nice-looking carousel of track cards in this page to help you discover better.

### Charts

There's also a sub page of `/explore?tab=charts` where you can see the daily/weekly global/local track ranking that will keep you updated!

### Music Player

Yes! it's a feature to let you listen to the preview of the tracks you love, you can click the play button in the track or even to play the whole playlist continously in their order. If you wan't to listen the full version, there's also a link provided in the mini player (bottom-left) that will redirect you to the Spotify App.

### History

After you used the Music Player feature, all the tracks you've listened to will be listed under the `/history` page. You can also see the information about how long ago was the track played and then you can also re-play them all.

## Tech-stack Breakdown

[![](https://img.shields.io/badge/TYPESCRIPT%20-%233178C6.svg?&style=flat&logo=typescript&logoColor=white)](https://typescriptlang.org) 
[![](https://img.shields.io/badge/REACT%20-%2356BDDA.svg?&style=flat&logo=react&logoColor=white)](https://reactjs.org) 
[![](https://img.shields.io/badge/VITE%20-%23646CFF.svg?&style=flat&logo=vite&logoColor=white)](https://vitejs.dev) 
[![](https://img.shields.io/badge/TAILWIND%20-%2338B2AC.svg?&style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![](https://img.shields.io/badge/REDUX%20-%23764ABC.svg?&style=flat&logo=redux&logoColor=white)](https://redux.js.org)
[![](https://img.shields.io/badge/SWR%20-%23000000.svg?&style=flat&logo=vercel&logoColor=white)](https://swr.vercel.app)
[![](https://img.shields.io/badge/VITEST%20-%23dbab1f.svg?&style=flat&logo=vite&logoColor=white)](https://vitest.dev) 
[![](https://img.shields.io/badge/TESTING%20LIBRARY%20-%23E33332.svg?&style=flat&logo=testing-library&logoColor=white)](https://testing-library.com)
[![](https://img.shields.io/badge/MSW%20-%23ff6933.svg?&style=flat&logo=dynatrace&logoColor=white)](https://mswjs.io)
[![](https://img.shields.io/badge/VERCEL%20-%23000000.svg?&style=flat&logo=vercel&logoColor=white)](https://vercel.com)

#### The decision to change bundler from Webpack to Vite

All about performance. Vite bundler is blazing fast utilizing native ESM and esbuild which is written in Go and Vite can pre-bundles dependencies 10-100x faster than JavaScript-based bundlers.

#### Data Fetching with SWR

Managing data fetching is uneasy with all the manual process of data passing-updating. SWR handled it all out of the box with a realtime experience and better performance, leading to a fast and nice user experience. SWR created a server-caching which gives us a better networking efficiency. SWR can also be a custom Hook that acts almost like a global state management.

#### Vitest as Jest replacement

Still about perfomance, built on top of the vite technologies. Vitest syntaxes is as same as Jest, but the performance is greatly different. Vitest can be integrated easily with the other testing library such as React Testing Library and MSW

#### Deployed on Vercel with Custom Domain

You can visit it at `audiobox.errbint.net`, this project is deployed on Vercel with just Hobby Plan and I setup my own domain errbint.net and later set audiobox to be the subdomain. The development branch can also be visited at `dev.audiobox.errbint.net`

## Run it Locally

Make sure you've set the `.env.local` file with a value of
`VITE_SPOTIFY_CLIENT_ID = `

Just do
`npm install`
and then
`npm start`

## Available scripts
`start` : run local dev server

`dev` : run local dev server

`build` : produce build

`preview` : preview the build

`lint` : run eslint

`format` : run prettier to beautify code

`test` : run testing

## Contribute

Fork it first and you're ready to go.
Opened for any improvements or fixes
