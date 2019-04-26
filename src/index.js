import './index.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';

window.state = {
  list: [],
  loading: true,
  theme: '',
};

Header();
Experience();
Education();
