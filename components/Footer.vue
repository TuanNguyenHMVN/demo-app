<template>
  <div class="footer-container">
    <div class="md-footer d-flex align-items-center justify-content-space-around">
      <div class="menu-links footer-links text-center">
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
      <div class="footer-site-name text-center">
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
      <div class="text-right footer-social">
        <i class="bi bi-telegram telegram-icon social-icon font-24"></i>
        <i class="bi bi-twitter-x social-icon font-24"></i>
      </div>
    </div>
    <div class="sm-footer d-flex flex-column align-items-center justify-content-center">
      <div class="text-center">
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
      <div class="text-center footer-links">
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
      <div class="text-right footer-social">
        <i class="bi bi-telegram telegram-icon social-icon font-24"></i>
        <i class="bi bi-twitter-x social-icon font-24"></i>
      </div>
    </div>
    <div class="text-center authorship">
      <i class="bi bi-c-circle"></i>
      <span>
        2024 StakeStark. All Rights reserved.
      </span>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .footer-links {
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
  .md-footer {
    .footer-site-name {
      width: 50%;
    }
    .footer-social, .menu-links {
      width: 25%;
      text-align: center;
    }
  }
  .sm-footer {
    .footer-links {
      margin: 20px auto;
    }
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
    .md-footer {
      display: none !important;
    }
    .social-icon {
      font-size: 32px !important;
    }
  }
  @media screen and (max-width: 575.98px) {
    .sm-hide {
      display: none !important;
    }
  }
  @media screen and (min-width: 768px) {
    .sm-footer {
      display: none !important;
    }
  }
</style>