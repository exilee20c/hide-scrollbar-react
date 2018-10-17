# hide-scrollbar-react
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fexilee20c%2Fhide-scrollbar-react.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fexilee20c%2Fhide-scrollbar-react?ref=badge_shield)

Wrap this module around your kind of viewable components, and it's scrollbar will automately disappear, and appear when you move your scroll position. It can only supports non-FireFox browsers because I have no found the way to hide a basically given scrollbar's css style.

# USECASE

```
import Scrollable from 'hide-scrollbar-react';
```
You don't have to import Scrollable exactly, but import WhatDoYouWantToName because 'hide-scrollbar-react' exports only one "default".

in render( ) method
```
<Scrollable>
  <!-- container's height should be '100%' or ensure that containers doesn't scroll area so 'hide-scrollbar-react' will has it's own scroll, I recommend give height: 100vh; attribute to owner of rendering 'hide-scrollbar-react' -->
  <!-- what do you want to -->
  <!-- no matter it has scroll or no-scroll -->
  <!-- It does not support firefox -->
  <!-- It does not support scroll-x, only scroll-y -->
</Scrollable>
```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fexilee20c%2Fhide-scrollbar-react.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fexilee20c%2Fhide-scrollbar-react?ref=badge_large)