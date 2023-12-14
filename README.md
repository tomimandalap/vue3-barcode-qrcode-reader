# Vue3 Barcode and QR code scanner

[![npm version](https://badgen.net/npm/v/vue-barcode-reader)](https://www.npmjs.com/package/vue3-barcode-qrcode-reader)

A Vue.js set of components to scan barcodes and QR codes.

## Benefits

- Can scan both barcodes and QR codes
- Uses [ZXing](https://github.com/zxing-js/library) ("zebra crossing"), an open-source, multi-format 1D/2D barcode image processing library implemented in Java, with ports to other languages.

## Demo

[Codesandbox](https://codesandbox.io/p/github/tomimandalap/demo-barcode-qrcode-reader/development?import=true&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clp2gacpe00073b6fpbslshum%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clp2gacpd00033b6fjka7i4x5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clp2gacpe00053b6fymxrx9xg%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clp2gacpe00063b6fuw7xyxbf%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B40%252C60%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clp2gacpd00033b6fjka7i4x5%2522%253A%257B%2522id%2522%253A%2522clp2gacpd00033b6fjka7i4x5%2522%252C%2522activeTabId%2522%253A%2522clp3hyo34008g3b6fjmxre5jr%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522id%2522%253A%2522clp3hyo34008g3b6fjmxre5jr%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clp2gacpe00063b6fuw7xyxbf%2522%253A%257B%2522id%2522%253A%2522clp2gacpe00063b6fuw7xyxbf%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clp2gacpe00053b6fymxrx9xg%2522%253A%257B%2522id%2522%253A%2522clp2gacpe00053b6fymxrx9xg%2522%252C%2522activeTabId%2522%253A%2522clp2gacpe00043b6fnm1w7l5z%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clp2gacpe00043b6fnm1w7l5z%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clp3i2462000zefif271s1ysz%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clp2gadsd007v3b6fs07gaswc%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A11.891534391534393%257D)
<br />
[Repository](https://github.com/tomimandalap/demo-barcode-qrcode-reader)

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
import { StreamQrcodeBarcodeReader, IconCameraVue } from 'vue3-barcode-qrcode-reader'
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

## Implementation use Ref component

### Script

```ts
<script setup lang="ts">
import { ref } from 'vue'
import { type Result, StreamQrcodeBarcodeReader } from 'vue3-barcode-qrcode-reader'

const decode = ref<Result | undefined>(undefined)
const isLoading = ref<boolean>(false)
function onResult(data: Result | undefined): void {
  decode.value = data
}

function onLoading(loading: boolean) {
  isLoading.value = loading
}

// define ref for component
const refCamera = ref<InstanceType<typeof StreamQrcodeBarcodeReader> | null>(null)

function handleOnCanPlay() {
  refCamera.value?.onCanPlay()
}

function handleOnReset() {
  refCamera.value?.onReset()
}

function handleFacemode() {
  refCamera.value?.onChangeFacemode()
}

function handleOnCanStop() {
  refCamera.value?.onCanStop()
}
</script>
```

### HTML

```html
<template>
  <div class="flex justify-center items-center mt-10">
    <template v-if="isLoading">
      <button class="bg-yellow-300 px-6 py-1 rounded-md me-4" @click="handleFacemode">
        Facemode
      </button>
      <button class="bg-red-300 px-6 py-1 rounded-md" @click="handleOnCanStop">Stop</button>
    </template>

    <template v-else>
      <button class="bg-green-300 px-6 py-1 rounded-md" @click="handleOnCanPlay">Stream</button>

      <button v-if="decode" class="bg-blue-300 px-6 py-1 rounded-md" @click="handleOnReset">
        Reset
      </button>
    </template>
  </div>

  <div class="flex flex-col items-center justify-center mt-6">
    <pre>Result:{{ decode }}</pre>

    <div class="phone mt-6">
      <div class="notch-container">
        <div class="notch"></div>
      </div>

      <div class="content">
        <template v-if="!isLoading">
          <h1 class="text-xl mb-2">Reader Barcode & QRCode</h1>
          <h2 class="text-base text-red-500 capitalize mb-4">mode: shoot</h2>
        </template>

        <StreamQrcodeBarcodeReader
          ref="refCamera"
          capture="shoot"
          show-on-stream
          @onloading="onLoading"
          @result="onResult"
        />
      </div>
    </div>
  </div>
</template>
```

## Props

|   Parameter    |        value        |  Type   | Description                                                                                             |
| :------------: | :-----------------: | :-----: | ------------------------------------------------------------------------------------------------------- |
| show-on-stream |    true or false    | Boolean | Props for show or hide button stream if you want implementation use Ref component or maybe another case |
|    capture     | "shoot" or "stream" |  emun   | Props capture                                                                                           |

### shoot

When the barcode or QR code is successfully scanned, the scanning process will stop.

### stream

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
import type { Result } from 'vue-barcode-reader'
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
