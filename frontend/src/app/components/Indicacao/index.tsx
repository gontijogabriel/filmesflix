import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  background-color: red;

  &.green {
    background-color: green;
  }
  &.black {
    background-color: black;
  }
  &.red {
    background-color: red;
  }
  &.orange {
    background-color: orange;
  }
  &.yellow {
    background-color: yellow;
  }
`;

function Indicacao({ indicacao }: { indicacao: string }) {
  let classs = 'black'; // Cor padrão

  if (indicacao === 'Livre') {
    classs = 'green';
  } else if (indicacao === '12+') {
    classs = 'yellow';
  } else if (indicacao === '14+') {
    classs = 'orange';
  } else if (indicacao === '16+') {
    classs = 'red';
  } else if (indicacao === '18+') {
    classs = 'black';
  }

  const textoIndicacao = indicacao && indicacao !== 'Livre' ? indicacao.slice(0, 2) : indicacao;
  return <P className={classs}>{textoIndicacao}</P>;
}

export default Indicacao;
