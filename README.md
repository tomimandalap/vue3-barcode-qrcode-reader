# Vue3 Barcode and QR code scanner

[![npm version](https://badgen.net/npm/v/vue-barcode-reader)](https://www.npmjs.com/package/vue3-barcode-qrcode-reader)

A Vue.js set of components to scan barcodes and QR codes.

## Benefits

- Can scan both barcodes and QR codes
- Uses [ZXing](https://github.com/zxing-js/library) ("zebra crossing"), an open-source, multi-format 1D/2D barcode image processing library implemented in Java, with ports to other languages.

## Demo

[Demo repository](https://github.com/olefirenko/vue-barcode-reader-example) | [Codesandbox](https://codesandbox.io/s/vue-barcode-reader-demo-guj3f) | [Vercel](https://vue-barcode-reader-example-2iiz1fhbf-olefirenko.vercel.app/) | [Netlify](https://stupefied-meitner-58f299.netlify.app/)

Or you can check the library in action on the website [parceltrackingapp.com](https://parceltrackingapp.com/en).

## Installation

The easiest way to use Vue Barcode Reader is to install it from **npm** or **yarn**.

```sh
npm install vue3-barcode-qrcode-reader --save
```

Or

```sh
yarn add vue3-barcode-qrcode-reader
```

### Vue 2.0 support

For Vue 2.0 compatible version please use the [vue-barcode-reader](https://www.npmjs.com/package/vue-barcode-reader).

## Usage

The Vue3 Barcode and QR code scanner works out of the box by just including it.

### Using Video Camera

Once a stream from the users camera is loaded, it's displayed and continuously scanned for barcodes. Results are indicated by the decode event.

```js
import StreamQrcodeBarcodeReader from 'vue-barcode-reader'
```

In your template you can use this syntax:

```html
<StreamQrcodeBarcodeReader
  capture="shoot"
  @loaded="onLoaded"
  @onloading="onLoading"
  @result="onResult"
/>
```

## Events

The library emits the following events:

### loaded

When the libraty is loaded and the camera is ready to scan

## onloading

for get value loading from component.

```js
..your code
const isLoading = ref(false)
function onLoading(loading) {
isLoading.value = loading
}
```

```ts
..your code
const isLoading = ref<boolean>(false)
function onLoading(loading: boolean) {
isLoading.value = loading
}
```

### result

When a barcode or QR code is scanned. The result is passed as a parameter to the event handler. The result is the object with the following properties:

```js
//example
{
    "text": "9578545203541",
    "rawBytes": null,
    "numBits": 0,
    "resultPoints": [
        {
            "x": 29.5,
            "y": 1016
        },
        {
            "x": 394.5,
            "y": 1016
        }
    ],
    "format": 7,
    "timestamp": 1700195512963,
    "resultMetadata": null
}
```

If you want to implement it in your code, you can follow this example:

```js
...your code
const resultScan = ref(undefined)
function onResult(result) {
    resultScan.value = result
}
```

```html
<!-- result automaticly "text": "9578545203541" not object like example on top -->
<p>{{ resultScan }}</p>
<!-- note: if you want properties like the example above, you can assign the properties one by one in the variable-->
```
