import { Container, ContentHeader, Title, Divider, ListItem } from './styles';

const Interests = () => {
  document.getElementById('interests').innerHTML = /*html*/ `
    <div style="${Container}">
      <div id="exp-title" style="${ContentHeader}">
        <h1 style="${Title}">Professional Interests</h1>
        <hr style="${Divider}">
     </div>

      <ul>
        <li style="${ListItem}">Being part of something great, where I feel motivated and challenged to always deliver the best with quality.</li>
        <li style="${ListItem}">To grow professionally in technical knowledge, learning continuously with the team</li>
        <li style="${ListItem}">Apply the technical and theoretical knowledge acquired during graduation</li>
      </ul>
    </div>

  `;
};

export default Interests;
