import { ExamActionType } from "../constant";

const initState = {
    questions: [],
    loading: false,
    error: null
}



type Action = {
    // type: ExamActionType.GET_QUESTIONS_ERROR | ExamActionType.GET_QUESTIONS_ERROR | ExamActionType.GET_QUESTIONS_ERROR,
    type:string,
    payload: object,
}

interface GetExamStart {
    type:ExamActionType.GET_QUESTIONS_START
    payload: boolean
}

const examReducers = (state = initState, action:Action) => {
    const { type, payload } = action;
    switch (type) {
        case ExamActionType.GET_QUESTIONS_START:
            return { ...state, loading: true }
        case ExamActionType.GET_QUESTIONS_SUCCESS:
            return { ...state, loading: false, questions: payload }
        case ExamActionType.GET_QUESTIONS_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return { ...state }
    }
}


export default examReducers;
