# Documentation - config.css

## How the file works

The `config.css` file contains all the variables for the fonts, colors, etc used in the other files ( `classes.css` and `style.css` ). It sets default values for all the classes, all grouped into a single config file to avoid repetition and to be easily tweakable.

Each variables ( font, color, etc ) uses a default value and some secondary values. For the red color for example, you'll have:

* --red-default
* --red-light
* --red-lighter
* --red-dark
* --red-darker
* --red-subtle

## How to use it

Let's say you create a website using the framework, but, how infortunate, the blue color doesn't fit your needs. No problem, instead of applying an inline-style in your HTML or creating a new rule using !important or whatever, you just go to `config.css` in the 'COLORS' section, and change the value of the variable you need. You want a flat blue ? Change it ? You want it a little bit flashier ? Tweak it

## Plan

* Font
  * Font families
  * Font sizes
* Colors
  * White
  * Grey
  * Black
  * Blue
  * Green
  * Red
