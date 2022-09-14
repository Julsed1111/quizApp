import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { purple, deepOrange } from '@mui/material/colors';

export const ColorModeContext = createContext({ switchTheme: () => {} });

export  function MyThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      switchTheme: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: purple[500],
                },
                secondary: {
                  main: '#f44336',
                },
              }
            : {
                primary: {
                  main: deepOrange[500],
                },
                text: {
                  primary: '#fff',
                },
                background: {
                  paper: deepOrange[900]
                }
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}