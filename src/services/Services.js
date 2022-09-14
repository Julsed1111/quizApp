import api from "../api/Api";
import { API_URL } from "../constants/Index";

/*  */
export const getQuestions = () => {
     return api.get(`${API_URL}/questions`).then((response) => response.data);
}

export const getQuestionById = (question) => {
     return api.get(`${API_URL}/questions/${question.Id}`).then((response) => response.data);
}

export const createQuestion = (question) => {
     return api.post(`${API_URL}/questions`, question).then((response) => response.data);
}

export const deleteQuestion = (question) => {
     return api.delete(`${API_URL}/questions/${question.Id}`).then((response) => response.data);
}

export const updateQuestion = (question) => {
     return api.put(`${API_URL}/questions/${question.Id}`, question).then((response) => response.data);
}
   
export const getAnswers = () => {
     return api.get(`${API_URL}/answer`).then((response) => response.data);
}

export const getAnswerById = (answer) => {
     return api.get(`${API_URL}/answer/${answer.Id}`).then((response) => response.data);  
}

export const createAnswer = (answer) => {
     return api.post(`${API_URL}/answer`, answer).then((response) => response.data);
}

export const deleteAnswer = (answer) => {
     return api.delete(`${API_URL}/answer/${answer.Id}`).then((response) => response.data);
}

export const updateAnswer = (answer) => {
     return api.put(`${API_URL}/answer/${answer.Id}`, answer).then((response) => response.data);
}


