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
        <div>
          wallet
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
<script>
export default {
  
}
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
      justify-content: space-around;
      padding: 0 30px;
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