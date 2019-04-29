import colors from '../../styles/colors';

export const Container = `
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const ContentHeader = `
  width: 100%;
  text-align: center;
  margin-top: 0;
`;

export const Title = `
  margin-top: -5px;
  margin-bottom: 0px;
  color: ${colors.primary};
  font-size: 26pt;
`;

export const Divider = `
  width: 80%;
  margin-bottom: 30px;

`;

export const ListItem = `
  padding: 10px;
  font-weight: bold;
  font-size: 15pt;
`;

export const ItemTitle = `
  font-size: 18pt;
  color: ${colors.primary};
  padding-left: 15px;
`;
