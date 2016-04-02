# Soft CSS

[![Code Climate](https://codeclimate.com/github/Rominou34/soft-css/badges/gpa.svg)](https://codeclimate.com/github/Rominou34/soft-css)

## About

Soft Style is a CSS Framework allowing you to easily customize your website with modern design. You can either import the CSS directly from the CDN ( still not there ) if you're okay with the default settings, or clone the repo and tweak the settings as you wish.

The framework works with [LESS](http://lesscss.org/) and every basic settings from the color palette to the body size can be found in the `config.less` file so you can quickly change the aspect of your site without having to crawl around thousands of lines of code

## Installation

#### I'm okay with the default values and want to set it asap

**Using the CDN ( not there yet )**

When the framework will be released I'll buy a sweet domain name and put the files on a CDN so you will be able to easily import the files ( you will still be able to download the full unminified source code if you want to change things ). Here's how it will work:

1. Download the file `config.css` and customize it for your needs, it will act **as your website's customization panel**

2. Import the minified files from the CDN:

  ```html
  <link rel="stylesheet" type="text/css" href="http://cdn.lulz/soft.min.css">
  <script src="http://cdn.lulz/soft.min.js"></script>
  ```

3. ( Optional ) If you want to use all the font icons classes from Font Awesome import Font Awesome ( either by downloading it on your server or by using MaxCDN's awesome CDN ) and import the file `fonticons.min.css` from the CDN or download it

#### I want to change some things

**If you have LESS**

`git clone` the repo and change the things you want in the files located in the `src/less` folder.

When you're done, compile it using `lessc` and you're good to go

**If you don't have LESS**

After each big update, I'll compile each file separately so you'll have `menus.css`, `tables.css`, `grid.css` etc.

## Documentation

You can find the documentation for the framework in the `doc/` folder. The `global.md` file acts as a global documentation explaining how to use the framework, while the files in the `files` folder each explain the role of the corresponding files in the `src` folder.

You will want to read `global.md` to learn how to use the framework and all its functions, and learn the doc for the files only if you want to customize the files and to adapt the framework to your needs ( which is the point of it )

## About

This project is being developed by myself only as a personal project. I would like to develop a PHP blog system ( as a personal project too ) and use this CSS framework to to the front-end job of the blog system, I'm developping the CSS framework before attacking the PHP

I would like to thank [sanitize.css](https://github.com/10up/sanitize.css) as I'm using their stylesheet to make the framework look the same in all browsers, thx bros
