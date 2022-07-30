import { Dispatch } from "redux";
import { shuffleArray } from "../../utils/utils";
import { ExamActionType } from "../constant";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestionsAction = async (
  amount: number,
  difficulty: Difficulty
) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}&type=multiple`;
      const data = await (await fetch(endpoint)).json();
      const finalData = data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
      }));
      dispatch({
        type: ExamActionType.GET_QUESTIONS_SUCCESS,
        payload: finalData,
      });
    } catch (error) {
      dispatch({
        type: ExamActionType.GET_QUESTIONS_ERROR,
        payload: false,
      });
    }
  };
};
