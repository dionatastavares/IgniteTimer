import { ThemeProvider } from "styled-components"
import { dafaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

export function App() {
  return (
    <ThemeProvider theme={dafaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}