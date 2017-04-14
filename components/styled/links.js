import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { Link } from 'react-router';

import { colorSecondary } from './constants';

/*
 * StyledLink
 */
export const StyledNavLink = styled(Link)`
  color: ${colorSecondary};
  font-size: 18px;
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};

  &:hover {
    text-decoration: underline;
  }
`;

export const NavigationLink = styled(StyledNavLink)`
  padding-bottom: 6px;
  margin-right: 40px;
  border-bottom: solid 4px rgba(255, 255, 255, 0);
  transition: all 175ms cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover {
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 4px solid #02d8ff;
  }
  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    margin-right: 0px;
    font-size: 30px;
    line-height: 30px;
  }
`;
