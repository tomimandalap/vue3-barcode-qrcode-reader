# Vue3 Barcode and QR code scanner

[![npm version](https://badgen.net/npm/v/vue-barcode-reader)](https://www.npmjs.com/package/vue3-barcode-qrcode-reader)

A Vue.js set of components to scan barcodes and QR codes.

## Benefits

- Can scan both barcodes and QR codes
- Uses [ZXing](https://github.com/zxing-js/library) ("zebra crossing"), an open-source, multi-format 1D/2D barcode image processing library implemented in Java, with ports to other languages.

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
import { StreamQrcodeBarcodeReader, IconCameraVue } from 'vue-barcode-reader'
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

### Implementation with slot

```html
<StreamQrcodeBarcodeReader
  capture="shoot"
  @onloading="onLoading"
  @result="onResult"
  class="rounded-2xl"
>
  <template #actions="{ onCanPlay, isReset, onReset }">
    <button class="bg-green-300 px-6 py-1 rounded-md" @click="onCanPlay">Stream</button>
    <button v-if="isReset" class="bg-blue-300 px-6 py-1 rounded-md ms-2" @click="onReset()">
      Reset
    </button>
  </template>

  <template #action-stop="{ onCanStop }">
    <div class="container-btn-stop">
      <button class="bg-pink-300 px-6 py-1 rounded-md" @click="onCanStop()">Stop</button>
    </div>
  </template>

  <template #action-facemode="{ onChangeFacemode }">
    <div class="container-btn-facemode">
      <button
        class="bg-red-300 w-10 h-10 p-2 inline-flex justify-center items-center rounded-full"
        @click="onChangeFacemode"
      >
        <IconCameraVue />
      </button>
    </div>
  </template>
</StreamQrcodeBarcodeReader>
```

## Props

| Parameter |        value        | Type | Description   |
| :-------: | :-----------------: | :--: | ------------- |
|  capture  | "shoot" or "stream" | emun | Props capture |

### shoot

When the barcode or QR code is successfully scanned, the scanning process will stop.

### strean

When the barcode or QR code is successfully scanned, the scanning process will not stop.

---

## Slot

|    Parameter     |             value              |         Type          | Description                                                                                                                                    |
| :--------------: | :----------------------------: | :-------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
|     #actions     | {onCanPlay, isReset, onReset } | func & boolean & func | `onCanPlay` func for start stream camera & `isReset` state for handle show or hide button reset & `onReset` func for handle reset value Result |
|   #action-stop   |          {onCanStop}           |         func          | function for hanlde stop stream camera                                                                                                         |
| #action-facemode |       {onChangeFacemode}       |         func          | function for hanlde switch camera on mobile                                                                                                    |

## Events

The library emits the following events:

| Parameter |       type        |
| :-------: | :---------------: |
|  loaded   |     function      |
| onloading | function(payload) |
|  result   | function(payload) |

### loaded

When the libraty is loaded and the camera is ready to scan

## onloading

for get value loading from component.

#### .js

```js
const isLoading = ref(false)
function onLoading(loading) {
  isLoading.value = loading
}
```

#### .ts

```ts
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

### .js

```js
const resultScan = ref(undefined)
function onResult(result) {
  resultScan.value = result
}
```

### .ts

```ts
import { Result } from 'vue-barcode-reader'
const resultScan = ref<Result | undefined>(undefined)
function onResult(result: Result | undefined) {
  resultScan.value = result
}
```

```html
<!-- result automaticly "text": "9578545203541" not object like example on top -->
<p>{{ resultScan }}</p>
<!-- note: if you want properties like the example above, you can assign the properties one by one in the variable-->
```
