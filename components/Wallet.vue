<template>
  <div class="wallet-wrapper container">
    <div class="wallet">
      <b-row>
        <b-col md="12" class="wallet-label">
          Available To Stake
        </b-col>
        <b-col md="12" class="available-to-stake-input">
          123,334
        </b-col>
        <b-col md="12" class="wallet-label">
          Available To Stake
        </b-col>
        <b-col md="12" class="amount-to-stake-input">
          123,334
        </b-col>
        <b-col md="12" class="wallet-label">
          Available To Stake
        </b-col>
        <b-col md="12" class="estimated-reward-input">
          123,334
        </b-col>
        <b-col md="12" class="combo-btn">
          <b-button variant="primary" pill @click="connectWallet">
            Connect Wallet
          </b-button>
          <img src="assets/images/token-icon.png"/>
          <img src="assets/images/wallet-icon.png">
        </b-col>
      </b-row>
    </div>
    {{accountAddress}}
  </div>
</template>
<script setup>
import { ref } from 'vue'

import { Contract, Provider } from 'starknet';

const provider = new Provider({ network: 'mainnet-alpha' }); // Adjust the network if needed

const accountAddress = ref(null);
const connectWallet = async () => {
  if (window.starknet && window.starknet.isConnected) {

    accountAddress.value = window.starknet.selectedAddress;
    console.log('Connected account:', accountAddress.value);
  } else if (window.starknet) {
    await window.starknet.enable();  // Prompts the user to connect their wallet
  } else {
    alert('No StarkNet wallet found. Please install Argent X or Braavos.');
  }
}
</script>
<style lang="scss">
  .wallet-wrapper {
    .wallet {
      border: 1px solid #ccc;
      padding: 20px;
      width: 70%;
      .wallet-label {
        font-weight: 600;
        font-size: 14px;
      }
      .combo-btn {
        img {
          width: 45px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      .wallet {
        margin: auto;
        margin-top: 20px;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
      .wallet {
        width: 100%;
      }
    }
  }
</style>