import {
  Content,
  ContentHeader,
  Title,
  CourseTitle,
  LinkTitle,
  Divider,
  LogoStyle,
} from './styles';

import UtfprLighterLogo from '../../images/UtfprLighterLogo.png';

const Education = () => {
  document.getElementById('education').innerHTML = /*html*/ `
    <div style="${Content}">
      <div id="exp-title" style="${ContentHeader}">
        <h1 style="${Title}">Education</h1>
        <hr style="${Divider}">
      </div>
      <img id="university-logo" style="${LogoStyle}" src="${UtfprLighterLogo}" alt="UTFPR"/>
      <div>
        <h3 style="${CourseTitle}">
          <a style="${LinkTitle}" target="_blank"
             href="http://www.utfpr.edu.br/cornelioprocopio/cursos/bacharelados/Ofertados-neste-Campus/engenharia-de-software">
             Software Engineering
          </a>
        </h3>
        <h4>2014 - 2018</h4>
      </div>

    </div>
  `;
};

export default Education;
