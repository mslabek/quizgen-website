<template>
  <div
    class="container flex flex-col items-center mx-auto divide-y-2"
    @keydown.left="displayPreviousQuestion"
    @keydown.right="displayNextQuestion"
  >
    <div class="text-xl w-full flex flex-col items-center">
      <div
        v-if="!store.quizState.solved"
        class="flex flex-col items-center p-3 w-full"
      >
        <QuestionFormProgressBar
          class="p-5 w-3/4"
          :current="store.quizState.questionsSolved"
          :total="store.quizConfig.questionCount"
        />
        <div>
          Solved questions:
          {{ store.quizState.questionsSolved }} /
          {{ store.quizConfig.questionCount }}
        </div>
        <div>
          Correct:
          {{ store.quizState.correctAnswersCount }} /
          {{ store.quizConfig.questionCount }}
        </div>
        <div>Points: {{ store.quizState.points }}</div>
        <div>
          Next points multiplier: {{ store.quizState.pointsMultiplier }}
        </div>
      </div>
      <div v-else class="flex flex-col items-center p-3">
        <div>End of quiz! Congratulations!</div>
        <div>
          Correct:
          {{ store.quizState.correctAnswersCount }} /
          {{ store.quizConfig.questionCount }}
        </div>
        <div>Your final score: {{ store.quizState.points }}</div>
        <div class="grid grid-row-1 md:grid-cols-2 gap-6 p-10">
          <router-link
            to="/quiz"
            class="flex items-center space-x-3 mr-6"
            @click="
              store.fetchQuiz(
                store.quizConfig.topicName,
                store.quizConfig.knownPropertyType,
                store.quizConfig.unknownPropertyType,
                store.quizConfig.questionCount,
                store.quizConfig.answerCount
              );
              store.resetQuiz();
            "
          >
            <button class="btn-primary w-full">Solve another!</button>
          </router-link>
          <router-link
            to="/"
            class="flex items-center space-x-3 mr-6"
            @click="store.resetQuiz()"
          >
            <button class="btn-primary w-full" @click="store.resetQuiz()">
              Go back to main menu!
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container flex flex-col items-center">
      <QuestionFormQuestionPhrase
        :question-phrase="getCurrentQuestion.questionPhrase"
        :known-property="getCurrentQuestion.knownProperty"
        :known-property-type-format="store.quizConfig.knownPropertyTypeFormat"
      />
      <div class="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-3 p-10">
        <QuestionFormAnswerButton
          v-for="answer in getCurrentQuestion.answers"
          :key="answer"
          :unknown-property-format="store.quizConfig.unknownPropertyTypeFormat"
          :answer="answer"
          :correct-answer="getCurrentQuestionAnswer"
          @submit="submitAnswer(answer)"
        />
      </div>
      <div class="grid grid-cols-2 w-4/5 justify-items-center">
        <button
          class="mx-5 justify-self-end w-36 md:w-64 h-16 md:text-xl px-2"
          :class="previousQuestionStatus"
          @click="displayPreviousQuestion"
        >
          Previous question
        </button>
        <button
          class="mx-5 justify-self-start w-36 md:w-64 h-16 md:text-xl px-2"
          :class="nextQuestionStatus"
          @click="displayNextQuestion"
        >
          Next question
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuizStore } from "@/store/quiz";
import { computed } from "vue";
import QuestionFormAnswerButton from "@/components/QuestionFormAnswerButton.vue";
import QuestionFormQuestionPhrase from "@/components/QuestionFormQuestionPhrase.vue";
import QuestionFormProgressBar from "@/components/QuestionFormProgressBar.vue";

const store = useQuizStore();

const previousQuestionAvailable = computed(() => {
  return store.displayedQuestionIndex > 0;
});
const nextQuestionAvaliable = computed(() => {
  return store.displayedQuestionIndex < store.quizState.currentQuestionIndex;
});

const nextQuestionStatus = computed(() => {
  if (nextQuestionAvaliable.value) {
    return "btn-primary";
  } else {
    return "btn-disabled";
  }
});

const previousQuestionStatus = computed(() => {
  if (previousQuestionAvailable.value) {
    return "btn-primary";
  } else {
    return "btn-disabled";
  }
});

function submitAnswer(answer) {
  if (
    store.displayedQuestionIndex === store.quizState.currentQuestionIndex &&
    store.questions[store.quizState.currentQuestionIndex].result === null
  ) {
    store.postAnswer(answer);
  }
}

function displayNextQuestion() {
  if (nextQuestionAvaliable.value) {
    store.displayedQuestionIndex++;
  }
}

function displayPreviousQuestion() {
  if (previousQuestionAvailable.value) {
    store.displayedQuestionIndex--;
  }
}

const getCurrentQuestion = computed(() => {
  return store.getCurrentQuestion;
});

const getCurrentQuestionAnswer = computed(() => {
  if (store.getCurrentQuestion.result != null) {
    return store.getCurrentQuestion.result.correctAnswer;
  } else {
    return "$Unknown";
  }
});
</script>
