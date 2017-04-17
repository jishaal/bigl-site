import styled from 'styled-components';

import DefaultBanner from '../../assets/default-cover.jpg';

export const HomeBanner = styled.div`
  background: url( ${props => (props.bannerImg ? props.bannerImg : DefaultBanner)});
  background-size: cover;
  width: 100%;
  height: 600px;
`;

/*
 * Wrapper
 */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12.5%;
`;
