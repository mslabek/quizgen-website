<template>
  <div class="container flex flex-col items-center mx-auto p-5">
    <Suspense>
      <QuizGeneration :name="nameFromSlug" />
      <template #fallback>
        <BaseLoadingPanel loading-message="Loading topic data..." />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { reverseFormatUrlSlug } from "../helpers/string-utils";
import QuizGeneration from "../components/QuizGeneration.vue";
import BaseLoadingPanel from "@/components/BaseLoadingPanel.vue";

const route = useRoute();
const slug = route.params.slug;
const nameFromSlug = reverseFormatUrlSlug(slug);
</script>
