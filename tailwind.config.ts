import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#fbbf24',
          '.toaster-con': {
            'background-color': 'white',
            color: 'black',
          },
        },
        dark: {
          ...require('daisyui/src/theming/themes')['retro'],
          primary: '#ED7400',
          '.toaster-con': {
            'background-color': '#024936',
            color: 'white',
          },
        },
      },
    ],
  },
  darkMode: ['class', '["dark"]'],
  plugins: [require('daisyui')],
}
export default config
