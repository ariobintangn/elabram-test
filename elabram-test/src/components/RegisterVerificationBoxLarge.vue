<script>
export default {

}
</script>

<template>
    <div class="h-[454px] w-[850px]  flex flex-col p-12 2xl:p-36 relative top-1/2 transform -translate-y-1/2">
        <div class="h-1/4">
            <img src="../assets/axdif-logo.svg" class=" w-48 mb-10" />
        </div>
        <div class="h-3/4 flex flex-col bg-green-500 font-bold">
            <div class="h-1/3 bg-yellow-500 flex flex-row items-center">
                <img src="../assets//img-1.svg" class="w-1/4" />
                <div class="flex flex-col w-1/4">
                    <span class="text-left ml-2">Verify your account</span>
                    <span class="text-left ml-2 font-normal text-sm">A verification link has been sent to your email
                        account</span>
                </div>
                <div class="w-1/2"></div>
            </div>
            <div class="h-1/3 bg-yellow-500 flex flex-row items-center">
                <div class="w-1/4 h-full relative transform left-1/4 -translate-x-1/2">
                    <p class="w-1/2 h-1/2 border-l border-b border-black">x</p>
                </div>
                <img src="../assets//img-2.svg" />
                <div class="flex flex-col">
                    <span class="text-left ml-2">Verify your account</span>
                    <span class="text-left ml-2 font-normal text-sm">A verification link has been sent to your email
                        account</span>
                </div>
                <div class="w-1/4 bg-red-300">x2</div>
            </div>
            <div class="h-1/3 bg-yellow-500 flex flex-row items-center">
                <div class="w-1/4 bg-red-300">x</div>
                <div class="w-1/4 bg-red-300">x2</div>
                <img src="../assets//img-3.svg" />
                <div class="flex flex-col">
                    <span class="text-left ml-2">Verify your account</span>
                    <span class="text-left ml-2 font-normal text-sm">A verification link has been sent to your email
                        account</span>
                </div>
            </div>
            <button class="bg-primary-orange hover:bg-orange-800 text-white rounded-md h-10 w-24 my-2 self-center">
                <router-link to="/login">Login to Axdif</router-link>
            </button>
        </div>

    </div>
</template>

