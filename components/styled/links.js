import styled from 'styled-components';
import { Link } from 'react-router';

import DefaultBanner from '../../assets/default-cover.jpg';
import LogoImage from '../../assets/logo.png';

import { colorSecondary, colorYellow, colorPrimary } from './constants';

/*
 * StyledLink
 */
export const StyledNavLink = styled(Link)`
  color: ${colorSecondary};
  font-size: 20px;
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  font-weight: bolder;

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
    border-bottom: 4px solid black;
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

export const NavigationContainer = styled.nav`
  z-index: 2;
  @media (max-width: 768px) {
    position: absolute;
    top: -100vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    overflow-y: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.header`
  display: flex;
  padding: 24px 32px;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  z-index: 2;
  @media (min-width:) {
    padding: 14.625px;
  }
`;

export const HeaderImage = styled.div`
	background: ${colorPrimary};
  @media (min-width: 768px) {
    background: url( ${props => (props.bannerImg ? props.bannerImg : DefaultBanner)});
  	background-size: cover;
  	height: 350px;
  	 &:after {
		display: block;
		position: absolute;
		content: "";
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		opacity: 0.1;
		background: white;
		height: 350px;
	 }
  }
  
  @media (min-width: 1100px) {
  	height: 450px;
  	 &:after {
		height: 450px;
	 }
  }
`;

export const Logo = styled(Link)`
  font-size: 18px;
  display: inline-block;
  width: 240px;
  height: 58px;
  margin: 5px ;
  background: url(${LogoImage});
  text-indent: -9999px;
  z-index: 3;
`;

export const CircleButton = styled(Link)`
  color: ${colorYellow};
  width: 100px;
  height: 100px;
  border-radius: 50%; 
  text-align: center;
  font-size: 20px;
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  font-weight: bolder;

  &:hover {
    text-decoration: underline;
  }
`;
