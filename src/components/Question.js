import { Box, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { AnswerButtons } from "./AnswerButton";

export const Question = ({question})  => {
 let questionAnswerIds = question.answersIds;
 const answers = useSelector((state) => state.answer.answers);
 let questionAnswers = [];


  
 for(let i = 0; i < answers.length; i++){
  for(let j = 0; j < questionAnswerIds.length; j++){
    if(answers[i].id === questionAnswerIds[j].toString()){
      questionAnswers.push(answers[i]);
    }
  }
 }

return (
    <>
        <Box
          sx={{
            padding: '10px',
            height: 30,
            marginBottom: '2.5%'
          }}
        >
          <Typography variant="subtitle1">
            <b>Question:</b> {question.questionTitle}
          </Typography>
        </Box>

        <Paper
          elevation = {6}
          style={{whiteSpace: 'pre-line'}}
          sx={{
            padding: 2,
            width: "auto",
            height: 130,
            wordWrap: "break-word",
          }}
        >
          {question.questionText}
        </Paper>
        <AnswerButtons answers={questionAnswers} question={question}/>
    </>
);

}