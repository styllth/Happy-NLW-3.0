import { ThemeTypes } from './Types';

export const LightTheme: ThemeTypes = {
  title: 'light',
  colors: {
    themeColors: {
      primary: {
        lighter: '#96feff',
        light: '#00c7c7',
        normal: '#29b6d1',
        dark: '#15c3d6',
        darker: '#17d6eb',
      },
      secondary: '#04BF58',
      tertiary: '#F8F8FC',

      text: {
        light: '#D4C2FF',
        normal: '#9C98A6',
        dark: '#6A6180',
      },
    },

    white: '#f7f7f7',
    grey: 'aeaeb0',
    opaque: '#41414D',
    purple: '#6633cc',
    purpleDark: '#5A4B81',
    green: '#67e480',
    orange: '#E89E64',
    pink: '#FF79C6',
    blue: '#5659eb',
    red: '#E96379',
    yellow: '#ffd666',
    background: '#29b6d1',
  },
};

export const DarkTheme: ThemeTypes = {
  title: 'dark',
  colors: {
    themeColors: {
      primary: {
        lighter: '#6866FB',
        light: '#494CDB',
        normal: '#5659EB',
        dark: '#3846D4',
        darker: '#6842C2',
      },
      secondary: '#1C2028',
      tertiary: '#2B303A',

      text: {
        light: '#D4C2FF',
        normal: '#9C98A6',
        dark: '#6A6180',
      },
    },
    white: '#f7f7f7',
    grey: 'aeaeb0',
    opaque: '#41414D',
    purple: '#6633cc',
    purpleDark: '#5A4B81',
    green: '#67e480',
    orange: '#E89E64',
    pink: '#FF79C6',
    blue: '#4347FE' /** #5659eb */,
    red: '#E96379',
    yellow: '#e7de79',
    background: '',
  },
};
