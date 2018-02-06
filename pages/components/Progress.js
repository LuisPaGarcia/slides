import styled from "styled-components";

const ProgressDyn = styled.div.attrs({
  style: props => ({
    width: props.progress
  })
})`
  position: fixed;
  height: 10px;
  background-color: red;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
`;

export default ProgressDyn;
