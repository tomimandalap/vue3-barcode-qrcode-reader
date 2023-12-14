<script setup lang="ts">
import { ref } from 'vue'
import type { Result } from '@zxing/library'

// COMPONENTS
import StreamQrcodeBarcodeReader from '@/components/StreamBarcodeReader.vue'

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

  <!-- PHONE VIEW -->
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

        <!-- STREAMBARCODERESER -->
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
  <!-- END PHONE VIEW -->
</template>
