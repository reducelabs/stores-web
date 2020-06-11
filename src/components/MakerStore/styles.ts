import styled from 'styled-components';

export const Maker = styled.div`
  cursor: 'pointer';
  /* width: 30px;
  height: 30px;
  background: #00cae9;
  border-radius: 50% 50% 50% 0;
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -20px;
  &:after {
    content: "";
    width: 14px;
    height: 14px;
    margin: 8px 0 0 8px;
    background: #e6e6e6;
    position: absolute;
    border-radius: 50%;
  } */
  position: relative;
  width: 50px;
  height: 35px;
  padding: 0px;
  background: #FFFFFF;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 11px 9px 0;
    border-color: #FFFFFF transparent;
    display: block;
    width: 0;
    z-index: 1;
    margin-left: -9px;
    bottom: -11px;
    left: 50%;
  }

  &:hover {
    background: ${props => props.theme.colors.primary};
  }

`;