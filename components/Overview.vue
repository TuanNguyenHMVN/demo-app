<template>
  <b-row class="overview-wrapper">
    <b-col md="8" offset-md="2">
      <b-row>
        <b-col md="12" class="text-center">
          <span class="title">Your Staking Overview</span><br/>
          <span class="sub-title">
            Track your staked assets, earned rewards, and manage your dstSTRK tokens—all in one place.
          </span>
        </b-col>
        <b-col md="12">
          <b-row class="staking-info-wrapper">
            <b-col md="6" class="staking-info">
              <div class="stake-number">
                  123,334
                </div>
                <div class="stake-label">
                  Total staked <img src="/assets/images/starknet-icon.png"/>
              </div>
            </b-col>
            <b-col md="6" class="staking-info">
              <div class="stake-number">
              $1750
            </div>
            <div class="stake-label">
              Rewards earned
            </div>
            </b-col>
            <b-col md="6" class="staking-info">
              <div class="stake-number">
                123,334
              </div>
              <div class="stake-label">
                dstSTRK balance
              </div>
            </b-col>
            <b-col md="6" class="staking-info">
              <div class="stake-number">
                123,334
              </div>
              <div class="stake-label">
                Unstakeable amount
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
export default {
  setup() {

  }
}
</script>
<style lang="scss">
  .overview-wrapper {
    padding: 30px;
    margin: auto;
    .staking-info-wrapper {
      gap: 10px;
      margin-top: 30px;
    }
    .title {
      font-size: 48px;
    }
    .sub-title {
      font-size: 14px;
    }
    .staking-info {
      background-color: white;
      box-shadow: 0 -10px 30px -10px rgba(0, 0, 0, 0.5);
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1 1 calc(50% - 10px);
      .stake-label {
        color: #57547e;
        img {
          width: 20px;
        }
      }
      .stake-number {
        font-size: 32px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .title {
      font-size: 40px;
    }
    .sub-title {
      font-size: 16px;
    }
  }
</style>