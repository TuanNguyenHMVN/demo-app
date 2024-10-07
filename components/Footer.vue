<template>
  <div class="container">
    <b-row class="d-flex align-items-center">
      <b-col md="3" sm="12">
        <div class="d-sm-none d-md-flex align-items-center menu-links">
          <a href="/" class="home-link">
            Home
          </a>
          <a href="/staking" class="staking-link">
            Staking
          </a>
          <a href="/faq" class="faq-link">
            FAQs
          </a>
        </div>
        <div class="d-sm-block d-md-none text-center">
          <span class="site-name font-64">
          stakestark_
          </span><br/>
          <span class="subtitle font-14">
            starknet's to-go
          </span>
          <span class="highlight-text font-14">
            liquid staking protocol
          </span>
        </div>
      </b-col>
      <b-col md="6" class="text-center">
        <div class="d-sm-flex d-md-none align-items-center menu-links justify-content-center pt-4 pb-4">
          <a href="/" class="home-link">
            Home
          </a>
          <a href="/staking" class="staking-link">
            Staking
          </a>
          <a href="/faq" class="faq-link">
            FAQs
          </a>
        </div>
        <div class="d-sm-none d-md-block">
          <span class="site-name font-64">
          stakestark_
          </span><br/>
          <span class="subtitle font-14">
            starknet's to-go
          </span>
          <span class="highlight-text font-14">
            liquid staking protocol
          </span>
        </div>
      </b-col>
      <b-col md="3" class="text-center">
        <i class="bi bi-telegram telegram-icon social-icon font-24"></i>
        <i class="bi bi-twitter-x social-icon font-24"></i>
      </b-col>
      <b-col md="12">
        <div class="text-center authorship">
        <i class="bi bi-c-circle"></i>
        <span>
          2024 StakeStark. All Rights reserved.
        </span>
      </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .menu-links {
    a {
      padding: 0 15px;
      text-decoration: none;
      color: #0F0B46;
      line-height: 12px;
    }
    .home-link, .staking-link {
      border-right: 2px solid #0F0B46;
    }
  }
  .site-name {
    font-family: 'Fredoka', sans-serif;
    font-weight: 100;
    color: #0F0B46;
  }
  .subtitle {
    color: #0F0B46;
  }
  .highlight-text {
      color: #c988a0;
    }
    .text-description {
      margin-left: -10px;
    }
  .telegram-icon {
    margin-right: 10px;
  }
  .authorship {
    border-top: 1px solid #ccc;
    margin-top: 15px;
    padding: 15px 0px;
  }
  .social-links {
    text-align: right;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    .site-name {
      font-size: 40px !important;
    }
    .menu-links, .authorship, .subtitle, .highlight-text {
      font-size: 12px !important;
    }
  }
  @media screen and (max-width: 768px) {
    .social-icon {
      font-size: 32px !important;
    }
  }
</style>