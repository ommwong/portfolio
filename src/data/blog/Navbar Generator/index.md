---
title: Navbar Generator
categories: ['react', 'typescript', 'jest', 'open-source', 'npm', 'microbundle', 'react-testing-library']
image: './npm.png'
imageCredit: https://dribbble.com/shots/13972666-faces
date: "2015-05-01T22:12:03.284Z"
time: 3
description: "A open-source npm library component to generate reusable navigation bars for React UIs."
---
[SOURCE CODE](https://github.com/kasia-js/navigation-bar-component-for-react)

NavBar Generator is an open-source npm library component to quickly build out navigation bars and routing for React applications.

The project was originally authored by [Rashmi Menon Vellekkat](https://github.com/RashmiBalaji). I worked with [Katarzyna Kolny](https://github.com/kasia-js) and [Hamed Sedighi](https://github.com/herol3oy) to refactor, test, and deploy the project.

# Project Purpose

I contributed to this project to participate, even in a small way, to the open-source community. I also wanted to build something that I can use myself. There is a need for a navigation bar for many web applications. This reusable library component makes the process more streamlined.

# Tech Stack

The component was built with React, specifically using the [create-react-library](https://www.npmjs.com/package/create-react-library) library. Using React to create a reusable React component ... well, that just makes sense. 😜

The component was first written in Javascript. It was later refactored to Typescript, which helped us catch errors even before implementing unit testing with Jest and React Testing Library.

Lastly, we built and published the component to npm.

# Workflow

The initial MVP of the component was built by the original author. The following week, I worked in a team of 3 developers for another week on the second phase of the project.

We extensively communicated with the original author to understand her original vision and get a clearer idea of some of the sticky challenges she encountered during the first development phase.

In our development phase, we refactored the code base to Typescript and implemented unit testing. The final few days were spent fixing significant issues with the build and the folder structure.

# Challenges

We ran into a few bumps along the way. One particularly tricky part of the project was figuring out why the code was not building for production. To fix this, we spent a considerable amount of time fixing the folder and code structure. This was a critical and challenging phase of development because without fixing the build, we would not have been able to publish on npm.

# Room for Improvement

This component is very slim on features. There is significant room for added features, such as deeply nested menus and more dynamic layout options for end-users. CSS could also be vastly improved.

# Lessons

Going into someone else's codebase is always more challenging than building a project from scratch. Working on this React component was an excellent exercise in reading other developers' code.

This project was also my first npm project. Thanks to the project, I have a much clearer idea of what happens when building a reusable component for production.