import { createTheme } from "@mui/material/styles";
import { blue, grey, green } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
  },
  myBtn: {
    backgroundColor: `${grey[300]} !important`,
    border: "1px solid black !important",
    color: `${green[500]} !important`
  },
});
