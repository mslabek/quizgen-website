<template>
  <section>
    <div class="container flex flex-col items-center mx-auto p-5 mt-10">
      <h2 class="text-2xl mb-14">Featured quizzes</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16"
      >
        <QuizListItem
          v-for="quiz in quizzes"
          :key="quiz.propertyType"
          :quiz="quiz"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import QuizListItem from "@/components/QuizListItem.vue";

defineProps({
  quizzes: {
    type: Array,
    required: true,
  },
});
</script>
