<template>
  <div class="flex flex-col divide-y-2">
    <TopicList v-if="FEATURED_TOPICS.length != 0" :topics="FEATURED_TOPICS" />
    <QuizList v-if="FEATURED_QUIZZES.length != 0" :quizzes="FEATURED_QUIZZES" />
  </div>
</template>

<script setup>
import TopicList from "@/components/TopicList.vue";
import QuizList from "@/components/QuizList.vue";
import { FEATURED_TOPICS, FEATURED_QUIZZES } from "@/config.js";
</script>
