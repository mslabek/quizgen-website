<template>
  <div class="h-screen flex flex-col">
    <TheNavbar />
    <section class="container flex flex-col items-center mx-auto">
      <router-view></router-view>
    </section>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
