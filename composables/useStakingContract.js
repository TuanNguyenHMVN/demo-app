import { Provider, Contract } from 'starknet';

// Replace these with your contract details
const contractAddress = '0x02c6a94ef010654d1a89b56c259dde224de53a64a0a491b7c0bfe8cd7d17ce68';

export const useStakingContract = async () => {
  const { $starknetProvider } = useNuxtApp();

  // const response = await fetch('../constants/data.json')
  const ABI = await response.json()

  const provider = new Provider({ sequencer: { network: 'mainnet-alpha' } });
  const contract = new Contract(ABI, contractAddress, $starknetProvider);

  const stakeTokens = async (amount, account) => {
    const tx = await contract.withdraw(amount).send({ from: account });
    return tx;
  };

  const withdrawTokens = async (amount, account) => {
    const tx = await contract.withdraw(amount).send({ from: account });
    return tx;
  };

  const claimRewards = async (account) => {
    const tx = await contract.claim_reward().send({ from: account });
    return tx;
  };

  return {
    stakeTokens,
    withdrawTokens,
    claimRewards,
  };
};
