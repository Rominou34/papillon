# Soft Style

**The project was just created this week, so it's still an empty shell, there's no point in installing it yet**

## About

Soft Style is a CSS Framework based on CSS variables, allowing you to develop your website using CSS classes from the frameworks, that you can easily customize. All variables used are located in the `config.css` stylesheet, so you can adjust them to your needs ( tweak the colors and so on ).

**CSS variables currently aren't supported by a lot of browsers, so that's why this framework has no point. It will become useful when CSS variables will be supported ( I hope I'll have finished in time )**

## Installation

You don't need to clone the whole repository, just the `src` folder. The `soft.css` stylesheet automatically imports all the other css files so there is no need to link them all in your HTML. Just copy the files inside your css / stylesheets folder, and do a basic script and stylesheet link:

```html
<link rel="stylesheet" type="text/css" href="src/soft.css">
<script src="src/soft.js"></script>
```

## Install from the CDN

When the framework will be released I'll buy a sweet domain name and put the fileso n a CDN so you will be able to easily import the files ( you will still be able to download the full unminified source code if you want to change things ). Here's how it will work:

1. Download the file `config.css` and customize it for your needs, it will act **as your website's customization panel**

2. Import the minified files from the CDN:

  ```html
  <link rel="stylesheet" type="text/css" href="http://cdn.lulz/soft.min.css">
  <script src="http://cdn.lulz/soft.min.js"></script>
  ```

3. ( Optional ) If you want to use all the font icons classes from Font Awesome import Font Awesome ( either by downloading it on your server or by using MaxCDN's awesome CDN ) and import the file `fonticons.min.css` from the CDN or download it

**To learn about the role of each `.css` file, read the corresponding doc in the `/doc/files` folder**

## Documentation

You can find the documentation for the framework in the `doc/` folder. The `global.md` file acts as a global documentation explaining how to use the framework, while the files in the `files` folder each explain the role of the corresponding files in the `src` folder.

You will want to read `global.md` to learn how to use the framework and all its functions, and learn the doc for the files only if you want to customize the files and to adapt the framework to your needs ( which is the point of it )

## About

This project is being developed by myself only as a personal project. I would like to develop a PHP blog system ( as a personal project too ) and use this CSS framework to to the front-end job of the blog system, I'm developping the CSS framework before attacking the PHP

I would like to thank [sanitize.css](https://github.com/10up/sanitize.css) as I'm using their stylesheet to make the framework look the same in all browsers, thx bros
