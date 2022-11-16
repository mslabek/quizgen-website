<template>
  <audio ref="audio" controls>
    <source :src="props.audioSrc" type="audio/ogg" />
    Your browser does not support the audio element.
  </audio>
</template>

<script setup>
import { watch, ref } from "vue";

const props = defineProps({
  audioSrc: {
    type: String,
    required: true,
  },
});

const audio = ref(null);

watch(
  () => props.audioSrc,
  () => {
    console.log(audio);
    audio.value.load();
  }
);
</script>
