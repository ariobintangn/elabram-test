<script>
import LoginRegisterHeader from '../components/LoginRegisterHeader.vue';
import HomeHeader from '../components/HomeHeader.vue';
import HomeProfile from '../components/HomeProfile.vue';
import HomeSummary from '../components/HomeSummary.vue';
import HomeAttendance from '../components/HomeAttendance.vue'
import HomeTaskDueSoon from '../components/HomeTaskDueSoon.vue'
 

export default {
  components: {
    HomeHeader,
    HomeProfile,
    HomeSummary,
    HomeAttendance,
    HomeTaskDueSoon
  },
};
</script>

<template>
  <HomeHeader />
  <main class="p-[16px] bg-primary-gray-2">
    <HomeProfile />
    <HomeSummary />
    <HomeAttendance />
    <HomeTaskDueSoon />
  </main>
</template>
