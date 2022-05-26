import { createContext } from "react";

const theme = {
    primary: {
        bg: 'navy', text: 'white'
    }
}

type Props = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeProvider = (props: Props) => {
    return (
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    )
}