import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resume: {
    url: 'https://docs.google.com/document/d/1_b8rqKedzVgeIRQXSMBEcT_eb8VqTDYjDUdY_3CO2jE/edit?usp=sharing',
    title: 'Resume_Vazquez_Flores_Jose_L.pdf',
  },
  projects: [
    {
      id: 0,
      title: 'To-Do-List',
      techs: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'JEST'],
      image: '/src/assets/images/To-do-list.png',
      imageAltText: 'To do list page with a short list of task',
      description: 'The successor to the Awesome Library project. It has the same and functions as well as new features that allow users to delete groups of list and edit the already existing text in the list item.',
      liveUrl: 'https://jlvflores.github.io/To-Do-list/dist/',
      sourceUrl: 'https://github.com/jlvFlores/To-Do-list',
    },
    {
      id: 1,
      title: 'Awesome Books',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: '/src/assets/images/Awesome-books.png',
      imageAltText: 'List page of the Awesome books site',
      description: 'A single-page dynamic library that displays books added or removed by the user using their browser\'s localStorage.',
      liveUrl: 'https://jlvflores.github.io/Awesome-books-with-ES6/',
      sourceUrl: 'https://github.com/jlvFlores/Awesome-books-with-ES6',
    },
    {
      id: 2,
      title: 'To-Do-List',
      techs: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'JEST'],
      image: '/src/assets/images/To-do-list.png',
      imageAltText: 'To do list page with a short list of task',
      description: 'The successor to the Awesome Library project. It has the same and functions as well as new features that allow users to delete groups of list and edit the already existing text in the list item.',
      liveUrl: 'https://jlvflores.github.io/To-Do-list/dist/',
      sourceUrl: 'https://github.com/jlvFlores/To-Do-list',
    },
    {
      id: 3,
      title: 'Awesome Books',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: '/src/assets/images/Awesome-books.png',
      imageAltText: 'List page of the Awesome books site',
      description: 'A single-page dynamic library that displays books added or removed by the user using their browser\'s localStorage.',
      liveUrl: 'https://jlvflores.github.io/Awesome-books-with-ES6/',
      sourceUrl: 'https://github.com/jlvFlores/Awesome-books-with-ES6',
    },
    {
      id: 4,
      title: 'To-Do-List',
      techs: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'JEST'],
      image: '/src/assets/images/To-do-list.png',
      imageAltText: 'To do list page with a short list of task',
      description: 'The successor to the Awesome Library project. It has the same and functions as well as new features that allow users to delete groups of list and edit the already existing text in the list item.',
      liveUrl: 'https://jlvflores.github.io/To-Do-list/dist/',
      sourceUrl: 'https://github.com/jlvFlores/To-Do-list',
    },
    {
      id: 5,
      title: 'Awesome Books',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: '/src/assets/images/Awesome-books.png',
      imageAltText: 'List page of the Awesome books site',
      description: 'A single-page dynamic library that displays books added or removed by the user using their browser\'s localStorage.',
      liveUrl: 'https://jlvflores.github.io/Awesome-books-with-ES6/',
      sourceUrl: 'https://github.com/jlvFlores/Awesome-books-with-ES6',
    },
  ],
  attributes: [
    {
      category: 'Languages',
      items: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Libraries & Frameworks',
      items: ['React', 'Redux', 'Bootstrap'],
    },
    {
      category: 'Tools',
      items: ['Github', 'Git', 'VS Code', 'Figma'],
    },
  ],
  texts: {
    headline: 'I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.',
    about: 'Hello I’m a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.',
    contact: 'I’m always interested in hearing about new projects, so if you’d like to chat please get in touch.',
  },
  isLoading: true,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {},
});

export default portfolioSlice.reducer;
