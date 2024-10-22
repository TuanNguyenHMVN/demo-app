import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { contract } from '../utils/starknet' // Import your contract instance

export const useStarknetStore = defineStore('starknet', () => {
  const address = ref('')
  const balance = ref(0)

  const connectWallet = async () => {
    // Implement wallet connection logic here
    const walletAddress = await connect() // Replace with actual wallet connection logic
    address.value = walletAddress
    await fetchBalance()
  }

  const fetchBalance = async () => {
    try {
      const bal = await contract.getBalance(address.value)
      balance.value = bal
    } catch (error) {
      console.error('Failed to fetch balance', error)
    }
  }

  const stake = async (amount) => {
    try {
      const tx = await contract.stake(amount)
      await tx.wait() // Wait for the transaction to be mined
      await fetchBalance() // Update balance after staking
      alert('Stake successful!')
    } catch (error) {
      console.error('Staking failed', error)
      alert('Staking failed: ' + error.message)
    }
  }

  const withdraw = async (amount) => {
    try {
      const tx = await contract.withdraw(amount)
      await tx.wait() // Wait for the transaction to be mined
      await fetchBalance() // Update balance after withdrawing
      alert('Withdrawal successful!')
    } catch (error) {
      console.error('Withdrawal failed', error)
      alert('Withdrawal failed: ' + error.message)
    }
  }

  return { address, balance, connectWallet, fetchBalance, stake, withdraw }
})
