import React from 'react'
import styled from 'styled-components'
import Colors from '../theme/Colors';

const CubeOuter = styled.div`
  margin: 40px auto;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  transform: rotateZ(45deg);
`

const CubeLayer = styled.div`
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1); 

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Colors.code.blue};
    animation: sk-foldCubeAngle 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }

  &.sk-cube2 {
    transform: scale(1.1) rotateZ(90deg);
  }
  &.sk-cube3 {
    transform: scale(1.1) rotateZ(180deg);
  }
  &.sk-cube4 {
    transform: scale(1.1) rotateZ(270deg);
  }
  &.sk-cube2:before {
    animation-delay: 0.3s;
  }
  &.sk-cube3:before {
    animation-delay: 0.6s; 
  }
  &.sk-cube4:before {
    animation-delay: 0.9s;
  }

  @keyframes sk-foldCubeAngle {
    0%, 10% {
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0; 
    } 25%, 75% {
      transform: perspective(140px) rotateX(0deg);
      opacity: 1; 
    } 90%, 100% {
      transform: perspective(140px) rotateY(180deg);
      opacity: 0; 
    }
  }
`

export default function Loading({ size = '40px' }) {
  return (
    <CubeOuter
      size={size}
    >
      <CubeLayer className="sk-cube1" />
      <CubeLayer className="sk-cube2" />
      <CubeLayer className="sk-cube4" />
      <CubeLayer className="sk-cube3" />
    </CubeOuter>
  )
}