# Soft Style

**The project was just created this week, so it's still an empty shell, there's no point in installing it yet**

## About

Soft Style is a CSS Framework based on CSS variables, allowing you to develop your website using CSS classes from the frameworks, that you can easily customize. All variables used are located in the `config.css` stylesheet, so you can adjust them to your needs ( tweak the colors and so on ).

**CSS variables currently aren't supported by a lot of browsers, so that's why this framework has no point. It will become useful when CSS variables will be supported ( I hope I'll have finished in time )**

## Installation

You don't need to clone the whole repository, just the `src` folder. The `soft.css` stylesheet automatically imports all the files so there is no need to import them all in your HTML. Just copy the files inside your css / stylesheets folder, and do a basic stylesheet link followed by a script import:

```html
<link rel="stylesheet" type="text/css" href="src/soft.css">
<script src="src/soft.js"></script>
```

**To learn about the role of each `.css` file, read the corresponding doc in the `/doc/files` folder**
