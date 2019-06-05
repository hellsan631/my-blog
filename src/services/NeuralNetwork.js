import { architect } from '@liquid-carrot/carrot';

export function createNeuralNetwork() {
  const network = architect.LSTM(1, 4, 1);

  return network;
}

export async function train(network, set) {
  await network.evolve(set, {
    iterations: 10,
    elitism: 2,
    mutationRate: 0.3
  });
}