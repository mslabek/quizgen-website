<template>
  <div>
    <div class="flex flex-col items-center mb-20 p-5">
      <h2 class="text-2xl mb-10">Topics</h2>
      <div
        class="flex flex-col space-x-0 space-y-20 md:flex-row md:space-y-0 md:space-x-10"
      >
        <TopicListItem
          v-for="topic in topics"
          :key="topic.name"
          :img-src="topic.imgSrc"
          :topic-name="formatUrlSlug(topic.name)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TopicListItem from "@/components/TopicListItem.vue";
import { formatUrlSlug } from "@/helpers/string-utils.js";

defineProps({
  topics: {
    type: Array,
    required: true,
  },
});
</script>
