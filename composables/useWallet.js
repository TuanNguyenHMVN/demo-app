import { ref } from 'vue';
export const useWallet = () => {
  const walletAddress = ref('')
  const setWalletAddress = (address) => {
      walletAddress.value = address
  };

  return {
    walletAddress,
    setWalletAddress,
  };
};
