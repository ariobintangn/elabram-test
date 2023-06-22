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
        }
    },computed: {
        isLg() {
            return window.innerWidth >= 1024;
        },
    },
}
</script>

<template>
    <div class="flex lg:flex-row flex-col  items-center justify-center">
        <div class="flex bg-white z-10 h-20 py-2 w-full lg:hidden sticky top-0">
            <img src="../assets/axdif-logo.svg" class="w-36 z-10" />
        </div>

        <!-- LEFT DIV/BACKGROUND WHEN SMALL -->
        <div class="w-full h-[920px] lg:w-1/3 bg-primary-600 relative justify-center items-center -z-20">
            <div class="flex justify-center w-full px-[16px] my-[40px]">
                <p class="absolute lg:top-36 text-white xl:text-5xl text-3xl font-bold  text-center">A few clicks away
                    from being a part of Axdif</p>
            </div>
            <img src="../assets/masking.svg" class="absolute inset-0 object-cover bg-no-repeat -z-10 h-full" />
            <img src="../assets/illustration-2.svg"
                class="absolute hidden lg:block left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2" />
            <div class="hidden lg:block flex-col justify-center w-full absolute bottom-48">
                <p class="text-white xl:text-3xl text-xl font-bold px-10 text-center">Communication Is Key</p>
                <p class="text-white text-md px-12 xl:px-16 text-center">Connect with your coworkers anywhere like you are
                    in one workspace. Very simple and fast.</p>
            </div>
            
            <!-- RIGHT DIV AFTER VERIFICATION SMALL -->
            <div class="flex flex-col bg-white mt-24 mx-[16px] mb-12 rounded-md justify-center items-center">
                <div class="flex flex-col justify-center items-center text-center mx-[88px] pt-[18px]">
                    <img src="../assets/img-1.svg" class="h-[57px] mb-[8px]" />
                    <span class="font-bold mb-[6.5px] ">Verify your account</span>
                    <span class="text-xs text-primary-gray">A verification link has been sent to your email account.</span>
                    <img src="../assets/dashed-line-2.png" class="h-12 mt-1" />
                </div>
                <div class="flex flex-col justify-center items-center text-center mx-[88px] pt-[18px]">
                    <img src="../assets/img-3.svg" class="h-[57px] mb-[8px]" />
                    <span class="font-bold mb-[6.5px] ">Verify your account</span>
                    <span class="text-xs text-primary-gray">A verification link has been sent to your email account.</span>
                    <img src="../assets/dashed-line-2.png" class="h-12 mb-2 mt-1" />
                </div>
                <div class="flex flex-col justify-center items-center text-center mx-[88px] pt-[18px]">
                    <img src="../assets/img-2.svg" class="h-[57px] mb-[8px]" />
                    <span class="font-bold mb-[6.5px] ">Login to your account</span>
                    <span class="text-xs text-primary-gray">Login your WMS account</span>
                    <button class=" bg-primary-orange hover:bg-orange-800 text-white rounded-md h-10 w-full my-[28px]">
                        <router-link to="/login">Login to Axdif</router-link></button>
                </div>
            </div>
            <div class="flex justify-center w-full">
                <a href="#" class=" bottom-2 text-white text-sm">© Copyright 2023. All Right Reserved.</a>
            </div>
        </div>



        <!-- RIGHT DIV -->
        <!-- <div class="flex flex-col bg-gray-500 h-auto max-h-full w-11/12 mt-48 lg:mt-0 lg:my-0 lg:mx-0 lg:w-2/3 lg:h-screen border border-primary-border rounded-lg lg:rounded-none container object-contain overflow-auto absolute lg:relative">
  
            <div class="flex flex-col p-2 lg:p-12 2xl:p-36 relative lg:top-1/2 transform lg:-translate-y-1/2">
                <h1 class="lg:text-3xl text-2xl  text-primary-900 my-2"><b>Manage all your employee efficiently</b></h1>
                <h1 class="lg:text-2xl text-primary-900 my-2 text-xs font-bold">Let’s get you all set up so you can verify your personal account
                    and begin setting up your profile</h1>

                <div class="lg:flex justify-evenly">
                    <div class="w-full mr-2">
                        <h1 class="font-bold my-2">Company Name</h1>
                        <input type="text" placeholder="e.g John" class="border border-primary-200 h-9 rounded-md w-full" />
                        <h1 class="font-bold my-2">Email</h1>
                        <input type="email" placeholder="e.g john.doe@mail.com"
                            class="border border-primary-200 h-9 rounded-md w-full" />
                        <h1 class="font-bold my-2">Password</h1>
                        <input type="password" placeholder="*******" class="border border-primary-200 h-9 rounded-md w-full" />
                    </div>

                    <div class="w-full lg:ml-2">
                        <h1 class="font-bold my-2">Fullname</h1>
                        <input type="text" placeholder="e.g Doe" class="border border-primary-200 h-9 rounded-md w-full" />
                        <h1 class="font-bold my-2">Phone Number (Optional)</h1>
                            <div class="flex">
                                <input type="number" placeholder="Country Code"
                                    class="border border-primary-200 h-9 rounded-md w-1/3 mr-1" />
                                <input type="number" placeholder="e.g 8212345678"
                                    class="border border-primary-200 h-9 rounded-md w-2/3 ml-1" />
                            </div>
                        <h1 class="font-bold my-2">Confirm Password</h1>
                        <input type="password" placeholder="*******" class="border border-primary-200 h-9 rounded-md w-full" />
                    </div>
                </div>



                <label class="flex items-center my-2 mt-4 lg:mt-10">
                    <input type="checkbox" class="form-checkbox h-4 w-4 text-primary-600" />
                    <span class="ml-2 text-primary-900 font-bold text-xs lg:text-sm">Yes I want to receive Axdif’s Newsletter</span>
                </label>
                <label class="flex items-center my-2">
                    <input type="checkbox" class="form-checkbox h-4 w-4 text-primary-600" />
                    <span class="ml-2 text-primary-900 font-bold  text-xs lg:text-sm">
                        I have read and accept the <a href="#" class="text-secondary-blue-600 underline">Terms &amp;
                            Conditions</a>
                        and
                        <a href="#" class="text-secondary-blue-600 underline">Privacy Policy</a></span>
                </label>

                <button class=" bg-primary-orange hover:bg-orange-800 text-white rounded-md h-10 w-24 my-2">
                    <RouterLink to="/login">Submit</RouterLink>
                </button>
            </div>
            <div class="flex justify-start w-full pl-12">
                <a href="#" class="absolute bottom-2 text-primary-300">© Copyright 2023. All Right Reserved.</a>
            </div>

        </div> -->
        
        <!-- RIGHT DIV (INPUT)-->
        <div class=" bg-gray-500 h-auto max-h-full w-11/12 lg:my-0 lg:mx-0 lg:w-2/3 lg:h-screen border border-primary-border rounded-lg lg:rounded-none container object-contain lg:relative z-50 absolute top-24"
            v-if="!this.verification">

            <div class="flex flex-col p-2 lg:p-12 2xl:p-36 relative top-1/2 transform lg:-translate-y-1/2">
                <h1 class="text-3xl text-primary-900 my-2"><b>Manage all your employee efficiently</b></h1>
                <h1 class="text-xl text-primary-900 my-2">Let’s get you all set up so you can verify your personal account
                    and begin setting up your profile</h1>

                <div class="lg:flex justify-evenly">
                    <div class="w-full mr-2">
                        <h1 class="font-bold my-2">Company Name</h1>
                        <input type="text" placeholder="e.g John" class="border border-primary-200 h-9 rounded-md w-full" />
                        <h1 class="font-bold my-2">Email</h1>
                        <input type="email" placeholder="e.g john.doe@mail.com"
                            class="border border-primary-200 h-9 rounded-md w-full" />
                        <h1 class="font-bold my-2">Password</h1>
                        <input type="password" placeholder="*******"
                            class="border border-primary-200 h-9 rounded-md w-full" />
                    </div>

                    <div class="w-full lg:ml-2">
                        <h1 class="font-bold my-2">Fullname</h1>
                        <input type="text" placeholder="e.g Doe" class="border border-primary-200 h-9 rounded-md w-full" />
                        <h1 class="font-bold my-2">Phone Number (Optional)</h1>
                        <div class="flex">
                            <input type="number" placeholder="Country Code"
                                class="border border-primary-200 h-9 rounded-md w-1/3 mr-1" />
                            <input type="number" placeholder="e.g 8212345678"
                                class="border border-primary-200 h-9 rounded-md w-2/3 ml-1" />
                        </div>
                        <h1 class="font-bold my-2">Confirm Password</h1>
                        <input type="password" placeholder="*******"
                            class="border border-primary-200 h-9 rounded-md w-full" />
                    </div>
                </div>



                <label class="flex items-center my-2 mt-10">
                    <input type="checkbox" class="form-checkbox h-4 w-4 text-primary-600" />
                    <span class="ml-2 text-primary-900 font-bold text-sm">Yes I want to receive Axdif’s Newsletter</span>
                </label>
                <label class="flex items-center my-2">
                    <input type="checkbox" class="form-checkbox h-4 w-4 text-primary-600" />
                    <span class="ml-2 text-primary-900 font-bold text-sm">
                        I have read and accept the <a href="#" class="text-secondary-blue-600 underline">Terms &amp;
                            Conditions</a>
                        and
                        <a href="#" class="text-secondary-blue-600 underline">Privacy Policy</a></span>
                </label>

                <button class=" bg-primary-orange hover:bg-orange-800 text-white rounded-md h-10 w-24 my-2"
                    @click="toggleVerification()">
                    Submit
                </button>
            </div>
            <div class="flex justify-start w-full pl-12">
                <a href="#" class="absolute bottom-2 text-primary-300">© Copyright 2023. All Right Reserved.</a>
            </div>

        </div>

        <!-- RIGHT DIV AFTER VERIFICATION LARGE-->
        <div class=" bg-gray-500 h-4/5 w-4/5 mx-12 my-12 lg:my-0 lg:mx-0 lg:w-2/3 lg:h-screen border border-primary-border container absolute lg:relative"
            v-if="this.verification && isLg">
            <div class=" h-4/5 flex flex-col p-12 2xl:p-36 relative top-1/2 transform -translate-y-1/2">
                <div class="h-1/4">
                    <img src="../assets/axdif-logo.svg" class=" w-48 mb-10" />
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
                            <img src="../assets/dashed-line.png"  class="h-[80px]">
                        </div>
                        <img src="../assets/img-2.svg" class="h-[120px]" />
                        <div class="flex flex-col">
                            <span class="text-left ml-2">Login to your account</span>
                            <span class="text-left ml-2 font-normal text-sm">Login to your Axdif account
                                account</span>
                        </div>
                        <div class="w-1/4"></div>
                    </div>
                    <div class="h-1/3 flex flex-row items-center">
                        <div class="w-1/4"></div>
                        <div class="w-1/4 h-full relative transform left-1/4 -translate-x-1/2 mr-[24px]">
                            <img src="../assets/dashed-line.png"  class="h-[80px]">
                        </div>
                        <img src="../assets/img-3.svg" class="h-[120px]" />
                        <div class="flex flex-col">
                            <span class="text-left ml-2">Setup your data</span>
                            <span class="text-left ml-2 font-normal text-sm">Input your employee data and get the ease of managing employee</span>
                        </div>
                        
                    </div>
                </div>
                <button class="bg-primary-orange hover:bg-orange-800 text-white rounded-md h-10 w-24 my-2 self-center">
                    <router-link to="/login">Login to Axdif</router-link>
                </button>

            </div>
            <div class="flex justify-start w-full pl-12">
                <a href="#" class="absolute bottom-2 text-primary-300">© Copyright 2023. All Right Reserved.</a>
            </div>

        </div>
    </div>
</template>

