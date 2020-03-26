# CSS / SCSS Style Guide

To use those, make sure you have stylelint (https://www.npmjs.com/package/stylelint) package installed and stylelint.config.js copied at the root of the project.

There are some rules in place that are undocumented here. They keep you from writing invalid css, using invalid media queries etc.     


###Should I use [BEM] (http://getbem.com/) or not? 

If you're the one who starts the project, it's your choice. This guide does not interfere with it. <br>
It's the responsibility of the future developers to adhere to naming conventions already in place.

### Formatting

**stylelint: <br>
at-rule-name-space-after <br>
              block-opening-brace-space-before  <br>
              block-opening-brace-newline-after  <br>
              block-closing-brace-newline-before**

>Those rules will enforce you write clean CSS like:

```scss
    .class-name {
        color: black;
    }
```
       
### Maximum nesting 3-4 levels
   
**stylelint: max-nesting-depth**

>Your rules are getting way to specific above those levels and will never be reused. <br>
 It's also difficult to read when stylesheets become long.
    
```scss
    .class {
        .some-class {
            .getting-deep {
                stop-here {
                
                }
            }
        }
    }
```

### No ID selectors

**stylelint: selector-max-id**
>Your rules can not be reused this way.
    
```scss
#not-cool {
    display: none
}
```

### Prefer dashed named variables for scss

>Your variables names should also contain the group they belong to as the first word.
    
```scss 
$font-size-subtitle: 18px;
$color-darkgray: #2f2f2f;
```
   
### Use z-index with variables
    
>It's recommended that you assign your z-index values to variables with names that give a hint of the value and intent. <br>
    Easier to keep track what's on top of what, rather than using magic numbers.
    
```css
    $z-index-navmenu: 10;
    $z-index-alert: 100;
    $z-index-popup: 1000;
```
      
### Comments
Prefer one line comments for properties/classes with a space between slashes and first word.
```
   // comment
```
Prefer block comments for explanations at the beggining of the module. (if necessary)
```
 /* block comment 
    probably multiline
 */    
```

    
### Javascript Hooks
    
Even if you are not using [BEM] (http://getbem.com/), you should **avoid binding to the same class in both your JavaScript and CSS.
    Conflating the two often leads to, at a minimum, time wasted during refactoring when a developer must cross-reference each class they are changing, and at its worst, developers being afraid to make changes for fear of breaking functionality.
    JS hooks should use a camelCased name prefixed with js-.
    
```css
    <button class="js-startSlideshow"> </button>
```
  
