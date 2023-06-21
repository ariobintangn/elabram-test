<script>
import LoginRegisterHeader from '../components/LoginRegisterHeader.vue';
import HomeHeader from '../components/HomeHeader.vue';
import HomeProfile from '../components/HomeProfile.vue';
import HomeSummary from '../components/HomeSummary.vue';

export default {
  components: {
    HomeHeader,
    HomeProfile,
    HomeSummary
  },
};
</script>

<template>
  <HomeHeader />
  <main class="p-[16px] bg-primary-gray-2">
    <HomeProfile />
    <HomeSummary />
  </main>
</template>
