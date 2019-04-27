import colors from '../../styles/colors';

export const Content = `
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

export const CompanyName = `
  color: ${colors.primary};
  font-size: 18pt;
  font-weight: bold;
`;

export const TableStyle = `
  width: 90%;
  margin-bottom: 30px;
`;

export const TdStyle = `
  padding: 5px 10px 5px 0px;
  font-weight: bold;
`;

export const LoadingContent = `
  width: 100%;
  text-align: center;
  margin-top: 0;
`;

export const LoadingStyle = `
  width: 64px;
  align-self: center;
`;

export const Divider = `
  width: 80%;
  margin-bottom: 30px;

`;
export const ErrorStyle = `
  color: ${colors.danger}
`;
