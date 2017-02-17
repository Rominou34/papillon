# Guidelines for Papillon UI

## 1. Introduction

When I started this project, I only wanted to develop a beautiful CSS framework, without giving it much thought. As a result, the project advanced while not having any identity: it makes a website good-looking, but without any guidelines.

>Why are the buttons like this ?

>Why put shadow on these elements ?

This was the kind of questions I started to ask myself, because the framework didn't have any identity.

Taking lessons from Material Design, this document will serve as a listing of the guidelines that define Papillon's appearance.

**Every aspect and detail of the UI, from the size of an element, to the meaning of its shadow, will be detailed here to explain why these choices were made**

## 2. The core principle

>Content precedes design. Design in the absence of content is not design, it’s decoration.

This quotation is the core principle leading all the decisions made about Papillon UI. Without any thinking about the content, your design will be awful. That's why Papillon will be a framework focusing on highlighting the content before everything else.

### 2.1 The goal

The goal of Papillon UI is to put inside the hands of every website developper a framework with a consistent design, in order to help them create a website with a consistent and powerful identity, while still having good UI and UX.

### 2.2 The idea

The idea of Papillon UX is to **view the website as an interactive paper**.

Just imagine it like this: a website is just a white piece of paper with black texte on it, sometimes with pictures, just like a newspaper. **This is the content.** On top of this white piece of paper, some buttons and blocks are floating, which have different functions when you interact with them. **That's the UI.**

Papillon's idea is to differentiate these 2 worlds: the content and the UI.

**The content:**
* It's there to be viewed
* It's the most important part of the website
* It's flat because it's on a piece of paper

**The UI:**
* It's there to give the reader tools to browse the content
* It's there to highlight the content and not to hide it nor magnify it
* It's floating on top of the content

This way of thinking will be transcripted inside the definition of Papillon's UI, with things such as the lack of shadow on blocks that are part of the content ( it's supposed to be flat so no shadow ), while putting shadows on some buttons ( they are floating on top of the content, so the shadow is there to say that they are part of the UI and not the content ).

## 3. The guidelines

This article will talk about the guidelines of each element, explaining why the element's aspect is like that and how it sticks to the core principle of Papillon UI.

All sizes related to a text block ( padding, margin, line-height, etc. ) will be calculated from a `em` value, to follow the font size changes.

All definitions will look like this:
* **Rule name** ( *example of use* ): `rule value`

### 3.1 Sizes and margins

#### 3.1.1 Padding and margin of blocks

##### Padding

Every block ( button, text block ) must have some space between the border and the text in order to not feel cramped and to make the text more easily readable.

* Small padding ( *in a normal sized button* ): `0.5em`
* Medium padding ( *in a blockquote* ): `1em`
* Large padding ( *a popup element or a big block of text* ): `2em`

##### Margin

All blocks must be separated by some space, unless it's a block from a table or a grid layout where all blocks are sticking together.

* Small margin ( *separating the blocks inside a grid layout* ): `0.5em`
* Medium margin ( *separating two different sections of a form* ): `1em`
* Large margin: ( *separating two different categories in an article* ): `2em`

#### 3.1.2 Font size

Papillon's default font size is `16px`, but you can modify it ( it's part of the framework to be able to tweak some things like that ). The default line-height is `1.4375`, equal to `23px` for the default size font of `16px`

##### Titles

All titles ( from h1 to h6 ), will use a semibold font ( `font-weight: 500` ).

The `font-size` property will be defined depending on the website's base font size. Here are the sizes with the default base font size of `16px`:
* h1: `40px` ( *16px* * 2.5 )
* h2: `32px` ( *16px* * 2 )
* h3: `24px` ( *16px* * 1.5 )
* h4: `20px` ( *16px* + 4 )
* h5: `16px` ( *16px* * 1 )
* h6: `12px` ( *16px* - 4 )

**Small**

You can use a `small` tag to put additional information inside the title

These secondary texts will use a normally weighted font ( `font-weight: 400`) and will be slightly modified to be a little bit less visible than the title's main text:
* font-size: `80%`
* opacity: `0.75`

### 3.2 Shadows

A lot of elements won't have any shadows because Papillon is a flat framework. Shadows will only be used on certain elements under certain circumstances ( hovering a button ) to highlight said element and gives the feeling that it's floating, detached from the content.

Elements using shadows have to carefully follow the guidelines in order to have consistent shadows and to well differentiate the many plans and heights of the multiple floating elements.

#### 3.2.1 The height of the element

To calculate all the shadow's values, you firstly need to decide what will be the height of your element on the *z plan* ( the altitude at which the element is hovering from the content ).

The bigger this height, the bigger and blurrier the shadow.

For further rules declarations, this setting will be called `z-height`, and corresponds to the plan on which your element is ( 0: on paper, 1: slightly floating, 2: floating, etc. )

#### 3.2.1 The light source

To have consistent shadows, the light source must always be positionned at the same point. The light source for Papillon UI will come from the top top left, hence all shadows must have an `Y offset` equal to the `z-height` parameter, and a `x offset` equald to `2 * zèheight`
For example:
* An element on the z-plan 1: `box-shadow: 1px 2px ...`
* An element on the z-plan 3: `box-shadow: 3px 6px ...`
* etc.

#### 3.2.2 The shadow intensity

Too much shadow is ugly and looks bad, that's why Papillon's shadows won't be totally black.

The color for all shadows will be `#b2b2b2`

#### 3.2.3 The blur and spread

The shadows won't have any spread, as they need to only be slightly visible.

The blur will be equal to `6px * the z-height of the element`

#### 3.2.4 Examples

Examples of real-life values:
* A button, slightly floating on hover: `box-shadow: 1px 2px 6px 0 #949494`
* A card, hovering at higher altitude, with a bigger and blurrier shadow: `box-shadow: 3px 6px 18px 0 #949494`

### 3.3 Colors

Colors play a bif role in an interface.

Using them wisely is a good way to have a beautiful and intuitive interface

#### 3.3.1 Color palette

Papillon uses a two-tone color palette, defined by two variables `$primary-color` and `$secondary-colors`. These 2 colors are supposed to come from your logo, and will be used in various parts across the framework to create an interface sticking to your visual identity.

Some more colors need to be defined, that will also be used in various parts across the framework:
```
$grey-color
$black-color
$blue-color
$green-color
$red-color
$orange-color
```

These colors are used in the color of some elements ( `$red-color` is used on all `.danger` elements, for example ), and you can define them according to your logo and the feel you want to give to your website ( if you want flashy and excentric colors, or sober and flat ones for example ).

#### 3.3.2 Color interaction

Elements that interact with the user need to change colors when they do, it's an essential part of visual feedback. Different color modifications need to be done for each interaction, in order to stay consistent:

* Lighten the element before an action, to tell the user that further interaction with the element is possible ( for example, when the user hovers over a button, before clicking it )
* Darken the element after an action, to tell the user it was done ( for example, when the user has clicked on an element like a radio button )

### 3.4 Roundings

All elements of the UI with a clear contrats of color between the inside and the outside of the block must have round corners, in order to ease the block corners and not have a staright colored monolith as part as the UI, which could catch the eye a little bit too much.

For example, colored buttons have a small radius on their corners: `border-radius: 2px`
