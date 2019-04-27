import { get } from '../../services/api';
import Loading from '../../images/Loading.gif';
import {
  Content,
  CompanyName,
  ContentHeader,
  Title,
  TableStyle,
  TdStyle,
  LoadingContent,
  LoadingStyle,
  Divider,
  ErrorStyle,
} from './styles';

const localState = {
  loading: true,
  error: false,
};

const requestItems = () => {
  setTimeout(async () => {
    try {
      const data = await get('/experience');
      window.state = {
        ...window.state,
        experienceList: [...window.state.experienceList, data],
      };

      localState.loading = false;
      render();
    } catch (error) {
      console.error(error);
      localState.error = true;

      render();
    }
  }, 1000);
};

const Experience = () => {
  render();
  requestItems();
};

const render = () => {
  document.getElementById('experience').innerHTML = /*html*/ `
    <div style="${Content}">
      <div id="exp-title" style="${ContentHeader}">
        <h1 style="${Title}">Professional Experience</h1>
        <hr style="${Divider}">
        ${
          localState.error
            ? `<h1 style="${ErrorStyle}">Could not load list, please try again later!</h1>`
            : ''
        }
      </div>
      <div>
        ${
          localState.loading
            ? `
            <div style="${LoadingContent}">
             <img style="${LoadingStyle}" src="${Loading}"/>
            </div>
            `
            : window.state.experienceList[0].map(
                item => /*html*/ `
                <div>
                  <table style="${TableStyle}">
                    <tbody>
                      <tr>
                        <td style="${TdStyle}">Company:</td>
                        <td style="${CompanyName}">${item.company}</td>
                      </tr>
                      <tr>
                        <td style="${TdStyle}">Period:</td>
                        <td>${item.period_start} - ${item.period_end}</td>
                      </tr>
                      <tr>
                        <td style="${TdStyle}">Performed Activities:</td>
                        <td>${item.activities}</td>
                      </tr>
                      <tr>
                        <td style="${TdStyle}">Responsibilities:</td>
                        <td>
                          <ul>
                            <li>${item.responsabilities.tests}</li>
                            <li>${item.responsabilities.mentor}</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            `
              )
        }
      </div>
    </div>
`;
};

export default Experience;
