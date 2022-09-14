import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux"; 
import { Quiz } from "./components/Quiz";
import * as React from 'react';
import { MyThemeProvider } from './components/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    <>
    
      <MyThemeProvider>
        <CssBaseline />
        <Provider store={store}>
          <Quiz/>
        </Provider>
      </MyThemeProvider>
    
    </>
  );
}

export default App;