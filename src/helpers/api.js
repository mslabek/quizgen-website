import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});

export const TopicService = {
  fetchTopics() {
    return instance.get("/topics");
  },
};

export const QuizService = {
  fetchQuiz(
    topicName,
    knownPropertyTypeName,
    unknownPropertyTypeName,
    questionCount,
    answerCount
  ) {
    return instance.post("/quiz/new", {
      topicName: topicName,
      knownPropertyTypeName: knownPropertyTypeName,
      unknownPropertyTypeName: unknownPropertyTypeName,
      questionCount: questionCount,
      answerCount: answerCount,
    });
  },
  postAnswer(answer) {
    return instance.post("/quiz/answer", {
      answer: answer,
    });
  },
};
