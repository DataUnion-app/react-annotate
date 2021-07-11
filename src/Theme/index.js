/* @flow */
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles"
import React from "react"

import Styles from "./styles"

const useStyles = makeStyles({
  container: {
    fontFamily: '"Inter", sans-serif',
    color: "var(--font-color-text)"
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
      label: {
        color: "var(--font-color-text)"
      }
    },
    MuiCollapse: {
      root: {
        color: "aqua",
        background: "var(--header-background-color)"
      }
    },
    MuiSvgIcon: {
      root: {
        color: "var(--font-color-text)"
      },
    }
  },
})

export const Theme = ({ children }: any) => {
  const classes = useStyles()
  return (
    <Styles>
      <ThemeProvider theme={theme}>
        <div className={classes.container}>{children}</div>
      </ThemeProvider>
    </Styles>
  )
}

export default Theme
