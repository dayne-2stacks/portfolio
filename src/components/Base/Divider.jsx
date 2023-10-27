import styled from "styled-components";

export const Divider = styled.div`
  width: calc(100%-40px);
  height: 2px;
  background-color: ${(props) => (props.secondary ? "#3a3a3a" : "#282828")};
  border-radius: 2px;
  box-sizing: border-box;
  margin: 10px 20px;
`;
