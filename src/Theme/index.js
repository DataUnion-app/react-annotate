import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles"
// @flow

import React from "react"

const useStyles = makeStyles({
  container: {
    fontFamily: '"Inter", sans-serif',
  },
})

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
  },
  overrides: {
    MuiButton: {
      root: {
        // background: "linear-gradient(to right bottom, rgb(249, 37, 255), rgb(0, 72, 186))",
        textTransform: "none",
      },
    },
    MuiCollapse: {
      container: {
        color: "black",
        background: "var(--header-background-color)"
      }
    }
  },
})

export const Theme = ({ children }: any) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>{children}</div>
    </ThemeProvider>
  )
}

export default Theme
