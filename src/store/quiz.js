import { defineStore } from "pinia";
import { QuizService } from "@/helpers/api";

export const useQuizStore = defineStore("quizStore", {
  state: () => ({
    questions: [],
    quizConfig: {},
    quizState: {},
    displayedQuestionIndex: 0,
  }),
  actions: {
    fetchQuiz(
      topicName,
      knownPropertyTypeName,
      unknownPropertyTypeName,
      questionCount,
      answerCount
    ) {
      QuizService.fetchQuiz(
        topicName,
        knownPropertyTypeName,
        unknownPropertyTypeName,
        questionCount,
        answerCount
      ).then((res) => {
        this.questions = res.data.questions;
        this.quizConfig = res.data.quizConfig;
        this.quizState = res.data.quizState;
        this.displayedQuestionIndex = 0;
      });
    },
    postAnswer(answer) {
      QuizService.postAnswer(answer).then((res) => {
        this.questions = res.data.questions;
        this.quizConfig = res.data.quizConfig;
        this.quizState = res.data.quizState;
      });
    },
    resetQuiz() {
      this.questions = [];
      this.quizConfig = {};
      this.quizState = {},
      this.displayedQuestionIndex = 0
    }
  },
  getters: {
    getCurrentQuestion: (state) =>
      state.questions[state.displayedQuestionIndex],
  },
});
