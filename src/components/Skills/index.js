import { get } from '../../services/api';
import {
  Content,
  ContentHeader,
  Title,
  Divider,
  ErrorStyle,
  SkillsBar,
  SkillItem,
  SkillThumb,
  SkillLevel,
  SkillLevelBG,
  SkillName,
} from './styles';

const localState = {
  loading: true,
  error: false,
};

const requestItems = async () => {
  try {
    const data = await get('/skills');
    window.state = {
      ...window.state,
      skillsList: data,
    };
    render();
  } catch (error) {}
};
const Skills = () => {
  requestItems();
  render();
};

const render = () => {
  console.log(window.state.skillsList);
  document.getElementById('skills').innerHTML = /*html*/ `
    <div style="${Content}">
      <div id="exp-title" style="${ContentHeader}">
        <h1 style="${Title}">Skills</h1>
        <hr style="${Divider}">
        ${
          localState.error
            ? `<h1 style="${ErrorStyle}">Could not load list, please try again later!</h1>`
            : ''
        }
      </div>

      <div style="${SkillsBar}">
        <ul>
          ${window.state.skillsList
            .map(
              skill => /*html*/ `
              <li style="${SkillItem}">
                <span style="${SkillName}" >${skill.name}</span>
                <div style="${SkillLevelBG}">
                  <div style="${SkillLevel(skill.level)}"></div>
                </div>
              </li>
          `
            )
            .join(' ')}
        </ul>
      </div>

    </div>
  `;
};

export default Skills;
