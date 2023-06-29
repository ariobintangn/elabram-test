<script>
import RegisterVerificationBoxLarge from './RegisterVerificationBoxLarge.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
export default {
    components: {
        RegisterVerificationBoxLarge,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            verification: false
        };
    },
    methods: {
        toggleVerification() {
            this.verification = !this.verification;
        }
    }, computed: {
        isLg() {
            return window.innerWidth >= 1024;
        },
    }
}
</script>

<template>
    <div class="h-screen flex flex-row container">
        <div class="bg-primary-600 lg:h-[900px] w-1/3">
            <div class="bg-[url('/src/assets/masking.svg')] bg-no-repeat bg-cover h-full">
                <div class="mx-[16px] pt-[153px] pb-[29px] text-3xl font-bold text-white text-center">
                    A few clicks away from being a part of Axdif
                </div>
                <div class="py-2 px-6">
                    <swiper :slides-per-view="1" :space-between="50">
                        <swiper-slide>
                            <img src="/src/assets/illustration-1.svg" class="mb-6" />
                            <div class="text-white text-center">
                                <p class="text-2xl font-bold mb-3">Manage Task Easily & Efficiently</p>
                                <p class="text-sm">Increase employee productivity and performance in a measurable and
                                    precision system in one application.</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/src/assets/illustration-2.svg" class="mb-6" />
                            <div class="text-white text-center">
                                <p class="text-2xl font-bold mb-3">Communication Is Key</p>
                                <p class="text-sm">Connect with your coworkers anywhere like you are in one workspace. Very
                                    simple and fast.</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/src/assets/illustration-3.svg" class="mb-6" />
                            <div class="text-white text-center">
                                <p class="text-2xl font-bold mb-3">Employee Self-Service</p>
                                <p class="text-sm">Simplify the administrative affairs of the company where you work
                                    wherever and whenever. Let’s get started with all these conveniences</p>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>


        <RegisterVerificationBoxLarge v-if="verification" class="w-2/3" />
        <div class="w-2/3 h-[796px]" v-if="!verification">
            <img src="../assets/axdif-logo.svg" class="w-[200px] pt-[141px] mx-[100px] mb-[62px]">
            <div class="h-[px] bg-white  mx-[100px] py-[28px] rounded-lg lg:rounded-none">
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
                        <h1 class="font-bold my-[6px]">Password</h1>
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

                        <h1 class="font-bold my-[6px]">Confirm Password</h1>
                        <div
                            class="flex justify-between h-[37px] border border-primary-200 rounded-lg py-[10px] pl-[12px] text-sm items-center">
                            <input type="password" placeholder="Insert Password" class="" />
                            <img src="../assets/hide-show.svg" class="h-[17px] m-[12px]" />
                        </div>

                    </div>
                </div>
                <div class="ml-[100px] mt-[40px]">© Copyright 2023. All Right Reserved.</div>

            </div>
        </div>

    </div>
</template>
