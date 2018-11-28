# letter-spacing

[![npm version](https://img.shields.io/badge/npm-1.0.8-brightgreen.svg)](https://www.npmjs.org/package/letter-spacing)
![build status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![code coverage](https://img.shields.io/badge/coverage-9001%25-brightgreen.svg)
![install size](https://img.shields.io/badge/install_size-0.01TiB-brightgreen.svg)
![npm downloads](https://img.shields.io/badge/downloads-300_M%2fm-brightgreen.svg)
![stupid](https://img.shields.io/badge/stupid-yes-brightgreen.svg)

Add letter spacing to strings, for the browser and node.js. Synchronous or with Promises.

## Features

- Easy to use npm module to add letter spacing to strings with configurable spacing width
- Various variants of spacing, including a 2D version
- Promisified method versions for modern codebases
- Secure and trusted
- Meets the ideals of code-reuse and dependency management
- Comes with guarantees (see below)

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | lol ❌ |

For illustration purposes only.

## Installing

Being sane:

```bash
$ yarn add letter-spacing
```

Using npm:

```bash
$ npm install letter-spacing
```

Using cdn:

```
Coming soon
```

## Example

```js
const {spaced} = require('letter-spacing')

let example = 'YOU PUT AT RISK MILLIONS OF PEOPLE'
process.stdout.write(spaced(example))
```

Result:

```
Y O U   P U T   A T   R I S K   M I L L I O N S   O F   P E O P L E
```

## letter-spacing API

### Synchronous Methods

##### spaced(str, [spacing=1])

```js
spaced('yes, even webscale', 2)
```

```
y  e  s  ,     e  v  e  n     w  e  b  s  c  a  l  e
```

##### spacedUp(str, [spacing=1])

Space the text and convert it to uppercase.

```js
spacedUp('code level x10')
```

```
C O D E   L E V E L   X 1 0
```

#### spacedCake(str)

Print the text as a nice box.

```js
spacedCake('accidentally quadratic')
```

```
a c c i d e n t a l l y   q u a d r a t i c
c                                         i
c                                         t
i                                         a
d                                         r
e                                         d
n                                         a
t                                         u
a                                         q
l                                          
l                                         y
y                                         l
                                          l
q                                         a
u                                         t
a                                         n
d                                         e
r                                         d
a                                         i
t                                         c
i                                         c
c i t a r d a u q   y l l a t n e d i c c a
```

#### spacedCube(str)

Print the text as a cube.

```js
spacedCube('WILL IT BLEND')
```

```
W I L L   I T   B L E N D
I                       N N
L                       E   E
L                       L     L
                        B       B
I                                  
T                       T           T
                        I             I
B                                        
L                       L                 L
E                       L                   L
N                       I                     I
D N E L B   T I   L L I W                       W
  N                       I                     I
    E                       L                   L
      L                       L                 L
        B                                        
                                  I             I
            T                       T           T
              I                                  
                                        B       B
                  L                       L     L
                    L                       E   E
                      I                       N N
                        W I L L   I T   B L E N D
```

##### decaps(str, [spacing=1])

Reverses the string before spacing.

```js
decaps('lol')
```

```
l o l
```

### Promised methods

Welcome to the promised land. The functions above are also available
in promised versions:

##### spacedPromise(str, [spacing=1])
##### spacedUpPromise(str, [spacing=1])
##### spacedCakePromise(str)
##### spacedCubePromise(str)
##### decapsPromise(str, [spacing=1])

Example:

```js
spacedPromise('some text').then((str=>console.log(str)))
```

```js
let str = await spacedPromise('some other text')
```

## Guarantees

I guaranty the following as soon as this package is required by lots of other packages:

* I will not pass over this repository to someone unknown with no credibility from china (or for the matter of fact, every other country) when i'm no longer interested in this
* I will not delete this package when npmjs hurts my feelings
* If there will be minified code in the package as distributed on npmjs it will come from the same source code as in this repository
* There is no obfuscated code which tries to decrypt some fetched crypted js and then executes it under specific circumstances
* I will not try to mitigate my terrible mistake of not buying bitcoins when they were like 100000 for 5 Euro by stealing your precious cryptocurrency

This guarantee will always be valid until the exact moment. Void where prohibited or when I change my mind.


## Resources

* [Changelog](https://github.com/julijane/letter-spacing/commits)
* Code of Conduct (coming soon)

## Credits

letter-spacing is inspired by [await-sleep](https://github.com/sqren/await-sleep). Ultimately letter-spacing is an effort to provide a `await-sleep`-like one liner(s) module for use outside of sanity. This README was adopted from axios, by the way. Some other inspirations were left-pad, event-stream, flatmap-stream and /r/programmingcirclejerk.

## License

MIT

## If you didn't got it by now

This package is meant as a joke. If you seriously consider using this in one of
your projects, you should be banned 5 meters from every device which can be
programmed, including your microwave oven.

Read these:

* [I’m harvesting credit card numbers and passwords from your site. Here’s how.](https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5)
* [NPM & left-pad: Have We Forgotten How To Program?](https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/)
* [I don't know what to say](https://github.com/dominictarr/event-stream/issues/116)

The point is: Don't blindly add random npm packages, especially if they contain code 
you could easily duplicate into your own project like the oneliners from this project.
