# Soft Style

**The project was just created this week, so it's still an empty shell, there's no point in installing it yet**

## About

Soft Style is a CSS Framework based on CSS variables, allowing you to develop your website using CSS classes from the frameworks, that you can easily customize. All variables used are located in the `config.css` stylesheet, so you can adjust them to your needs ( tweak the colors and so on ).

**CSS variables currently aren't supported by a lot of browsers, so that's why this framework has no point. It will become useful when CSS variables will be supported ( I hope I'll have finished in time )**

## Installation

You don't need to clone the whole repository, just the `src` folder. The `soft.js` script automatically imports all the files so there is no need to link CSS in your HTML. Just copy the files inside your css / stylesheets folder, and do a basic script import:

```html
<script src="src/soft.js"></script>
```

**To learn about the role of each `.css` file, read the corresponding doc in the `/doc/files` folder**

## Documentation

You can find the documentation for the framework in the `doc/` folder. The `global.md` file acts as a global documentation explaining how to use the framework, while the files in the `files` folder each explain the role of the corresponding files in the `src` folder.

You will want to read `global.md` to learn how to use the framework and all its functions, and learn the doc for the files only if you want to customize the files and to adapt the framework to your needs ( which is the point of it )
