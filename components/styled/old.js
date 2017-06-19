import styled, { injectGlobal, css } from 'styled-components';
import { darken, lighten } from 'polished';
import { Link } from 'react-router';
import { Row } from 'hedron';

import { colorPrimary, colorSecondary } from './constants';

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
  color: ${colorPrimary};
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
   color: palevioletrede;
   font-size: 18px;
 `;

/*
 * Message
 */
export const Message = styled.h2`
  font-size: 24px;
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
