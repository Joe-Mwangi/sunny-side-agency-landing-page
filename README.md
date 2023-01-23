# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page


### Links

- Solution URL: https://joe-mwangi.github.io/sunny-side-agency-landing-page

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla javascript

### What I learned

I learned how to change fill color on svg images.

```html
        <div class="img img1"></div>
        <div class="img img2"></div>
        <div class="img img3"></div>
        <div class="img img4"></div>
```

```css
.img{
    cursor: pointer;
    width: 1.4rem;
    height: 1.4rem;
}
.img1{
    -webkit-mask: url(./images/icon-facebook.svg) no-repeat center;
    background-color: var(--Dark-cyan);
}
.img2{
    -webkit-mask: url(./images/icon-instagram.svg) no-repeat center;
    background-color: var(--Dark-cyan);
}
.img3{
    -webkit-mask: url(./images/icon-twitter.svg) no-repeat center;
    background-color: var(--Dark-cyan);
}
.img4{
    -webkit-mask: url(./images/icon-pinterest.svg) no-repeat center;
    background-color: var(--Dark-cyan);
}
.img:hover{
    background: var(--White);
}
```
