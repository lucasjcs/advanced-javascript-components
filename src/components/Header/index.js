import { textName, info, title, content, image, footer } from './styles';

const Header = () => {
  const img =
    'https://avatars3.githubusercontent.com/u/20274741?s=400&u=6c9281059280729906206b463131d782cca2b542&v=4';

  document.getElementById('header').innerHTML = /*html*/ `
      <header style="${info}">
        <img style="${image}" src="${img}" alt="Photo of Lucas"/>
        <div>
          <div style="${content}">
            <h1 style="${title}" >
              I'm <span style="${textName}">Lucas Jacinto<span>
            </h1>
            <h3>Software Engineer & FullStack Developer</h3>
            <div>
              <p>Age: 23</p>
              <p>E-mail: lucasjcs@live.com</p>
              <p>Address: Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <p>Phone: (XX) X XXXXXXXXX</p>
            </div>
            <div style="${footer}"></div>
          </div>
        </div>
      </header>
  `;
};

export default Header;
