import { size } from './device'

export const theme = {
    font: {
        xs: '12px',
        s: '14px',
        m: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '36px',
        '4xl': '48px',
        '5xl': '64px',
        '6xl': '72px',
    },
    space: [0, '4px', '8px', '12px', '16px', '24px', '40px', '80px'],
    color: {
        background_default: '#ffffff',
        background_section: '#f8fafc',
        error: '#ff4449',
        primary: '#ffc71b',
        secondary: '#2a537a',
        text_primary: '#333333',
        text_secondary: '#9ebbd7',
        text_colored_background: '#ffffff',
        text_less_prominent: '#999999',
    },
    breakpoints: {
        sm: `${size.mobile}px`,
        md: `${size.tablet}px`,
        lg: `${size.laptop}px`,
        xl: `${size.desktop}px`,
    },
}
