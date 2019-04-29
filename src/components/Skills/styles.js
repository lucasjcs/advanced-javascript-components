import colors from '../../styles/colors';

export const Content = `
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

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

export const ErrorStyle = `
  color: ${colors.danger}
`;

export const SkillList = `
  padding: 30px;s
`;

export const SkillItem = `
  list-style-type: none;
  padding-bottom: 15px;
`;

export const SkillName = `
  font-size: 16pt;
  font-weight: bold;
`;

export const SkillLevel = level => `
    height: 30px;
    width: ${level}%;
    background: ${colors.primary};
`;

export const SkillLevelBG = `
  width: 100%;
  background: ${colors.light};
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

export const BachelorTitle = `
  padding-left: 20px;
`;
export const BItemList = `
  font-size: 15pt;
  padding-bottom: 15px;
`;
