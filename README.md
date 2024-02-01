# TwicPics Components + React Native

This project is a demonstration project of [TwicPics Components](https://www.twicpics.com/docs/components/react-native?utm_source=github&utm_medium=organic&utm_campaign=components) using [React Native](https://reactnative.dev/).

It exemplifies the blog post [Seamlessly Integrating Images and Videos into Your React Native Projects](https://www.twicpics.com/blog/components-react-native).

## Overview

### What is TwicPics?

[TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) is a **Responsive Media Service Solution** (SaaS) that enables **on-demand responsive image & video generation**.

With TwicPics, developers only deal with high-resolution versions of their media while end-users receive **optimized, perfectly sized, device-adapted** versions **delivered from a server close to them**.

TwicPics acts as a **proxy**. It retrieves your master file — from your web server, cloud storage, or DAM — and generates a **device-adapted** version with **best-in-class compression**, delivered directly to the end-user from the **closest available delivery point**.

### What is TwicPics Components?

TwicPics Components is a __collection of components__ that make it dead easy to unleash the power of [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) in your own projects with optimized _Cumulative Layout Shift_ (CLS), low-quality image placeholders, and lazy loading out of the box.

`<TwicImg>` is a drop-in replacement for `<Image>` component.

```html
<!-- Before -->
<Image source={{uri: "https://assets.twicpics.com/examples/football.jpg"}} style={{width: 400, height: 400}}/>

<!-- After -->
<TwicImg src="football.jpg" />
```

`<TwicVideo>` is a component for seamless playback of [videos optimized with TwicPics](https://www.twicpics.com/docs/topics/video-optimization).

```html
<TwicVideo src="path/to/your/video"/>
```

### Platform Compatibility

| Android | iOS | Web |
| :-: | :-: | :-: |
| [x] | [x] | [x] |

## How to run

```shell
yarn && yarn start
```

## Examples

All the examples proposed in this project are located in the `pages` directory.
Feel free to inspire yourself from these different use cases to unleash the power of [TwicPics](https://www.twicpics.com/) in your own projects.

## Questions and feedback

Fell free to submit an [issue](https://github.com/TwicPics/components/issues) or to ask us anything by dropping an email at [support@twic.pics](mailto:support@twic.pics).

## Licence

[![License][license-image]][license-url]

[license-image]: https://img.shields.io/npm/l/@twicpics/components.svg?style=flat-square
[license-url]: https://raw.githubusercontent.com/twicpics/components/master/LICENSE
