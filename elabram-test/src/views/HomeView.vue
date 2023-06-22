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
  data() {
    return {
      isLargeScreen: false
    };
  },
  mounted() {
    this.checkScreenSize(); // Initial check

    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isLargeScreen = window.innerWidth >= 1024;
    }
  }
};
</script>

<template>
  <HomeHeader />
  <main class="p-[16px] bg-primary-gray-2">
    <div v-if="!isLargeScreen">
      <HomeProfile />
      <HomeSummary />
      <HomeAttendance />
      <HomeTaskDueSoon />
    </div>
    <div v-if="isLargeScreen" class="flex flex-row">
      <div class="flex flex-col w-[1219px] mr-12px">
        <HomeSummary />
        <HomeTaskDueSoon />
      </div>
      <div class="flex flex-col w-[597px] ml-[12px]">
        <HomeProfile />
        <HomeAttendance />
      </div>
    </div>
  </main>
</template>
