export const useStarknetWallet = () => {
  const wallet = ref(null);
  const account = ref(null);
  const connected = ref(false);

  async function connectWallet() {
    if (!process.client) return; // Ensure this runs only client-side

    try {
      const { getStarknet } = await import('starknet'); // Dynamically import StarkNet.js
      const starknet = getStarknet();
      await starknet?.enable({ showModal: true });
      wallet.value = starknet;
      account.value = starknet.selectedAddress;
      connected.value = true;
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  }

  function disconnectWallet() {
    wallet.value = null;
    account.value = null;
    connected.value = false;
  }

  return {
    wallet,
    account,
    connected,
    connectWallet,
    disconnectWallet,
  };
}
