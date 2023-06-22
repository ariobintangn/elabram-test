<script>
export default {

}
</script>

<template>
    <div class="border-primary-border">
        <div class="flex flex-col mx-[100px] my-[128px]">
            <div class="h-1/4">
                <img src="../assets/axdif-logo.svg" class=" h-[48px] mb-[132px]" />
            </div>
            <div class="flex flex-col bg-white font-bold h-[452px]">
                <div class="h-1/3 flex flex-row items-center">
                    <img src="../assets//img-1.svg" class="h-[120px]" />
                    <div class="flex flex-col w-1/4">
                        <span class="text-left ml-2">Verify your account</span>
                        <span class="text-left ml-2 font-normal text-sm">A verification link has been sent to your email
                            account</span>
                    </div>
                    <div class="w-1/2"></div>
                </div>
                <div class="h-1/3 flex flex-row items-center">
                    <div class="w-1/4 h-full relative transform left-1/4 -translate-x-1/2 mr-[24px]">
                        <img src="../assets/dashed-line.png" class="h-[80px]">
                    </div>
                    <img src="../assets/img-2.svg" class="h-[120px] -translate-x-8" />
                    <div class="flex flex-col">
                        <span class="text-left">Login to your account</span>
                        <span class="text-left font-normal text-sm">Login to your Axdif account
                            account</span>
                    </div>
                    <div class="w-1/4"></div>
                </div>
                <div class="h-1/3 flex flex-row items-center">
                    <div class="w-1/4"></div>
                    <div class="w-1/4 h-full relative transform left-1/4 -translate-x-3/4 mr-[46px]">
                        <img src="../assets/dashed-line.png" class="h-[80px]">
                    </div>
                    <img src="../assets/img-3.svg" class="h-[120px] z-50" />
                    <div class="flex flex-col mr-[90px]">
                        <span class="text-left ml-2">Setup your data</span>
                        <span class="text-left ml-2 font-normal text-sm">Input your employee data and get the ease of
                            managing employee</span>
                    </div>

                </div>
            </div>
            <button class="bg-primary-orange hover:bg-orange-800 text-white rounded-md h-[29px] w-[150px] my-2 self-center">
                <router-link to="/login">Login to Axdif</router-link>
            </button>

        </div>
        <div class="flex justify-start w-full pl-12">
            <a href="#" class="absolute bottom-2 text-primary-300">© Copyright 2023. All Right Reserved.</a>
        </div>

    </div>
</template>

