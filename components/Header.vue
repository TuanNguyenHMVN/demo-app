<template>
  <div class="header-container">
    <div class="container header-wrapper d-flex align-items-center justify-content-between">
        <div>
        <span class="header-name">
          stakestark_
        </span>
      </div>
      <div class="links-and-wallets">
        <div class="menu-link">
          <nuxt-link to="/home">
            Home
          </nuxt-link>
          <nuxt-link to="/staking">
            Staking
          </nuxt-link>
          <nuxt-link to="/faq">
            FAQs
          </nuxt-link>
        </div>
        <div class="wallet-address d-flex align-items-center">
          <div>
            213.00 STRK | 
          </div>
          <div class="token-address">
            {{`${walletAddress.slice(0,5)}...${walletAddress.slice(-3)}`}} <img src='../assets/images/helmet_icon.png' />
          </div>
        </div>
      </div>
      <div class="menu-dropdown-icon">
        <b-dropdown size="sm" variant="link" toggle-class="text-decoration-none" no-caret>
          <template #button-content>
          <i class="bi bi-list dropdown-icon"></i>
          </template>
          <b-dropdown-item>
            <nuxt-link to="/home">
              Home
            </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <nuxt-link to="/staking">
              Staking
            </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <nuxt-link to="/faq">
              FAQs
            </nuxt-link>
            </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useWallet } from '~/composables/useWallet';
import { ref } from 'vue'

const { walletAddress } = useWallet();

</script>
<style lang="scss">
  .header-container {
    border-bottom: 1px solid #ccc;
    .header-wrapper {
    .header-name {
      font-family: 'Fredoka', sans-serif;
      font-weight: 100;
      font-size: 32px;
      padding-left: 32px;
    }
    .menu-link, .menu-dropdown-icon {
      a {
        color: #0F0B46;
        text-decoration: none;
        padding: 0 15px;
      }
    }
    .links-and-wallets {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 0 30px;
      .wallet-address {
        min-width: 200px;
        display: flex;
        justify-content: space-between;
        border-radius: 20px;
        padding: 0 10px;  
        border: 1px solid #0F0B46;
        .token-address {
          display: flex;
          align-items: center;
          margin-left: 10px;
          img {
            height: 15px;
            width: 15px;
            margin-left: 5px;
          }
        }
      }
    }
    .menu-dropdown-icon {
      display: none;
      .dropdown-icon {
        font-size: 24px;
        color: #0F0B46;
      }
    }
  }
  }
  @media screen and (max-width: 576px) {
    .links-and-wallets {
      display: none !important;
    }
    .menu-dropdown-icon {
      display: block !important;
    }
  }
</style>