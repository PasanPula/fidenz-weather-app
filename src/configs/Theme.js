import { extendTheme } from '@chakra-ui/react'

const customTheme = {
    colors:{
        bgBlack: '#1f2128',
        bgDark: '#383b47',
        cardBlue: '#388ee7',
        cardOrange: '#de944e',
        cardGreen: '#40b681',
        cardPurple: '#6249cc',
        cardRed: '#9c3a3a'
    },
    fonts: {
        body: `'Open Sans', sans-serif`,
        heading: `'Open Sans', sans-serif`,
        mono: `'Open Sans', sans-serif`, 
    }

}

const theme = extendTheme({ ...customTheme });
export default theme;