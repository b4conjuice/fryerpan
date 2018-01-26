# fryerpan 🍳
> a simple react boilerplate for single page web applications

## getting started
```shell
git clone https://github.com/dlopez807/fryerpan.git
cd fryerpan
yarn
yarn start
```
this will start a dev server using [Parcel](https://parceljs.org/), which has built in hot module replacement

## testing
```shell
yarn start-bs
```
optionally, you may also use [Browser Sync](https://browsersync.io/) for convenient testing across devices. this will open up an external url that you can access on other devices on the same network

## building
```shell
yarn build
```
this will bundle your application for production. your html, css, and js will be minified and copied to a build folder

## deploying
```shell
yarn deploy
```
this will deploy the contents of your build folder to [Surge](https://surge.sh/)

## html
* Meta tags for mobile apps
* React favicon

## css
* Sass
* [CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
* [Normalize.css](https://necolas.github.io/normalize.css/)

## javascript
* ES6
* [React](https://reactjs.org)
* async await through babel polyfill

## extra
```shell
alias clonefp='git clone https://github.com/dlopez807/fryerpan.git'
renamefp () { mv fryerpan "$1"; }
remgit () { cd "$1" && rm -rf .git; }
fryerpan () { clonefp && renamefp "$1" && remgit "$1"; }
usage: fryerpan react-app
```
