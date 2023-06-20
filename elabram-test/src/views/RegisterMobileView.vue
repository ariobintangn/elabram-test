<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="flex lg:flex-row flex-col  items-center justify-center">
        <div class="flex bg-white z-10 h-20 w-full lg:hidden sticky top-0">
            <img src="../assets/axdif-logo.svg" class="w-36 z-10" />
        </div>
        <!-- LEFT DIV -->
        <div class="w-full h-full lg:w-1/3 bg-primary-600 relative justify-center items-center -z-20">
            <div class="flex justify-center w-full px-[16px] my-[40px]">
                <p class="absolute lg:top-36 text-white xl:text-5xl text-3xl font-bold  text-center">A few clicks away
                    from being a part of Axdif</p>
            </div>
            <img src="../assets/masking.svg" class="absolute inset-0 object-cover h-full bg-no-repeat -z-10" />
            <img src="../assets/illustration-2.svg"
                class="absolute hidden lg:block left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2" />
            <div class="hidden lg:block flex-col justify-center w-full absolute bottom-48">
                <p class="text-white xl:text-3xl text-xl font-bold px-10 text-center">Communication Is Key</p>
                <p class="text-white text-md px-12 xl:px-16 text-center">Connect with your coworkers anywhere like you are
                    in one workspace. Very simple and fast.</p>
            </div>
            <div class="bg-white mt-36 mx-[16px] rounded-md">
                <h1>TESTING</h1>
                <img src="../assets/img-1.svg"/>
                <img src="../assets/img-2.svg"/>
                <img src="../assets/img-3.svg"/>
            </div>
        </div>

        <!-- RIGHT DIV 2-->

        <div class="flex justify-center w-full">
            <a href="#" class="absolute bottom-2 text-primary-300">© Copyright 2023. All Right Reserved.</a>
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
    </div>
</template>

