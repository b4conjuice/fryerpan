# fryerpan 🍳
> a simple react boilerplate for single page web applications

## getting started
```shell
git clone https://github.com/dlopez807/fryerpan.git
cd fryerpan
npm install
npm start
```
this will start a dev server using [Parcel](https://parceljs.org/), which has built in hot module replacement

## testing
```shell
npm run start-bs
```
alternatively, you may also use [Browser Sync](https://browsersync.io/) for convenient testing across devices. this will open up an external url that you can use to access your app on other devices on the same network

## building
```shell
npm run build
```
this will bundle your application for production. your html, css, and js will be minified and copied to a build folder

## deploying
```shell
npm run deploy
```
this will deploy the contents of your build folder to [Surge](https://surge.sh/)

## html
* Meta tags for mobile optimization
* React favicon

## css
* Sass, compiled to CSS thanks to parcel
* [CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
* [Normalize.css](https://necolas.github.io/normalize.css/)

## javascript
* ES6
* [React](https://reactjs.org)
* async await through babel polyfill

## extra
```shell
fryerpan new-project
```
use fryerpan like create-react-app to start your next project. see [this gist](https://gist.github.com/dlopez807/e5cfe4cf5ad17037b159f8aabf52027a) for more info