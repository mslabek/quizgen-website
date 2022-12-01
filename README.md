# QuizGen - Website

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A Vue application for generating and solving quizzes.

[Live demo](https://quizgen.onrender.com/)

Repository of the backend application is available [here](https://github.com/mslabek/quizgen-backend).

## 📖 Table of Contents

- [General Information](https://github.com/mslabek/quizgen-website#-general-information)
- [Features](https://github.com/mslabek/quizgen-website#-features)
- [Usage](https://github.com/mslabek/quizgen-website#-usage)
- [Tech stack](https://github.com/mslabek/quizgen-website#-tech-stack)
- [Road map](https://github.com/mslabek/quizgen-website#%EF%B8%8F-road-map)
- [Project status](https://github.com/mslabek/quizgen-website#-project-status)
- [License](https://github.com/mslabek/quizgen-website#%EF%B8%8F-license)

## 📝 General Information

Most available quiz application are dealing with hard-coded quizzes or generate quizzes for a specific topic. This application's goal is to be able to generate quizzes dynamically and not be limited to a certain subject. This provides many challenges such as operating on a very abstract data model (to be topic-agnostic) and having to deal with linguistics (to generate question phrases that are grammatically correct).

The main idea is that topics (for example country) contain concrete items (for example Poland). These items possess certain types of qualities (for example countries have capitals) and concrete items have concrete qualities of these types (for example the capital of Poland is Warsaw). Based on this notion, a question contains a known property of some item and asks for another property of the same item. For example when we ask "What is the capital of Poland?" - we ask for property of type Capital for an item, which property of type Name is Poland.

This data model may seem quite weird, but it allows for generating very unique quizzes, for example asking "What is the coat of arms of a country which capital is Warsaw?" or "What is the dynasty of a Polish ruler who ruled in years 1238–1241?".

## ✨ Features

- Generating and solving highly customizable quizzes
- Simple homepage with topic selection and featured quizzes
- Quiz solving view with text, image and audio components

## 🎡 Usage

The app is still in early stages of development so the page layout is up to change (for example how the audio files are displayed).

## 🛠 Tech Stack

Most important technologies used:

- Vue
- Pinia
- Vue Router
- Axios
- Build tool: Vite

## 🏗️ Road Map

Here are some most important features / improvements that need to be implemented:

- [ ] Refactor big vue files (mainly divide them into smaller components)
- [ ] Validation (disallow generating quizzes that have the same unknown property and known property and allow selecting only unique properties as known property)
- [ ] Quizzes limited to selected tags
- [ ] Item view
- [ ] Leaderboard
- [ ] Documentation
- [ ] Testing

## 🌱 Project Status

Project is in development.

## ⚖️ License

This project is open source and available under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).
