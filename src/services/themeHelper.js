import colors from '../styles/colors';

export const saveTheme = () => {
  if (window.state.theme === 'LIGHTER_THEME') {
    window.state = {
      ...window.state,
      theme: 'DARKER_THEME',
    };
    localStorage.setItem('theme', 'DARKER_THEME');

    themeCheck();
  } else {
    window.state = {
      ...window.state,
      theme: 'LIGHTER_THEME',
    };
    localStorage.setItem('theme', 'LIGHTER_THEME');

    themeCheck();
  }
};

export const themeCheck = () => {
  const sections = document
    .getElementById('container')
    .querySelectorAll('section');

  if (window.state.theme === 'LIGHTER_THEME') {
    sections.forEach(section => {
      section.style.color = colors.white;
      section.style.background = colors.darker;
    });
  } else {
    sections.forEach(section => {
      section.style.color = colors.darker;
      section.style.background = colors.lighter;
    });
  }
};
