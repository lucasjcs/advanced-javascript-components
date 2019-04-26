import './index.css';
import Header from './components/Header';
import Experience from './components/Experience';

window.state = {
  list: [],
  loading: true,
  theme: '',
};

Header();
Experience();
