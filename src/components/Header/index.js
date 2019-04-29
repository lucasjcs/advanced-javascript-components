import {
  TextName,
  Info,
  Title,
  Content,
  Image,
  Subtitle,
  City,
  Divider,
  TableStyle,
  TdStyle,
  SocialLinks,
} from './styles';

import LinkedinLogo from '../../images/LinkedinLogo.png';
import GithubLogo from '../../images/GithubLogo.png';
import InstagramLogo from '../../images/InstagramLogo.png';
import UserPhoto from '../../images/UserPhoto.png';

const Header = () => {
  document.getElementById('header').innerHTML = /*html*/ `
      <header style="${Info}">
        <img id="user-photo" style="${Image}" src="${UserPhoto}" alt="Photo of Lucas"/>
        <div>
          <div style="${Content}">
            <h1 style="${Title}" >
              I'm <span style="${TextName}">Lucas Jacinto<span>
            </h1>
            <h3 style="${Subtitle}">Software Engineer & Full Stack Developer</h3>
            <h4 style="${City}">Cornelio Procopio, Parana, Brazil</h4>
            <hr style="${Divider}">
            <div>
              <table style="${TableStyle}">
                <tbody>
                  <tr>
                    <td style="${TdStyle}">Age:</td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td style="${TdStyle}">Adress:</td>
                    <td>Lorem ipsum dolor sit amet consectetur elit.</td>
                  </tr>
                  <tr>
                    <td style="${TdStyle}">Telefone:</td>
                    <td>(43) 9 96569701</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="${SocialLinks}">
              <a href="http://www.linkedin.com/in/lucasjcs" target="_blank" > <img src="${LinkedinLogo}" alt="Linkedin"/></a>
              <a href="http://www.github.com/lucasjcs" target="_blank" ><img src="${GithubLogo}" alt="GitHub"/></a>
              <a href="http://www.instagram.com/lucasjcs" target="_blank" ><img src="${InstagramLogo}" alt="Instagram"/></a>
            </div>
          </div>
        </div>
      </header>
  `;
};

export default Header;
