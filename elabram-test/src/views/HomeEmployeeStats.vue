<script>
import LoginRegisterHeader from '../components/LoginRegisterHeader.vue';
import HomeHeader from '../components/HomeHeader.vue';
import EmployeeStatsEmployeeSummary from '../components/EmployeeStatsEmployeeSummary.vue';
import EmployeeStatsAttendanceSummary from '../components/EmployeeStatsAttendanceSummary.vue';
import EmployeeStatsAttendanceCompleteness from '../components/EmployeeStatsAttendanceCompleteness.vue'
import EmployeeStatsTaskProgress from '../components/EmployeeStatsTaskProgress.vue'
import EmployeeStatsTaskCompletionInAllProject from '../components/EmployeeStatsTaskCompletionInAllProject.vue'
import EmployeeStatsLeaveRecap from '../components/EmployeeStatsLeaveRecap.vue'
import Graph1 from '../components/Graph1.vue'

export default {
  components: {
    HomeHeader,
    EmployeeStatsEmployeeSummary,
    EmployeeStatsAttendanceSummary,
    EmployeeStatsAttendanceCompleteness,
    EmployeeStatsTaskProgress,
    EmployeeStatsTaskCompletionInAllProject,
    EmployeeStatsLeaveRecap,
    Graph1,
  },
};
</script>

<template>
  <HomeHeader />
  <main class="p-[16px] bg-primary-gray-2">
    <EmployeeStatsEmployeeSummary />
    <div class="lg:flex lg:flex-row lg:h-[564px] w-full">
      <EmployeeStatsAttendanceSummary class="lg:w-2/3 lg:mr-3 flex-grow" />
      <EmployeeStatsAttendanceCompleteness />
    </div>
    <div class="lg:flex lg:flex-row lg:h-[564px]">
      <EmployeeStatsTaskProgress class="lg:mr-3 lg:w-1/3" />
      <EmployeeStatsTaskCompletionInAllProject class="lg:w-2/3"/>
    </div>
    <EmployeeStatsLeaveRecap />
    <Graph1 />
  </main>
</template>
