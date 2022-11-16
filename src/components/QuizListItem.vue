<template>
  <div class="hover:scale-105 duration-200 rounded bg-slate-100 shadow-lg">
    <div class="flex flex-col w-full h-full">
      <div class="p-4">
        <h3 class="text-xl">{{ quiz.topic }}</h3>
        <h4 class="text-ls text-gray-600">
          {{ quiz.knownProperty }} &rarr; {{ quiz.unknownProperty }}
        </h4>
      </div>
      <div class="h-60 overflow-hidden">
        <img class="object-cover h-60 w-full" :src="quiz.imgSrc" />
      </div>
      <div class="text-sm text-gray-600 p-4">
        <p>Questions: {{ quiz.questionCount }}</p>
        <p>Difficulty: Normal</p>
      </div>
      <div class="p-4 flex gap-4">
        <router-link to="/quiz" @click="generateQuiz()">
          <button class="btn-primary">Solve</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuizStore } from "@/store/quiz.js";

const props = defineProps({
  quiz: {
    type: Object,
    required: true,
  },
});

function generateQuiz() {
  useQuizStore().fetchQuiz(
    props.quiz.topic,
    props.quiz.knownProperty,
    props.quiz.unknownProperty,
    props.quiz.questionCount,
    props.quiz.answerCount
  );
}
</script>
