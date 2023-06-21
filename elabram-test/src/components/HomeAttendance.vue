<script>
export default {

}
</script>

<template>
    <div
        class="h-[181px] p-[16px] my-[16px] bg-white flex flex-col items-center border border-primary-border shadow-sm rounded-md">
        <div class="w-full flex justify-between items-center pb-4 border-b border-primary-border">
            <h1 class="font-bold">Today’s Attendance</h1>
        </div>
        <div class="flex flex-row">
            <div class="mr-[5.5px]">
                <div
                class="h-[91px] w-[150px] p-[20px] my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md relative">
                <div class="bg-warning-green h-[6px] absolute top-0 left-0 w-full rounded-t-md"></div>
                <div class="flex flex-col justify-between ">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Clock In</h1>
                        <h1 class="text-black font-bold">07:07</h1>
                    </div>
                </div>
            </div>
            <div class="ml-[5.5px]">
                <div
                    class="h-[91px] w-[150px] p-[20px] my-[12px] bg-white flex flex-col items-left border border-primary-border shadow-sm rounded-md relative">
                    <div class="bg-warning-red h-[6px] absolute top-0 left-0 w-full rounded-t-md"></div>
                    <div class="flex flex-col justify-between">
                        <h1 class="text-primary-gray-3 text-sm mb-[12px]">Clock Out</h1>
                        <h1 class="text-black font-bold">18:00</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
