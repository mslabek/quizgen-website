import periodicTableUrl from "@/assets/periodic-table-medium.jpg";
import crownUrl from "@/assets/crown-medium.jpg";
import globeUrl from "@/assets/globe-medium.jpg";
import europeCapitalsUrl from "@/assets/europe-capitals.jpg";
import deathSigismundUrl from "@/assets/death-sigismund2.jpg";
import grunwald from "@/assets/grunwald.jpg";
import bromiumCubeUrl from "@/assets/bromium-cube.jpg";
import stuartCoatOfArms from "@/assets/stuart-coat-of-arms.jpg";
import colombianBandAnthem from "@/assets/colombian-band-anthem.jpg"
import unFlags from "@/assets/un-flags.jpg"
import gasStove from "@/assets/gas-stove.jpg"

export const FEATURED_TOPICS = [
  {
    name: "Pierwiastki chemiczne",
    imgSrc: periodicTableUrl,
  },
  {
    name: "Władcy Polski",
    imgSrc: crownUrl,
  },
  {
    name: "Państwa",
    imgSrc: globeUrl,
  },
];

export const FEATURED_QUIZZES = [
  {
    topic: "Państwa",
    knownProperty: "Nazwa",
    unknownProperty: "Stolica",
    questionCount: 10,
    answerCount: 4,
    imgSrc: europeCapitalsUrl,
  },
  {
    topic: "Państwa",
    knownProperty: "Nazwa",
    unknownProperty: "Godło",
    questionCount: 10,
    answerCount: 4,
    imgSrc: stuartCoatOfArms,
  },
  {
    topic: "Państwa",
    knownProperty: "Nazwa",
    unknownProperty: "Flaga",
    questionCount: 10,
    answerCount: 4,
    imgSrc: unFlags,
  },
  {
    topic: "Państwa",
    knownProperty: "Nazwa",
    unknownProperty: "Hymn",
    questionCount: 10,
    answerCount: 4,
    imgSrc: colombianBandAnthem,
  },
  {
    topic: "Władcy Polski",
    knownProperty: "Imię",
    unknownProperty: "Data panowania",
    questionCount: 10,
    answerCount: 4,
    imgSrc: deathSigismundUrl,
  },
  {
    topic: "Władcy Polski",
    knownProperty: "Imię",
    unknownProperty: "Dynastia",
    questionCount: 10,
    answerCount: 4,
    imgSrc: grunwald,
  },
  {
    topic: "Pierwiastki chemiczne",
    knownProperty: "Nazwa",
    unknownProperty: "Symbol",
    questionCount: 10,
    answerCount: 4,
    imgSrc: bromiumCubeUrl,
  },
  {
    topic: "Pierwiastki chemiczne",
    knownProperty: "Nazwa",
    unknownProperty: "Charakter chemiczny",
    questionCount: 10,
    answerCount: 4,
    imgSrc: gasStove,
  },
];
