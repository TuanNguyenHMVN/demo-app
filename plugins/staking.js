// plugins/stakingPlugin.js
import { defineNuxtPlugin } from '#app';
import { useStakingContract } from '../composables/useStakingContract';

export default defineNuxtPlugin((nuxtApp) => {
  // Here you can use your composable
  const { stakeTokens, withdrawTokens, claimRewards } = useStakingContract();

  // Example of adding it to the nuxt app context
  nuxtApp.provide('stakingContract', {
    stakeTokens,
    withdrawTokens,
    claimRewards,
  });
});
