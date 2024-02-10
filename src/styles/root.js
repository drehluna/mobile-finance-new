import styled from "styled-components";

export const ContainerApp = styled.View`
  flex: 1;
  background-color: #d6d4ce;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Header = styled.View`
  background-color: #1e1e1e;
  width: 100%;
  height: 200px;
  top: 0;
  position: absolute;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  padding: 70px 20px;
`;

export const Title = styled.Text`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size || "24px"};
  font-weight: ${({ height }) => height || "normal"};
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: #91908d;
  margin: 20px 0px;
`;

export const ContainerActions = styled.View`
  display: flex;
  flex-direction: row;
  gap: 30;
  position: absolute;
  top: 220px;
`;

export const Action = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomContainer = styled.View`
  background-color: #1e1e1e;
  width: 100%;
  bottom: 0;
  height: 300px;
  position: absolute;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 50px 20px;
`;

export const HeaderBottomContainer = styled.View`
  margin-bottom: 40px;
`;

export const ContainerTransaction = styled.View`
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerTransactionNameAndType = styled.View`
  display: flex;
  flex-direction: column;
  gap: 2.5px;
  margin-left: 15px;
`;
export const ContainerTransactionAmountAndDate = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Icon = styled.View`
  width: 40px;
  height: 40px;
  background-color: #d6d4ce;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
