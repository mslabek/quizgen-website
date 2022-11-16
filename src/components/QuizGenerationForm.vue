<template>
  <div class="flex flex-col p-10 bg-slate-100 shadow-lg rounded-lg w-80">
    <BaseSelect
      v-model="formState.knownProperty"
      label="Known property"
      description="(the basis the question)"
      :selection-list="mapPropertyTypesToNames(getUniquePropertyTypes())"
      :errors="v$.knownProperty.$errors"
    />
    <BaseSelect
      v-model="formState.unknownProperty"
      label="Unknown property"
      description="(the thing you will be asked about)"
      :selection-list="mapPropertyTypesToNames(topic.propertyTypes)"
      :errors="v$.unknownProperty.$errors"
    />
    <BaseSlider
      v-model.number="formState.questionCount"
      label="Question count: "
      :min="5"
      :max="topic.itemCount"
    />
    <BaseSlider
      v-model.number="formState.answerCount"
      label="Question count: "
      :min="5"
      :max="10"
    />
    <div class="text-center my-5">
      <button class="btn-primary py-3" @click="generateQuiz()">
        Generate Quiz
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useQuizStore } from "@/store/quiz.js";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseSlider from "@/components/BaseSlider.vue";

const props = defineProps({
  topic: {
    type: Object,
    required: true,
  },
});

const formState = reactive({
  unknownProperty: "",
  knownProperty: "",
  questionCount: 10,
  answerCount: 4,
});

const rules = {
  unknownProperty: { required },
  knownProperty: { required },
  questionCount: { required },
  answerCount: { required },
};

const v$ = useVuelidate(rules, formState);

function getUniquePropertyTypes() {
  return props.topic.propertyTypes.filter(
    (type) => type.uniqueness === "UNIQUE"
  );
}

function mapPropertyTypesToNames(propertyTypes) {
  return propertyTypes.map((x) => x.name);
}

const router = useRouter();

const generateQuiz = async () => {
  const result = await v$.value.$validate();
  if (result) {
    useQuizStore().fetchQuiz(
      props.topic.name,
      formState.knownProperty,
      formState.unknownProperty,
      formState.questionCount,
      formState.answerCount
    );
    router.push("/quiz");
  }
};
</script>
