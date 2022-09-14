import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Question } from "./Question";
import { useEffect, useRef  } from "react";
import { fetchQuestion } from '../store/question/actions';
import { fetchAnswers } from '../store/answer/actions'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Result } from './Result';
import { ThemeSwitcher } from "./ThemeSwitcher";




export const Quiz = () => {
  const dispatch = useDispatch();
  const initialRender = useRef(true);
  let questions = useSelector((state) => state.question.questions);
  
  
  useEffect (() => {
    dispatch(fetchQuestion());
    dispatch(fetchAnswers());
    initialRender.current = false;
  },[dispatch]);

  

  const currentPosition = useSelector((state) => state.result.currentPosition);
  



  return (
    <>
      { initialRender.current === false ? <> { currentPosition < 10 ? 
      <Box sx={{
        width: "30%",
        minHeight: 500,
        height: "auto",
        position: "fixed",
        top: "11%",
        left: "35%",
      }}>
        
        <AppBar position="static" >
          <Toolbar sx={{ marginLeft: "30%" }}>
            <Typography variant="h5" component="div" sx={{ width: 60 }}>
             {currentPosition + 1}/10
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Question question={questions[currentPosition]}/>
        
      </Box>
      : <Result/> }
      </>
      : <></>
      }
    <ThemeSwitcher/></>
  );
};
