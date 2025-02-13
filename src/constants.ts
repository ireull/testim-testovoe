import { v4 as uuid } from "uuid";

export type FAQSection = {
  id: string;
  question: string;
  answer: string;
  visible: boolean;
};

export const initialFAQSections: FAQSection[] = [
  {
    id: uuid(),
    question: "Кто мы?",
    answer: "Люди",
    visible: true,
  },
  {
    id: uuid(),
    question: "Где мы?",
    answer: "Здесь",
    visible: false,
  },
  {
    id: uuid(),
    question: "Почему мы?",
    answer: "Потому",
    visible: true,
  },
  {
    id: uuid(),
    question: "Когда мы?",
    answer: "Тогда",
    visible: true,
  },
];
