import styled from 'styled-components';

export const PricingPlan = styled.div`
  text-align: center;
  border: 2px ${props => props.bgColor} solid;
  border-radius: 5px 5px 0 0;
`;

export const PlanHeader = styled.div`
  font-size: 22px;
  padding: 10px;
  color: white;
  background: ${props => props.bgColor}
`;

export const PlanPrice = styled.div`
  font-size: 36px;
  padding: 10px;
  border-bottom: 1px ${props => props.bgColor} solid
`;

export const PlanContent = styled.div`
  padding: 20px;
`;

export const PlanContentRow = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;
