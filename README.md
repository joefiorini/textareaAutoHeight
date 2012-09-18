# textareaAutoHeight

### Background

I know there are already n+1 jQuery plugins that handle autosizing textareas. It's a boring, solved problem.

#### Or is it?

In our search we couldn't find any good plugins that allowed us to very subtly animate the textarea changing. jQuery.autoheight solves exactly that problem.

#### Old, crappy and out-dated... I mean, not animated, bleh.

![A textarea that does not animate the change in height](https://dl.dropbox.com/u/2415854/textarea-not-animated.gif)

#### Animated, ain't it purdy?

![A textarea that subtly animates the change in height](https://dl.dropbox.com/u/2415854/textarea-animated.gif)

### Usage

Grab both `jquery.textareaAutoHeight.js` and `jquery.fieldselection.js` and put them wherever you keep your vendored javascripts.

In your code use some selector for textareas that you want to autosize and call `textareaAutoHeight` on them like so:

```javascript
  $("textarea[autosize=true]").textareaAutoHeight();
```

And that's it!

### Bonus!!!

And you thought you just came here for a Javascript plugin, didn't you? Here's the CSS snippet I use to animate this (using SCSS & Compass's CSS3 mixins):

```scss
  @include transition(height 50ms linear);
```

It really couldn't be any simpler.

### Contribute

You might be asking yourself how you can contribute to such an awesome project. Look no further, here's your answer:

1. Open an issue demonstrating the problem with a clear use case (what did you do, what did you expect to happen, what actually happened?) - Gist, [CodePen](http://www.codepen.io) or [jsfiddle](http://www.jsfiddle.net) happily accepted
2. Fix the issue you found and open a pull request
3. Describe your fix and why you made any changes unrelated to the fix

### Known Issues

If you __really__ want to contribute, here's a good place to start:

1. Caret positioning is probably messed up in IE - I did my best to maintain cross-browser support but haven't had the chance to check in IE yet. If anyone is up to the challenge, please try inserting/deleting text at arbitrary positions throughout the textarea and see if it works or breaks.
2. Performance? It stills feels a tiny bit sluggish.


### Double Plus Bonus

And for reading this all the way through, your reward is a rainbow pooping unicorn. Aren't you lucky?

![This is a picture of a unicorn pooping a rainbow. You are probably lucky you can't see it.](https://pbs.twimg.com/media/A3AIBhaCAAA7d2Y.jpg:large)
