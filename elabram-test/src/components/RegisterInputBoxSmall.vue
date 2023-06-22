<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
            verification: false
        };
    },
    methods: {
        toggleVerification() {
            this.verification = !this.verification;
        },
        login(){
            this.$router.push('/login')    
        }
    }, computed: {
        isLg() {
            return window.innerWidth >= 1024;
        },
    },
}
</script>

<template>
    <div class="h-[70px] p-[16px] flex lg:hidden">
        <img src="../assets/axdif-logo.svg" class="h-[40px]">
    </div>
    <div class="bg-primary-600 flex lg:hidden">
        <div class="bg-[url('/src/assets/masking.svg')] bg-no-repeat bg-cover">
            <div class="mx-[16px] pt-[40px] pb-[29px] text-3xl font-bold text-white text-center">A few clicks away from
                being a
                part of Axdif
            </div>
            <div class="h-[796px] bg-white mx-[16px] px-[16px] py-[28px] rounded-lg lg:rounded-none">

                <div v-if="!verification">


                    <h1 class="font-bold text-xl mb-[12px]">Manage all your employee efficiently</h1>
                    <h1 class="text-sm mb-[24px]">Let’s get you all set up so you can verify your personal account and begin
                        setting
                        up your profile</h1>

                    <div class="lg:flex justify-evenly">
                        <div class="w-full mr-2">
                            <h1 class="font-bold my-[6px]">Company Name</h1>
                            <input type="text" placeholder="e.g John"
                                class="border border-primary-200 h-[37px] pl-[12px] text-sm rounded-md w-full" />
                            <h1 class="font-bold my-[6px]">Email</h1>
                            <input type="email" placeholder="e.g john.doe@mail.com"
                                class="border border-primary-200 h-[37px] pl-[12px] text-sm rounded-md w-full" />
                        </div>

                        <div class="w-full lg:ml-2">
                            <h1 class="font-bold my-[6px]">Fullname</h1>
                            <input type="text" placeholder="e.g Doe"
                                class="border border-primary-200 h-[37px] pl-[12px] text-sm rounded-md w-full" />
                            <h1 class="font-bold my-[6px]">Phone Number (Optional)</h1>
                            <div class="flex">
                                <input type="number" placeholder="Country Code"
                                    class="border border-primary-200 h-[37px] pl-[12px] text-sm rounded-md w-1/3 mr-1" />
                                <input type="number" placeholder="e.g 8212345678"
                                    class="border border-primary-200 h-[37px] pl-[12px] text-sm rounded-md w-2/3 ml-1" />
                            </div>
                            <h1 class="font-bold my-[6px]">Password</h1>
                            <div
                                class="flex justify-between h-[37px] border border-primary-200 rounded-lg py-[10px] pl-[12px] text-sm items-center">
                                <input type="password" placeholder="Insert Password" class="" />
                                <img src="../assets/hide-show.svg" class="h-[17px] m-[12px]" />
                            </div>
                            <h1 class="font-bold my-[6px]">Confirm Password</h1>
                            <div
                                class="flex justify-between h-[37px] border border-primary-200 rounded-lg py-[10px] pl-[12px] text-sm items-center">
                                <input type="password" placeholder="Insert Password" class="" />
                                <img src="../assets/hide-show.svg" class="h-[17px] m-[12px]" />
                            </div>
                            <label class="flex items-center my-2 mt-10">
                                <input type="checkbox" class="form-checkbox h-[14px] text-primary-600" />
                                <span class="ml-2 text-primary-900 font-bold text-xs">Yes I want to receive Axdif’s
                                    Newsletter</span>
                            </label>
                            <label class="flex items-center mb-[24px] mr-[12px]">
                                <input type="checkbox" class="form-checkbox text-primary-600 h-[14px]" />
                                <span class="ml-2 text-primary-900 font-bold text-xs">
                                    I have read and accept the <a href="#" class="text-secondary-blue-600 underline">Terms
                                        &amp;
                                        Conditions</a>
                                    and
                                    <a href="#" class="text-secondary-blue-600 underline">Privacy Policy</a></span>
                            </label>

                            <button class=" bg-primary-orange hover:bg-orange-800 text-white rounded-md h-10 w-24 my-2"
                                @click="toggleVerification()">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                <div v-if="verification" class="flex flex-col items-center object-center">
                    <div class="flex flex-col items-center text-center mx-[75px]">
                        <img src="../assets/img-1.svg" class="h-[58px] mb-[10px]">
                        <h1 class="font-bold mb-[7px]">Verify your account</h1>
                        <h1 class="text-primary-gray text-xs">A verification link has been sent to your email account.</h1>
                    </div>
                    <div class="flex flex-col items-center text-center mx-[75px]">
                        <img src="../assets/dashed-line-2.png" class="h-[38px] my-[3px]">
                        <img src="../assets/img-3.svg" class="h-[58px] mb-[10px]">
                        <h1 class="font-bold mb-[7px]">Setup your data</h1>
                        <h1 class="text-primary-gray text-xs">Input your employee data and get the ease of managing
                            employees</h1>
                    </div>
                    <div class="flex flex-col items-center text-center mx-[75px]">
                        <img src="../assets/dashed-line-2.png" class="h-[38px] my-[3px]">
                        <img src="../assets/img-2.svg" class="h-[58px] mb-[10px]">
                        <h1 class="font-bold mb-[7px]">Login to your account</h1>
                        <h1 class="text-primary-gray text-xs">Login your WMS account</h1>
                    </div>
                    <button class=" bg-primary-orange hover:bg-orange-800 text-white rounded-md h-[44px] w-[164px] my-2 mt-[44px]"
                        @click="login()">
                        Login to Axdif
                    </button>
                </div>
            </div>



            <div class="text-white text-sm w-full text-center py-[60px]">© Copyright 2023. All Right Reserved.</div>
        </div>
    </div>
</template>

