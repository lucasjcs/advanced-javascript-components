import { get } from '../../services/api';
import {
  Content,
  ContentHeader,
  Title,
  Divider,
  ErrorStyle,
  SkillItem,
  SkillLevel,
  SkillLevelBG,
  SkillName,
  LoadingContent,
  LoadingStyle,
} from './styles';

import Loading from '../../images/Loading.gif';

const localState = {
  loading: true,
  error: false,
};

const requestItems = () => {
  setTimeout(async () => {
    try {
      const data = await get('/skills');
      window.state = {
        ...window.state,
        skillsList: data,
      };
      localState.loading = false;
      render();
    } catch (error) {
      localState.error = true;
      localState.loading = false;
      console.error(error);
      render();
    }
  }, 3000);
};
const Skills = () => {
  requestItems();
  render();
};

const render = () => {
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

      ${
        localState.loading
          ? `
        <div style="${LoadingContent}">
         <img style="${LoadingStyle}" src="${Loading}"/>
        </div>
        `
          : ''
      }
      <div>
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
