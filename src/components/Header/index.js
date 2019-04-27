import {
  textName,
  info,
  title,
  content,
  image,
  subtitle,
  city,
  divider,
  tableStyle,
  tdStyle,
  socialLinks,
} from './styles';

import LinkedinLogo from '../../images/LinkedinLogo.png';
import GithubLogo from '../../images/GithubLogo.png';
import InstagramLogo from '../../images/InstagramLogo.png';
import UserPhoto from '../../images/UserPhoto.png';

const Header = () => {
  document.getElementById('header').innerHTML = /*html*/ `
      <header style="${info}">
        <img id="user-photo" style="${image}" src="${UserPhoto}" alt="Photo of Lucas"/>
        <div>
          <div style="${content}">
            <h1 style="${title}" >
              I'm <span style="${textName}">Lucas Jacinto<span>
            </h1>
            <h3 style="${subtitle}">Software Engineer & Full Stack Developer</h3>
            <h4 style="${city}">Cornelio Procopio, Parana, Brazil</h4>
            <hr style="${divider}">
            <div>
              <table style="${tableStyle}">
                <tbody>
                  <tr>
                    <td style="${tdStyle}">Age:</td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td style="${tdStyle}">Adress:</td>
                    <td>Lorem ipsum dolor sit amet consectetur elit.</td>
                  </tr>
                  <tr>
                    <td style="${tdStyle}">Telefone:</td>
                    <td>(43) 9 96569701</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="${socialLinks}">
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
