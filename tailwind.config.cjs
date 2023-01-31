/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      /* tailwind 에다가 내가 원하는 스타일 지정 할 수 있음 */
      minWidth : {
        '100' : '100px',
        '200' : '200px',
        '300' : '300px'
      },
      colors : {
        primary: '#1DA1F2',
        dark: '#1a91da',
        light: '#a5d0f5',
        lighter : '#d4e5f4'
      }
    },
  },
  plugins: [],
}
