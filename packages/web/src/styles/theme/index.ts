import { DefaultTheme } from 'styled-components';

export const LightTheme: DefaultTheme = {
  title: 'light',
  colors: {
    primary: '#29b6d1',
    secondary: '#04BF58',
    tertiary: '#F8F8FC',
    background: 'linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%)',
    title: '#232423',
    subTitle: '#333',
    paragraphText: '#6a6180',
    subtext: '#5f5f5f',
    button: '#232423',
    buttonHover: '#464646',
    box: '#FBFBFB',
    input: '#F3F3F3',
    border: '#DADADA',
    lighter: '#298642',
  },
};

export const DarkTheme: DefaultTheme = {
  title: 'dark',
  colors: {
    primary: '#61e585',
    secondary: '',
    tertiary: '',
    background: '#232423',
    title: '#fff',
    subTitle: '#EFEFEF',
    paragraphText: '#E7E7E7',
    subtext: '#ddd',
    button: '#FEFEFE',
    buttonHover: '#F4EEEE',
    box: '#373737',
    input: '#303030',
    border: '#4B4A4A',
    lighter: '#4bc26f',
  },
};
