# Documentation - style.css

## How the file works

It's the root css file of the whole framework, the one that imports all the other ones ( you can see all the `@import` at the beginning ). While `config.css` is used to configure the values and `classes.css` contains the classes, style.css contains all the CSS declarations relative to the elements ( such a p {}, h1 {}, etc...).

It initialize all the parameters and by tweaking it you can modify the aspect of your website without using any class

## Plan

* `@import`
* Initialization
  * html, body
  * html, body, p, div, article, h1, h2, h3, h4, h5, h6
  * *
* Titles
  * h1
  * h2
  * h3
  * h4
  * h5
  * h6
* Header
