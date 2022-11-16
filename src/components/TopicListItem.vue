<template>
  <router-link :to="{ name: 'topic', params: { slug: topicName } }">
    <div class="hover:scale-105 duration-200 overflow-hidden rounded-lg">
      <img class="object-cover" :src="imgSrc" alt="" />
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  topicName: {
    type: String,
    required: true,
  },
});
</script>
