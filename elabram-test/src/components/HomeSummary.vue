<script>
export default {
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
}
</script>

<template>
    <div
        class="h-[398px] p-[16px] my-[16px] bg-white flex flex-col items-center border border-primary-border shadow-sm rounded-md">
        <div class="w-full flex justify-between items-center pb-4 border-b border-primary-border">
            <h1 class="font-bold">Summary</h1>
            <h1 class="text-sm  text-right mr-2 w-full" v-if="isLargeScreen">Periode</h1>
            <div
                class="h-[48px] w-[150px] p-[12px] bg-white flex flex-row justify-between items-center border border-primary-border shadow-sm rounded-md font-bold">
                
                <h1 class="text-xs">November 2022</h1>
                <img src="../assets/home/Group 1048.svg" />
            </div>
        </div>


        <div class="flex flex-row justfify-between" v-if="!isLargeScreen">
            <div class="mr-[5.5px]">
                <div
                    class="h-[91px] w-[150px] p-[20px] my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Working Day(s)</h1>
                        <h1 class="text-black font-bold">2 Day(s)</h1>
                    </div>
                </div>
                <div
                    class="h-[91px] w-[150px] p-[20px] my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Working Hour(s)</h1>
                        <h1 class="text-black font-bold">13 hr 14 min</h1>
                    </div>
                </div>
                <div
                    class="h-[91px] w-[150px] p-[20px] my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Exc. Attendance</h1>
                        <h1 class="text-black font-bold">0 Day(s)</h1>
                    </div>
                </div>
            </div>
            <div class="ml-[5.5px]">
                <div
                    class="h-[91px] w-[150px] p-[20px] my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Leave Taken</h1>
                        <h1 class="text-black font-bold">0 Day(s)</h1>
                    </div>
                </div>
                <div
                    class="h-[91px] w-[150px] p-[20px] my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Overtime</h1>
                        <h1 class="text-black font-bold">00 hr 00 min</h1>
                    </div>
                </div>
                <div
                    class="h-[91px] w-[150px] p-[20px] my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Claim</h1>
                        <h1 class="text-black font-bold">IDR 0</h1>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex flex-col justfify-between w-full h-full" v-if="isLargeScreen">
            <div class="flex flex-row">
                <div
                    class="h-[115px] p-[20px] w-1/3 mt-6 my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Working Day(s)</h1>
                        <h1 class="text-black font-bold">2 Day(s)</h1>
                    </div>
                </div>
                <div
                    class="h-[115px] p-[20px] w-1/3 mt-6 my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Working Hour(s)</h1>
                        <h1 class="text-black font-bold">13 hr 14 min</h1>
                    </div>
                </div>
                <div
                    class="h-[115px] p-[20px] w-1/3 mt-6 my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Exc. Attendance</h1>
                        <h1 class="text-black font-bold">0 Day(s)</h1>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div
                    class="h-[115px] p-[20px] w-1/3 mt-6 my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Leave Taken</h1>
                        <h1 class="text-black font-bold">0 Day(s)</h1>
                    </div>
                </div>
                <div
                    class="h-[115px] p-[20px] w-1/3 mt-6 my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Overtime</h1>
                        <h1 class="text-black font-bold">00 hr 00 min</h1>
                    </div>
                </div>
                <div
                    class="h-[115px] p-[20px] w-1/3 mt-6 my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md">
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Claim</h1>
                        <h1 class="text-black font-bold">IDR 0</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
