<template>
  <div class="container flex flex-col items-center">
    <QuestionForm v-if="useQuizStore().getCurrentQuestion" />
    <BaseLoadingPanel v-else loading-message="Generating quiz..." />
  </div>
</template>

<script setup>
import QuestionForm from "../components/QuestionForm.vue";
import BaseLoadingPanel from "@/components/BaseLoadingPanel.vue";
import { useQuizStore } from "@/store/quiz";
</script>
