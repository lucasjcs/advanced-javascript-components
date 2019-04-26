import api from '../../services/api';
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
} from './styles';

const requestItems = () => {
  setTimeout(async () => {
    const { data, status } = await api.get('/experience');
    if (status === 200) {
      window.state = {
        ...window.state,
        list: [...window.state.list, data],
        loading: false,
      };
    }
    console.log(window.state.list);
    render();
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
      </div>
      <div>
        ${
          window.state.loading
            ? `
            <div style="${LoadingContent}">
             <img style="${LoadingStyle}" src="${Loading}"/>
            </div>
            `
            : window.state.list[0].map(
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
