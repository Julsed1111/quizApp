import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addResult } from "../store/result/actions";


  export const CustomAnswerButton = ({answerId, answerText, questionRightAnswerId}) => {
    const dispatch = useDispatch();

    const handleAnswer = () => {
      dispatch(addResult({isRight: answerId == questionRightAnswerId}));
    };

    return (<Button key={answerId} onClick={handleAnswer}>{answerText}</Button>);

  }