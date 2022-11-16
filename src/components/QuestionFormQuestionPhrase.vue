<template>
  <div class="text-2xl mt-5">{{ props.questionPhrase }}</div>
  <div v-if="props.knownPropertyTypeFormat === 'SVG_URL'" class="m-3 p-3 h-80">
    <img class="h-full" :src="props.knownProperty" />
  </div>
  <QuestionPhraseAudio
    v-if="props.knownPropertyTypeFormat === 'AUDIO_URL'"
    :audio-src="props.knownProperty"
    class="m-3 pt-5"
  />
</template>

<script setup>
import QuestionPhraseAudio from "@/components/QuestionPhraseAudio.vue";

const props = defineProps({
  questionPhrase: {
    type: String,
    required: true,
  },
  knownProperty: {
    type: String,
    required: true,
  },
  knownPropertyTypeFormat: {
    type: String,
    required: true,
  },
});
</script>
