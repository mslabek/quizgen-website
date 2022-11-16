<template>
  <nav>
    <div class="bg-slate-100 border-b mb-24 border-slate-200">
      <div class="container p-4 flex mx-auto justify-between">
        <div class="flex items-center space-x-3">
          <router-link
            to="/"
            class="flex items-center space-x-3 mr-6"
            @click="store.resetQuiz()"
          >
            <img class="w-14" src="/src/assets/owl-outline.svg" alt="" />
            <h1 class="text-4xl text-slate-800 font-sans">QuizGen</h1>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useQuizStore } from "@/store/quiz";

const store = useQuizStore();
</script>
