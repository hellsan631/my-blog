import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import Names from '../services/CrudNameTrainingList.json'
import { createNeuralNetwork, train } from '../services/NeuralNetwork.js';

const Container = styled.div`
  display: flex;
  position: relative;
  margin: 0;
  width: 100%;
  height: 80vh;
  margin-bottom: 5em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Name = styled.h1`
  margin: 0;
  font-size: 1.0em;
  font-weight: 400;
  letter-spacing: 4px;
  font-family: Lato, sans-serif;
  text-transform: uppercase;
  padding: 0 4vh;
`

const createTrainingSet = () => {
  const flat = Names.flatMap((name) => {
    return name.toLowerCase().split('')
  }).splice(0, 10);

  console.log(flat);

  return [...flat]
    .reduce((current, key, index) => {
      if (key === '/') {
        return current;
      }
      return [
        ...current,
        {
          input: key,
          output: flat[index + 1]
        },
      ];
    }, []);
    // .reduce(([currentInput, currentOutput], { input, output }) => {
    //   return [
    //     [
    //       ...currentInput,
    //       input,
    //     ],
    //     [
    //       ...currentOutput,
    //       output,
    //     ]
    //   ]
    // }, [[], []])
}

const set = createTrainingSet();
const network = createNeuralNetwork();

console.log(set)

const CrudNames = () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const trainClick = async () => {
    setLoading(true);
    await train(network, set);
    setLoading(false);
  };
  const generateName = async () => {
    const guess = await network.activate(['L']);
    setName(guess)
  }

  return (
    <Container>
      <Name>{JSON.stringify(loading)}</Name>
      <Name>{ name && `Hi - ${name}`}</Name>
      <button
        onClick={trainClick}
      >train</button>
      <button
        onClick={generateName}
      >guess</button>
    </Container>
  )
}

export default CrudNames