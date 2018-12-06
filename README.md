[![npm-badge]][npm]
[![npm-dm-badge]][npm-dm]
[![npm-size-badge]][npm-size]
[![build-badge]][build]
[![Coverage Status](https://coveralls.io/repos/github/exilee20c/hide-scrollbar-react/badge.svg?branch=master)](https://coveralls.io/github/exilee20c/hide-scrollbar-react?branch=master)
[![FOSSA Status Shield](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fexilee20c%2Fhide-scrollbar-react.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fexilee20c%2Fhide-scrollbar-react?ref=badge_shield)
[![MIT LISENCE](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/exilee20c/hide-scrollbar-react/blob/master/LICENSE)


# hide-scrollbar-react

Wrap this module around your kind of viewable components, and it's scrollbar will automately disappear, and appear when you move your scroll position. It can only supports non-FireFox browsers because I have no found the way to hide a basically given scrollbar's css style.

## usecase

### import 
```
import Scrollable from 'hide-scrollbar-react';
```

You don't have to import Scrollable exactly, but import WhatDoYouWantToName because 'hide-scrollbar-react' exports only one "default".
in render( ) method

### render() { ... }

```
<Scrollable>
  <!-- container's height should be '100%' or ensure that containers doesn't scroll area so 'hide-scrollbar-react' will has it's own scroll, I recommend give height: 100vh; attribute to owner of rendering 'hide-scrollbar-react' -->
  <!-- what do you want to -->
  <!-- no matter it has scroll or no-scroll -->
  <!-- It does not support firefox -->
  <!-- It does not support scroll-x, only scroll-y -->
</Scrollable>
```

[npm]: https://www.npmjs.com/package/hide-scrollbar-react
[npm-badge]: https://img.shields.io/npm/v/hide-scrollbar-react.svg
[npm-dm]: https://npmcharts.com/compare/hide-scrollbar-react?minimal=true
[npm-dm-badge]: https://img.shields.io/npm/dm/hide-scrollbar-react.svg
[npm-size]: https://packagephobia.now.sh/badge?p=hide-scrollbar-react
[npm-size-badge]: https://badgen.now.sh/badge/install%20size/63.2%20kB/44CC11
[build-badge]: https://img.shields.io/travis/exilee20c/hide-scrollbar-react/master.png?style=flat-square
[build]: https://travis-ci.org/exilee20c/hide-scrollbar-react

## License

[![FOSSA Status Large](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fexilee20c%2Fhide-scrollbar-react.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fexilee20c%2Fhide-scrollbar-react?ref=badge_large)
