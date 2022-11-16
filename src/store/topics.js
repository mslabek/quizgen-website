import { defineStore } from "pinia";
import { TopicService } from "@/helpers/api";

export const useTopicStore = defineStore("topicStore", {
  state: () => ({
    topics: [],
  }),
  actions: {
    fetchTopics() {
      if (!this.topics.length) {
        return TopicService.fetchTopics().then((res) => {
          this.topics = res.data;
        });
      } else {
        return Promise.resolve();
      }
    },
  },
  getters: {
    getTopicByName: (state) => {
      return (name) => state.topics.find((topic) => topic.name === name);
    },
    getUnknownProperties: (state) => {
      return (topicId) => state.topics[topicId].propertyTypes;
    },
  },
});
