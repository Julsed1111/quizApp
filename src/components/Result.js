import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";


export const Result = () => {

    const rightAnsweredQuestionsCounter = useSelector((state) => state.result.rightAnsweredQuestionsCounter);
    const counterPercent = (rightAnsweredQuestionsCounter / 10) * 100;
    let resultText;

    if (counterPercent < 50){
      resultText = "Learn Better";
    } else if (counterPercent < 80){
      resultText = "Not Bad";
    } else {
      resultText = "Very good";
    }


    const onClickRefresh = () => {
      window.location.reload(false);
  }


    return (<>
    {/* <Typography
        variant="h3"
        component="h2"
        sx={{ width: "200px", position: "absolute", top: "2%", left: "46%" }}
      >
        Result
      </Typography> */}

      <Box elevation={3}
        sx={{
          width: "28%",
          height: "300px",
          position: "fixed",
          top: "14%",
          left: "35%",
          padding: "20px",
          textAlign: "center",
          borderRadius: '10px',
          backgroundColor: 'darkorange'
        }}
      >
        <Typography variant="h4">{resultText}</Typography>
        <Typography variant="h5" sx={{marginTop: '13%'}}>Score <b>{counterPercent}%</b> ({rightAnsweredQuestionsCounter}/10)</Typography>
        <Button variant="contained" color="success" size="large" sx={{marginTop: '13%'}} onClick={onClickRefresh}>Play again</Button>
      </Box>
    </>);
}