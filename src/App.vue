<script setup lang="ts">
import { ref } from 'vue'
import type { Result } from '@zxing/library'

// COMPONENTS
import StreamQrcodeBarcodeReader from '@/components/StreamBarcodeReader.vue'
import InputRadio from '@/components/InputRadio.vue'

// MODE
const mode = ref<'shoot' | 'stream'>('shoot')
const itemMode = ['shoot', 'stream']

// COLOR LASER
const colorLaser = ref<'red' | 'blue' | 'green' | 'yellow' | 'white'>('red')
const itemLaser = ['red', 'blue', 'green', 'yellow', 'white']

const decode = ref<Result | undefined>(undefined)
const isLoading = ref<boolean>(false)
function onResult(data: Result | undefined): void {
  decode.value = data
}

function onLoading(loading: boolean) {
  isLoading.value = loading
}
</script>

<template>
  <!-- STREAMBARCODERESER -->
  <StreamQrcodeBarcodeReader
    :capture="mode"
    :color-laser="colorLaser"
    @onloading="onLoading"
    @result="onResult"
  />
</template>

<style lang="scss" scoped>
.phone {
  @apply h-full relative;

  & .notch-container {
    @apply absolute top-0 w-full h-[100px];

    & .notch {
      @apply w-[20vh] h-[4.25vh] my-0 mx-auto bg-[#111] rounded-b-xl;
    }
  }

  & div.content {
    @apply flex flex-col justify-center items-center min-h-screen w-[414px] border-8 border-[#111] rounded-3xl;
  }
}
</style>
