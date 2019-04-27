import './index.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

window.state = {
  experienceList: [],
  skillsList: [],
  theme: 'LIGHTER_THEME',
};

document.getElementById('btn-theme').addEventListener('click', () => {
  if (window.state.theme === 'LIGHTER_THEME') {
    window.state = {
      ...window.state,
      theme: 'DARKER_THEME',
    };
  } else {
    window.state = {
      ...window.state,
      theme: 'LIGHTER_THEME',
    };
  }
  console.log(window.state.theme);
});

Header();
Experience();
Education();
Skills();
