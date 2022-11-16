<template>
  <QuizGenerationTopicDetails :topic="chosenTopic" />
  <QuizGenerationForm :topic="chosenTopic" />
</template>

<script setup>
import QuizGenerationForm from "@/components/QuizGenerationForm.vue";
import QuizGenerationTopicDetails from "@/components/QuizGenerationTopicDetails.vue";
import { useTopicStore } from "@/store/topics.js";
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const store = useTopicStore();
await store.fetchTopics();

const chosenTopic = computed(() => {
  return store.getTopicByName(props.name);
});
</script>
