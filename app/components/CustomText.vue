<template>
  <span v-html="formattedText"> </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const formattedText = computed(() => {
  return props.text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')     // Bold with **text**
    .replace(/__(.*?)__/g, '<u>$1</u>')                   // Underline with __text__
    .replace(/~~(.*?)~~/g, '<span class="text-red-500">$1</span>') // Red text with ~~text~~
})
</script>