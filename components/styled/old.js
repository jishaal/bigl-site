import styled, { injectGlobal, css } from 'styled-components';
import { darken, lighten } from 'polished';
import { Link } from 'react-router';
import { Row } from 'hedron';

import { colorPrimary, colorSecondary } from './constants';

import LogoImage from '../../assets/logo.png';

/*
 * Global Styles
 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato');

  body {
    font-family: 'Lato', sans-serif;
    color: ${colorPrimary};
    background: white;
    margin: 0;
  }

  a {
    color: ${colorSecondary};

    &:hover, &:focus{
      color: ${lighten(0.2, colorSecondary)};
    }
  }
`;

/*
 * Media Queries
 */
const media = {
	tablet: (...args) => css`
    @media (min-width: 420px) {
      ${css(...args)}
    }
  `,
};

/*
 * Title
 */
export const Title = styled.h1`
   font-size: 30px;
   text-decoration: underline;
 `;

/*
 * Subtitle
 */
export const Subtitle = styled.h2`
  font-size: 24px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

/*
 * StyledLink
 */
export const StyledLink = styled(Link)`
  color: palevioletred;
  font-size: 18px;
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};

  &:hover {
    text-decoration: underline;
  }
`;

/*
 * StyledAnchor
 */
export const StyledAnchor = styled.a`
   color: palevioletred;
   font-size: 18px;
 `;

/*
 * Message
 */
export const Message = styled.h2`
  font-size: 24px;
`;

/*
 * Button
 */
export const Button = styled.button`
  padding: ${props => (props.large ? '16px 48px' : '8px 24px')};
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: black;
  border: 0;
  cursor: pointer;
`;

/*
 * DefaultButton
 */
export const DefaultButton = styled(Button)`
  background-color: lightblue;
  &:hover {
    background: ${darken(0.1, '#add8e6')};
  }
`;

/*
 * PrimaryButton
 */
export const PrimaryButton = styled(Button)`
  background-color: lightseagreen;
  &:hover {
    background: ${darken(0.1, '#20b2aa')};
  }
`;

/*
 * Success
 */
export const SuccessButton = styled(Button)`
  background-color: lightgreen;
  &:hover {
    background: ${darken(0.1, '#90ee90')};
  }
`;

/*
 * Warning
 */
export const WarningButton = styled(Button)`
  background-color: lightsalmon;
  &:hover {
    background: ${darken(0.1, '#ffa07a')};
  }
`;

/*
 * Danger
 */
export const DangerButton = styled(Button)`
  background-color: lightcoral;
  &:hover {
    background: ${darken(0.1, '#f08080')};
  }
`;

/*
 * Input
 */
export const Input = styled.input`
  color: ${props => props.color};
  font-size: 16px;
  padding: ${props => (props.large ? '16px 48px' : '8px 24px')};
  border: 2px solid ${props => props.color};
  background: transparent;
`;

/*
 * Text
 */
export const Text = styled.p`
  font-size: ${props => props.fontSize || '16px'};
  ${media.tablet`
    font-size: 20px;
  `}
`;

/*
 * ErrorTitle
 */
export const ErrorTitle = styled.h4`
  font-size: 34px;
  margin-bottom: 0;
`;

/*
 * ErrorBody
 */
export const ErrorBody = styled.div`
  font-size: 18px;

  a {
    display: block;
    margin-top: 50px;
  }
`;

/*
 * ErrorBody
 */
export const Logo = styled.div`
  font-size: 18px;
  display: inline-block;
  width: 240px;
  height: 58px;
  margin: 5px ;
  background: url(${LogoImage});
  text-indent: -9999px;
  z-index: 3;
`;
