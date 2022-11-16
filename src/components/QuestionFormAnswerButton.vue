<template>
  <button
    v-if="unknownPropertyFormat === 'TEXT'"
    class="text-xl px-10 py-8"
    :class="answerStatus"
    @click="submitAnswer"
  >
    {{ answer }}
  </button>
  <button
    v-if="unknownPropertyFormat === 'SVG_URL'"
    class="p-5 h-64 mx-auto"
    :class="answerStatus"
    @click="submitAnswer"
  >
    <img class="h-full" :src="answer" />
  </button>
  <div v-if="unknownPropertyFormat === 'AUDIO_URL'" class="flex justify-center">
    <audio controls>
      <source :src="answer" type="audio/ogg" />
      <source :src="answer" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <button
      class="p-5 h-64 ml-5 h-5"
      :class="answerStatus"
      @click="submitAnswer"
    ></button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  answer: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    default: "$Unknown",
  },
  unknownPropertyFormat: {
    type: String,
    default: "TEXT",
  },
});

const emit = defineEmits(["submit"]);
const submitAnswer = () => emit("submit");

const answerStatus = computed(() => {
  if (props.correctAnswer == "$Unknown") {
    return "answer-unknown";
  } else if (props.correctAnswer == props.answer) {
    return "answer-correct";
  } else {
    return "answer-incorrect";
  }
});
</script>
