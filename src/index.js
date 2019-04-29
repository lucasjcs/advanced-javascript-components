import './index.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Interests from './components/Interests';

import { saveTheme, themeCheck } from './services/themeHelper';

const themeStoreged =
  localStorage.getItem('theme') !== null
    ? localStorage.getItem('theme')
    : 'LIGHTER_THEME';

window.state = {
  experienceList: [],
  skillsList: [],
  theme: themeStoreged,
};

themeCheck();

document.getElementById('btn-theme').addEventListener('click', () => {
  saveTheme();
});

Header();
Experience();
Education();
Skills();
Languages();
Interests();
