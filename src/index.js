import './index.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';

window.state = {
  experienceList: [],
  skillsList: [],
  theme: 'LIGHTER_THEME',
  loading: true,
};

Header();
Experience();
Education();
