<script>
export default {

}
</script>

<template>
    <div
        class="p-[16px] my-[16px] bg-white flex flex-col items-center border border-primary-border shadow-sm rounded-md">
        <div class="w-full flex justify-between items-center pb-4">
            <h1 class="font-bold text-primary-gray-4">Attendance Summary</h1>
        </div>
        <div>
            <img src="../assets/home/graph1.png" class="lg:h-[291px] lg:w-full">
        </div>
        <div class="flex flex-row justfify-between">
            <div class="mr-[5.5px]">
                <div
                    class="h-[91px] w-[150px] p-[12px] my-[12px] bg-white flex flex-row items-left border border-primary-border shadow-sm rounded-md relative">
                    <div class="bg-primary-600 w-[5px] h-full absolute top-0 left-0  rounded-l-md"></div>
                    <div class="flex flex-col justify-between ">
                        <h1 class="text-primary-gray-3 text-xs mb-[12px] pr-[12px]">Total Working Days</h1>
                        <h1 class="text-black font-bold">237 Day(s)</h1>
                    </div>
                    <img src="../assets/home/Info.svg" alt="info svg" class="h-[14px]">
                </div>
                <div
                    class="h-[91px] w-[150px] p-[12px] my-[12px] bg-white flex flex-row items-left border border-primary-border shadow-sm rounded-md relative">
                    <div class="bg-primary-250 w-[5px] h-full absolute top-0 left-0  rounded-l-md"></div>
                    <div class="flex flex-col justify-between ">
                        <h1 class="text-primary-gray-3 text-xs mb-[12px] pr-[12px]">Total Working Days</h1>
                        <h1 class="text-black font-bold">237 Day(s)</h1>
                    </div>
                    <img src="../assets/home/Info.svg" alt="info svg" class="h-[14px]">
                </div>
            </div>
            <div class="ml-[5.5px]">
                <div
                    class="h-[91px] w-[150px] p-[12px] my-[12px] bg-white flex flex-row items-left border border-primary-border shadow-sm rounded-md relative">
                    <div class="bg-primary-350 w-[5px] h-full absolute top-0 left-0  rounded-l-md"></div>
                    <div class="flex flex-col justify-between ">
                        <h1 class="text-primary-gray-3 text-xs mb-[12px] pr-[12px]">Total Working Days</h1>
                        <h1 class="text-black font-bold">237 Day(s)</h1>
                    </div>
                    <img src="../assets/home/Info.svg" alt="info svg" class="h-[14px]">
                </div>
                <div
                    class="h-[91px] w-[150px] p-[12px] my-[12px] bg-white flex flex-row items-left border border-primary-border shadow-sm rounded-md relative">
                    <div class="bg-error w-[5px] h-full absolute top-0 left-0  rounded-l-md"></div>
                    <div class="flex flex-col justify-between ">
                        <h1 class="text-primary-gray-3 text-xs mb-[12px] pr-[12px]">Total Working Days</h1>
                        <h1 class="text-black font-bold">237 Day(s)</h1>
                    </div>
                    <img src="../assets/home/Info.svg" alt="info svg" class="h-[14px]">
                </div>
            </div>
        </div>
    </div>
</template>
