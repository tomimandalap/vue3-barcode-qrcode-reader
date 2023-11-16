<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
    required: true
  },
  value: {
    type: String,
    default: '',
    required: true
  },
  targetId: {
    type: String,
    default: '',
    required: true
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const vModel = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emits('update:modelValue', value)
  }
})
</script>

<template>
  <div>
    <input
      v-model="vModel"
      :id="targetId"
      type="radio"
      :value="value"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
    />
    <label :for="targetId" class="ms-1">{{ value }}</label>
  </div>
</template>
