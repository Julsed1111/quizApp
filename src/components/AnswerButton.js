import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { CustomAnswerButton } from "./CustomButton";



export const AnswerButtons = ({answers, question})  => {
    return (
        <Box>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="contained"
          sx={{ width: "100%" }}
        >
        {answers.map((answer) => (<CustomAnswerButton key={answer.Id} answerId={answer.id} answerText={answer.answerText} questionRightAnswerId={question.rightAnswerId}/>))}
        </ButtonGroup>
      </Box>
    );
}