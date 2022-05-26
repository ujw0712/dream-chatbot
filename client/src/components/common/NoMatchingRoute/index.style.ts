import styled from 'styled-components';

export const NoMatchingRouteWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 600px;
  margin: 0 auto;
`;

export const Content = styled.div`
  height: fit-content;
`;

export const Title = styled.div`
  font-family: 'BM Hanna' !important;
  font-size: 50px;
`;

export const SubTitle = styled(Title)`
  font-size: 25px;
  margin-top: 34px;
`;

export const ErrorCode = styled(Title)`
  font-size: 12px;
  color: #999;
  margin-top: 21px;
`;

export const GoToHome = styled(SubTitle)`
  margin-top: 50px;
  cursor: pointer;
  color: var(--dcb);
`;

export const NoRouteImage = styled.div`
  width: 250px;
`;
