import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import TopicPage from "@/views/TopicPage.vue";
import QuizPage from "@/views/QuizPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/topics/:slug",
      name: "topic",
      component: TopicPage,
    },
    {
      path: "/quiz",
      name: "quiz",
      component: QuizPage,
    },
  ],
});

export default router;
