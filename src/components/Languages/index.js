import {
  Container,
  ContentHeader,
  Title,
  Divider,
  ListItem,
  ItemTitle,
} from './styles';

const Languages = () => {
  document.getElementById('languages').innerHTML = /*html*/ `
    <div style="${Container}">
      <div id="exp-title" style="${ContentHeader}">
        <h1 style="${Title}">Languages</h1>
        <hr style="${Divider}">
     </div>

      <ul>
        <li style="${ListItem}">Portuguese: <span style="${ItemTitle}" >Fluent (native)</span> </li>
        <li style="${ListItem}"> English: <span style="${ItemTitle}" >Intermediate</span> </li>
      </ul>
    </div>

  `;
};

export default Languages;
