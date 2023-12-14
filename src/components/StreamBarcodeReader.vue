<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { onMounted, ref, type PropType, onBeforeUnmount, computed, watch } from 'vue'
import IconCamera from './IconCamera.vue'

import { BrowserMultiFormatReader, Exception } from '@zxing/library'

import type { BrowserAztecCodeReader, Result } from '@zxing/library'

const scanner = ref()
const isLoading = ref<boolean>(false)
const isReset = ref<boolean>(false)
const facingMode = ref(0)

const codeReader = ref<BrowserAztecCodeReader>(new BrowserMultiFormatReader())
const isMediaStreamAPISupported = ref<boolean>(
  navigator && navigator.mediaDevices && 'enumerateDevices' in navigator.mediaDevices
)

const RESULT = ref<Result | undefined>(undefined)
const { width: WIDTH, height: HEIGHT } = useWindowSize()

const porps = defineProps({
  capture: {
    type: String as PropType<'shoot' | 'stream'>,
    default: 'stream'
  }
})

// EMITS
const emits = defineEmits<{
  (e: 'onloading', value: boolean): void
  (e: 'loaded', value: Event): void
  (e: 'result', value: Result | undefined): void
}>()

onBeforeUnmount(() => {
  codeReader.value.reset()
})

onMounted(async () => {
  if (!isMediaStreamAPISupported.value) {
    throw new Exception('Media Stream API is not supported')
  }
})

const modeClassContainer = computed<string>(() => {
  return isLoading.value ? 'bg-black' : 'bg-transparent'
})

/*
 * Composable isCaptureMode for check prop capture is shoot or stream
 * if value shoot to triger func onCanStop in func startStreaming()
 */
const isCaptureMode = computed<boolean>(() => {
  return porps.capture === 'shoot'
})

watch(WIDTH, () => onCanStop())

function gcd(a: number, b: number): number {
  return b ? gcd(b, a % b) : a
}
function aspectRatio(
  width: number,
  height: number
): {
  widht: number
  height: number
} {
  const divisor = gcd(width, height)

  return {
    widht: width / divisor,
    height: height / divisor
  }
}

/*
 * FUNC START STREAM VIDEO
 */
function startStreaming(): void {
  const ratioCalc: { widht: number; height: number } = aspectRatio(WIDTH.value, HEIGHT.value)
  const deviceMobile =
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
      navigator.userAgent
    )

  /*
   * Scalculation ratio screen
   */
  const userAgentData = (navigator as any).userAgentData
  let aspectRatioCalc = ratioCalc.widht / ratioCalc.height
  if (userAgentData && userAgentData.mobile) {
    aspectRatioCalc = ratioCalc.height / ratioCalc.widht
  } else {
    if (navigator.maxTouchPoints === 1) {
      aspectRatioCalc = ratioCalc.widht / ratioCalc.height
    } else if (deviceMobile) {
      aspectRatioCalc = ratioCalc.height / ratioCalc.widht
    }
  }

  const facingmode = facingMode.value === 0 ? 'environment' : 'user'

  /*
   * SET aspect ration in variable constraints
   */
  let constraints: {
    audio: boolean
    video: {
      facingMode: 'environment' | 'user'
      aspectRatio: number
    }
  } = {
    audio: false,
    video: {
      facingMode: facingmode,
      aspectRatio: aspectRatioCalc
    }
  }

  /*
   * decodeFromConstraints
   * In one attempt, tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
   */
  codeReader.value.decodeFromConstraints(constraints, scanner.value, (result, err) => {
    if (!err) {
      const data = result as Result
      RESULT.value = data
      emits('result', data)

      // when capture mode is shoot
      if (isCaptureMode.value) return onCanStop(isCaptureMode.value)
    }
  })
}

/*
 * FUNC RESET
 * STATE FALSE FOR RESET
 * STATE TRUE FOR HANLDE EXISTING VALUE ON EMIT
 */
function onReset(state: boolean = false): void {
  codeReader.value.reset()
  isReset.value = state
  isLoading.value = false
  emits('onloading', isLoading.value)

  if (state) return

  RESULT.value = undefined
  emits('result', RESULT.value)
}

/*
 * FUNC ONCANPLAY
 */
function onCanPlay(): void {
  onReset()
  startStreaming()
  scanner.value.oncanplay = (event: Event) => {
    isReset.value = false
    isLoading.value = true
    emits('onloading', isLoading.value)
    emits('loaded', event)
  }
}

/*
 * FUNC STOP STREAM VIDEO
 * ADDING PARAMS STATE BOOLEAN FOR TO SEND ON FUNC onReset
 */
function onCanStop(state: boolean = false): void {
  const videos = scanner.value?.srcObject?.getTracks() as any

  if (!videos) return

  if (videos && videos.length) {
    videos.forEach((item: any) => {
      item.stop()
    })
  }

  onReset(RESULT.value ? true : state)
}

function onChangeFacemode() {
  facingMode.value += 1
  if (facingMode.value % 2 === 0) {
    facingMode.value = 0
  }

  setTimeout(() => {
    onCanStop()
  }, 300)
  setTimeout(() => {
    onCanPlay()
  }, 500)
}
</script>

<template>
  <div :class="['scanner__container', modeClassContainer]">
    <div v-show="isLoading" class="content">
      <video ref="scanner" poster="data:image/gif,AAAA"></video>
    </div>

    <template v-if="isLoading">
      <slot name="action-stop" :onCanStop="onCanStop">
        <div class="container-btn-stop">
          <button class="btn-stop" @click="onCanStop()" />
        </div>
      </slot>

      <slot name="action-facemode" :onChangeFacemode="onChangeFacemode">
        <div class="container-btn-facemode">
          <button class="btn-facemode" @click="onChangeFacemode">
            <IconCamera />
          </button>
        </div>
      </slot>
    </template>

    <template v-else>
      <slot name="actions" :onCanPlay="onCanPlay" :isReset="isReset" :onReset="onReset">
        <button type="button" class="btn-stream" @click="onCanPlay">Stream</button>

        <button v-if="isReset" type="button" class="btn-reset" @click="onReset()">Reset</button>
      </slot>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.scanner {
  &__container {
    @apply relative;

    & .content {
      @apply w-full min-h-screen flex justify-center items-center;

      & video {
        @apply w-full h-full;
      }
    }

    & .container-btn-stop {
      @apply absolute top-[calc(100%-10%)] left-[50%] m-auto;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);

      & button.btn-stop {
        @apply ring-4 ring-white border-4 border-black rounded-full w-10 h-10 transition-all delay-75;
        -webkit-animation: blink 1s infinite;
        animation: blink 1s infinite;

        @-webkit-keyframes blink {
          0% {
            @apply bg-red-400;
          }

          50% {
            @apply bg-red-500;
          }

          100% {
            @apply bg-red-400;
          }
        }

        @keyframes blink {
          0% {
            @apply bg-red-400;
          }

          50% {
            @apply bg-red-500;
          }

          100% {
            @apply bg-red-400;
          }
        }

        &:hover {
          @apply bg-red-500 border-4 border-black;
          animation: none;
        }
      }
    }

    & .container-btn-facemode {
      @apply absolute top-[calc(100%-10%)] left-[calc(100%-85%)] m-auto;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);

      & button.btn-facemode {
        @apply ring-4 ring-white inline-flex justify-center items-center text-white bg-gray-800 rounded-full w-10 h-10 p-1.5 transition-all delay-75;

        &:hover {
          @apply bg-black ring-4 ring-gray-200;
        }
      }
    }

    & .btn-stream {
      @apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5;
    }

    & .btn-reset {
      @apply focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 ms-2;
    }
  }
}
</style>
