import styled from 'styled-components';

export const Container = styled.button`
  cursor: 'pointer';
  position: relative;
  width: 42px;
  height: 28px;
  padding: 0px;
  background: #fff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid darkgrey;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 11px 9px 0;
    border-color: #fff transparent;
    display: block;
    width: 0;
    z-index: 1;
    margin-left: -9px;
    bottom: -11px;
    left: 50%;
  }

  &:hover {
    transform-origin: 50% 50%;
    transition: transform 0.15s ease 0s;
    transform: scale(1.077);
    z-index: 9999;
  }
`;
