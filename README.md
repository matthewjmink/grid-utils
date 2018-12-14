# grid-utils
Custom grid solution using CSS grid (see: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout))

### Optional Responsive Breakpoints
All classes allow for an optional breakpoint to be specified. Breakpoints follow a mobile first approach - meaning rules will be applpied to all viewports equal to and greater than a given size.

### Bootstrap-esque (not Bootstrap dependent)
Follows [Bootstrap](http://getbootstrap.com/) v4 breakpoints and class naming conventions.

### No Bootstrap? No Problem.
This utility assumes you are using Bootstrap, but it's not necessary. If you are not using Bootstrap, you'll just need to import `grid-utils-no-bootstrap.scss` into your project instead (or `_grid-utils-config.scss` separately), since it contains necessary replacements to mixins and variables.

Usage
===

## Display as grid
Set an element's display to grid using `.d-grid`.

### `.d{-breakpoint}-grid`.

## Number of columns
Explicitly specify the column count using `.grid-{columns}`.

### `.grid{-breakpoint}-{columns}`
* `{columns}`: any number from `1` to `12`

## Gutters
Set horizontal and/or vertical gutters using `.gaps`.

### `.gaps{-breakpoint}{-direction}{-size}`
 * `{direction}` *optional*
    * `x` - left and right
    * `y` - top and bottom
    * *default is both*
 * `{size}` *optional*: 0 - 5
    * `0` - no gutter
    * `1` - `$spacer * .25`
    * `2` - `$spacer * .5`
    * `3` - `$spacer`
    * `4` - `$spacer * 1.5`
    * `5` - `$spacer * 3`
    * *default is `3`*

## Specify Column/Row Position
Used mainly to support IE/Edge, which don't have autoplacement for CSS Grid. Column and row numbers can be specified using `.gc-{columnNumber}` and `.gr-{rowNumber}` respectively.
### `.gc{-breakpoint}-{columnNumber}`
* `{columnNumber}`: any number from `1` to `12`
### `.gr{-breakpoint}-{rowNumber}`
* `{rowNumber}`: any number from `1` to `$max-grid-rows`

## Span Columns/Rows
Individual grid elements can span multiple columns and/or rows using `.gc-span-{number}` and `.gc-span-{number}` respectively.
### `.gc{-breakpoint}-span-{number}`
* `{number}`: any number from `1` to `12`
### `.gr{-breakpoint}-span-{number}`
* `{number}`: any number from `1` to `12`

---

Custom Config
===
### `$max-grid-rows`
* *default: `100`*
For specifying or spanning grid rows (probably to support IE/Edge), this utility outputs enough classes to support 100 rows. If you need more or want less (to reduce file size), you can override the `$max-grid-rows` variable in your config.
