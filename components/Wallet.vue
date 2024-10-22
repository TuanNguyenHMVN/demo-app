<template>
  <div class="wallet-wrapper container">
    <div class="combo-btn-wrapper">
      <div class="stake-withdraw-btn d-flex align-items-center">
        <b-button :variant="isStake ? 'primary' : 'secondary'" @click="onChangeAction('Stake')">
            Stake
          </b-button>
          <b-button :variant="isWithdraw ? 'primary' : 'secondary'" @click="onChangeAction('Withdraw')">
            Withdraw
          </b-button> 
      </div>
    </div>
    <div class="wallet">
      <b-row>
        <div v-if="isWithdraw" class="withdraw-combo-btn mb-3">
          <b-button :variant="isRequest ? 'primary' : 'secondary'"  @click="onChangeWithdrawAction('Request')">
              Request
            </b-button>
            <b-button :variant="isClaim ? 'primary' : 'secondary'"  @click="onChangeWithdrawAction('Claim')">
              Claim
            </b-button> 
        </div>
        <div>
          <b-col md="12" class="wallet-label">
            {{ isStake ? "Available To Stake" : "Available Funds" }}
          </b-col>
          <b-col md="12" class="available-to-stake-input d-flex align-items-center justify-content-between">
            <div>
              213.00 STRK
            </div>
            <div v-if="walletAddress" class="token-address">
              {{`${walletAddress.slice(0,5)}...${walletAddress.slice(-3)}`}} <img src='../assets/images/helmet_icon.png' />
            </div>
          </b-col>
          <b-col md="12" class="count-request">
            <i class="bi bi-check-circle"></i> 2 <span>Ready To Claim</span> | <i class="bi bi-clock clock-icon"></i> 5 <span>Pending</span>
          </b-col>
          <b-col md="12" class="wallet-label">
            {{isStake ? "Available To Stake" : "Available To Withdraw"}}
          </b-col>
          <b-col md="12" class="amount-to-stake-input d-flex align-items-center justify-content-between">
            <div>
              $0.00
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <div class="max-stake-btn">
                <b>Max.</b>
              </div>
              <img src="/assets/images/starknet-icon.png"/>
              <span>STRK</span>
            </div>
          </b-col>
          <b-col v-if="isStake" md="12" class="wallet-label">
            Available To Stake
          </b-col>
          <b-col v-if="isStake" md="12" class="estimated-reward-input d-flex align-items-center justify-content-between">
            <div>
              ---
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <img src="/assets/images/starknet-icon.png"/>
              <span>dstSTRK</span>
            </div>
          </b-col>
        </div>
        <b-col md="12" class="combo-btn">
          <b-button v-if="!isConnected" variant="primary" pill @click="connectWallet">
            Connect Wallet
          </b-button>
          <b-button v-if="isStake && isConnected" variant="primary" pill @click="stake">
            Stake Now
          </b-button>
          <b-button v-if="isWithdraw && isConnected" variant="primary" pill @click="stake">
            Withdraw Now
          </b-button>
          <img v-if="!isConnected" src="assets/images/token-icon.png"/>
          <img v-if="!isConnected" src="assets/images/wallet-icon.png">
        </b-col>
        <div v-if="isWithdraw" class="description">
          <i>
            *Please note that unstaking might take some time due to network conditions. Your staking rewards will stop accruing once the unstaking process begins.
          </i>
        </div>
      </b-row>
    </div>
  </div>
</template>
<script setup>
import { useStarknetStore } from '../store/useStarknetStore'

import { useWallet } from '~/composables/useWallet';
import { ref } from 'vue'

const store = useStarknetStore()
const { address, connectWallet } = store;
// return { address, connectWallet }

// const { stakeTokens, claimRewards, withdrawTokens } = useStakingContract();
const isConnected = ref(false)
const isStake = ref(true)
const isWithdraw = ref(false)
const isRequest = ref(false)
const isClaim = ref(false)

const { walletAddress, setWalletAddress } = useWallet();


const connect = async () => {
    if (window.starknet && window.starknet.isConnected) {
      isConnected.value = true;
      setWalletAddress(window.starknet.selectedAddress);
    } else if (window.starknet) {
      await window.starknet.enable();  // Prompts the user to connect their wallet
    } else {
      alert('No StarkNet wallet found. Please install Argent X or Braavos.');
    }
}

const onChangeAction = (action) => {
  isStake.value = action === 'Stake';
  isWithdraw.value = action === 'Withdraw';
  isRequest.value = action === 'Withdraw';
  isClaim.value = false;
}

const onChangeWithdrawAction = (action) => {
  isRequest.value = action === 'Request';
  isClaim.value = action === 'Claim';
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
        padding: 0;
        margin-bottom: 5px;
      }
      .combo-btn {
        img {
          width: 45px;
        }
      }
      .available-to-stake-input {
        background: #ededf6;
        padding: 10px 10px;
        margin-bottom: 10px;
      }
      .token-address {
        background: #e4e4e4;
        border-radius: 15px;
        padding: 5px 15px;
        font-size: 13px;
        display: flex;
        align-items: center;
        img {
          height: 15px;
          width: 15px;
          margin-left: 5px;
        }
      }
      .amount-to-stake-input, .estimated-reward-input {
        margin-bottom: 10px;
        border: 1px solid #e4e4e4;
        padding: 5px 15px;
        .max-stake-btn {
          background: #e4e4e4;
          padding: 5px 15px;
          border-radius: 20px;
          margin-right: 10px;
        }
        img {
          height: 25px;
          margin-right: 10px;
        }
      }
      .estimated-reward-input {
        padding: 10px;
      }
      .description {
        font-size: 12px;
      }
      .count-request {
        margin-bottom: 10px;
        margin-top: 10px;
        span {
          font-size: 12px;
        }
      }
      .withdraw-combo-btn {
        padding: 0;
        background: #E4E4EA;
        width: fit-content;
        border-radius: 25px;
        button {
          border-radius: 25px;
          padding: 10px 15px;
          border: none;
          width: 80px;
        }
      }
    }
    .clock-icon {
      margin-left: 10px;
    }
    .stake-withdraw-btn {
      background: #E4E4EA;
      width: fit-content;
      border-radius: 25px;
      margin-bottom: 10px;
      button {
        border-radius: 25px;
        padding: 10px 25px;
        border: none;
        width: 110px;
      }
    }
    @media screen and (max-width: 768px) {
      .wallet {
        margin: auto;
        margin-top: 20px;
      }
      .combo-btn-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        .stake-withdraw-btn {
          margin-bottom: 0;
        }
      }
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
      .wallet {
        width: 100%;
      }
    }
  }
</style>