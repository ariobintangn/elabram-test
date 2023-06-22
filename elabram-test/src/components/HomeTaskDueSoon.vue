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
        class="h-[409px] p-[16px] my-[16px] bg-white flex flex-col items-center border border-primary-border shadow-sm rounded-md">
        <div class="w-full flex justify-between items-center pb-4 border-b border-primary-border">
            <h1 class="font-bold">Task Due Soon</h1>
            <div
                class="h-[48px] w-[97px] p-[12px] bg-white flex flex-row justify-evenly items-center shadow-sm rounded-md font-bold">
                <h1 class="text-primary-600 text-xs">See All</h1>
                <img src="../assets/home/search-24px (1).svg" />
            </div>
        </div>
        <div class="flex flex-col justfify-center lg:w-full">
            <div
                class="h-[83px] w-[311px] lg:w-full px-[12px] py-[8px] my-[12px] flex items-left border border-primary-border shadow-sm rounded-md">
                <div class="flex flex-col lg:flex-row justify-between lg:w-full">
                    <div class="flex flex-col pt-[5px]">
                        <div>
                            <h1 class="text-primary-gray-3 text-xs">UI/UX Designer</h1>
                        </div>
                        <div>
                            <h1 class="text-black text-sm">[WMS][Web][Task] Create Goals design</h1>
                        </div>
                    </div>
                    <div class="flex items-center ml-2">
                        <div class="flex flex-row mr-2">
                            <img src="../assets/home/attach-1.svg"/>
                            <p class="text-primary-gray-3 text-xs">44</p>
                        </div>
                        <div class="flex flex-row mr-2">
                            <img src="../assets/home/Comments-1.svg"/>
                            <p class="text-primary-gray-3 text-xs"></p>
                        </div>
                        <p class="bg-warning-green-2 text-warning-green rounded-sm text-xs mr-2">Medium</p>
                        <p class="text-primary-gray-3 text-xs">06 Aug 2021</p>
                    </div>
                </div>
            </div>
            <div
                class="h-[83px] w-[311px] lg:w-full px-[12px] py-[8px] my-[12px] flex items-left border border-primary-border shadow-sm rounded-md">
                <div class="flex flex-col lg:flex-row justify-between lg:w-full">
                    <div class="flex flex-col pt-[5px]">
                        <div>
                            <h1 class="text-primary-gray-3 text-xs">UI/UX Designer</h1>
                        </div>
                        <div>
                            <h1 class="text-black text-sm">[WMS][Web][Task] Create Goals design</h1>
                        </div>
                    </div>
                    <div class="flex items-center ml-2">
                        <div class="flex flex-row mr-2">
                            <img src="../assets/home/attach-1.svg"/>
                            <p class="text-primary-gray-3 text-xs">44</p>
                        </div>
                        <div class="flex flex-row mr-2">
                            <img src="../assets/home/Comments-1.svg"/>
                            <p class="text-primary-gray-3 text-xs"></p>
                        </div>
                        <p class="bg-warning-green-2 text-warning-green rounded-sm text-xs mr-2">Medium</p>
                        <p class="text-primary-gray-3 text-xs">06 Aug 2021</p>
                    </div>
                </div>
            </div>
            <div
                class="h-[83px] w-[311px] lg:w-full px-[12px] py-[8px] my-[12px] flex items-left border border-primary-border shadow-sm rounded-md">
                <div class="flex flex-col lg:flex-row justify-between lg:w-full">
                    <div class="flex flex-col pt-[5px]">
                        <div>
                            <h1 class="text-primary-gray-3 text-xs">UI/UX Designer</h1>
                        </div>
                        <div>
                            <h1 class="text-black text-sm">[WMS][Web][Task] Create Goals design</h1>
                        </div>
                    </div>
                    <div class="flex items-center ml-2">
                        <div class="flex flex-row mr-2">
                            <img src="../assets/home/attach-1.svg"/>
                            <p class="text-primary-gray-3 text-xs">44</p>
                        </div>
                        <div class="flex flex-row mr-2">
                            <img src="../assets/home/Comments-1.svg"/>
                            <p class="text-primary-gray-3 text-xs"></p>
                        </div>
                        <p class="bg-warning-green-2 text-warning-green rounded-sm text-xs mr-2">Medium</p>
                        <p class="text-primary-gray-3 text-xs">06 Aug 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
