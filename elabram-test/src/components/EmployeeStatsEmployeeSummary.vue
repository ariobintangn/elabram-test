<script>
export default {

}
</script>
<template>
    <div class="flex flex-col lg:flex-row lg:justify-between">
        <h1 class="mb-[15px] font-bold text-lg">Employee Summary</h1>
        <div class="flex flex-row h-[30px] items-center justify-between md:justify-end text-center gap-2">
            <h1 class="whitespace-nowrap text-[12px]">Display Data in</h1>
            <div class="flex flex-row">

                <button
                class="h-[29px] w-[70px] px-[12px] py-[6px] bg-white border-l border-y border-primary-border shadow-sm rounded-l-md text-[12px]">Monthly</button>
                <button
                class="h-[29px] w-[58px] px-[12px] py-[6px] bg-primary-600 flex flex-col items-left border border-primary-border shadow-sm rounded-r-md text-[12px] text-white">Yearly</button>
            </div>
            <h1 class="text-sm">Periode</h1>
            <div
                class="h-[29px] w-[79px] px-[12px] py-[6px] bg-white flex flex-row justify-between items-center border border-primary-border shadow-sm rounded-md font-bold text-[12px]">
                <h1>2022</h1>
                <img src="../assets/home/Group 1048.svg" class="h-[15px]"/>
            </div>
        </div>
    </div>
</template>
