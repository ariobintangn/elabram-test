<script>
import LoginRegisterHeader from '../components/LoginRegisterHeader.vue';
import HomeHeader from '../components/HomeHeader.vue';
import EmployeeStatsEmployeeSummary from '../components/EmployeeStatsEmployeeSummary.vue';
import EmployeeStatsAttendanceSummary from '../components/EmployeeStatsAttendanceSummary.vue'; 

export default {
  components: {
    HomeHeader,
    EmployeeStatsEmployeeSummary,
    EmployeeStatsAttendanceSummary,
  },
};
</script>

<template>
  <HomeHeader />
  <main class="p-[16px] bg-primary-gray-2">
    <EmployeeStatsEmployeeSummary />
    <EmployeeStatsAttendanceSummary />
  </main>
</template>
