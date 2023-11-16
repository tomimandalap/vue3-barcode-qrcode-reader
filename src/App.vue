<script setup lang="ts">
import { ref } from 'vue'
import type { Result } from '@zxing/library'

// COMPONENTS
import StreamQrcodeBarcodeReader from '@/components/StreamBarcodeReader.vue'
import InputRadio from '@/components/InputRadio.vue'

// MODE
const mode = ref<'shoot' | 'stream'>('shoot')
const itemMode = ['shoot', 'stream']

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
  <div class="container mx-auto py-10">
    <!-- MODE -->
    <div class="flex md:flex-row flex-col justify-center items-center">
      <h5 class="md:text-lg text-base font-medium me-2">Select mode:</h5>

      <InputRadio
        v-for="item in itemMode"
        :key="item"
        v-model="mode"
        :value="item"
        :target-id="`mode-${item}`"
        class="me-2"
      />
    </div>
    <!-- END MODE -->

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
            <h2 class="text-base text-red-500 capitalize mb-4">mode: {{ mode }}</h2>
          </template>

          <!-- STREAMBARCODERESER -->
          <StreamQrcodeBarcodeReader
            :capture="mode"
            @onloading="onLoading"
            @result="onResult"
            class="rounded-lg"
          />
        </div>
      </div>
    </div>
    <!-- END PHONE VIEW -->
  </div>
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
