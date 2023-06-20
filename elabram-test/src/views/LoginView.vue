<script>
export default {
}
</script>

<template>
    <div class="flex flex-col lg:flex-row h-full">

        <div class="hidden lg:block h-full lg:w-2/3 bg-primary-600 lg:relative justify-center items-center -z-20">
            <img src="../assets/masking.svg" class="absolute inset-0 bg-cover h-full bg-no-repeat -z-10" />
            <img src="../assets/illustration-1xl.png" class="absolute top-1/2 transform -translate-y-1/2" />
            <div class="flex justify-center w-full">
                <p class="absolute bottom-2 text-white">© Copyright 2023. All Right Reserved.</p>
            </div>
        </div>

        <div
            class="h-5/6 container lg:h-full lg:my-0  lg:mx-0 lg:relative lg:w-1/3 lg:border border-primary-border lg:bg-white">
            <div class="flex flex-col p-12 2xl:p-36 relative md:p-24 lg:top-1/2 lg:transform lg:-translate-y-1/2">
                <img src="../assets/axdif-logo.svg" class="lg:block w-36 lg:w-48 mb-10" />
                <h1 class="text-xl lg:text-3xl text-primary-900 my-2"><b>Login to your Account</b></h1>
                <h1 class="lg:text-xl text-primary-900 my-2">Hi, welcome back! Select method to login</h1>
                <div class="flex flex-col lg:flex-row justify-center my-2 w-full">
                    <button
                        class="text-primary-132 border border-primary-200 mb-3 lg:w-1/2 h-10 lg:mr-1 rounded-md hover:bg-primary-200 hover:text-white font-bold py-2 px-4 inline-flex items-center justify-evenly pr-12 container object-contain">
                        <img class="w-6 h-6 mr-2" src="../assets/google-logo.png" />
                        <span>Google</span>
                    </button>
                    <button
                        class="text-primary-132 border border-primary-200 lg:w-1/2 h-10 lg:ml-1 rounded-md hover:bg-primary-200 hover:text-white font-bold py-2 px-4 inline-flex items-center justify-evenly pr-12 container object-contain">
                        <img class="w-6 h-6 mr-2" src="../assets/linkedin-logo.png" />
                        <span>Linked In</span>
                    </button>
                </div>

                <div class="flex flex-row justify-center items-center my-2">
                    <hr class="w-16 lg:w-36 border-t border-gray-300" />
                    <p class="text-gray-500 text-xs lg:text-sm tracking-wider mx-2">Or continue with email</p>
                    <hr class="w-16 lg:w-36 border-t border-gray-300" />
                </div>

                <h1 class="font-bold my-2">Email</h1>
                <input type="email" placeholder="e.g john.doe@mail.com" class="h-10 border border-primary-200 rounded-lg" />
                <h1 class="font-bold my-2">Password</h1>
                <input type="password" placeholder="*******" class="h-10 border border-primary-200 rounded-lg" />
                <div class="flex items-center justify-between my-2">
                    <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox h-4 w-4 text-primary-600" />
                        <span class="ml-2 text-gray-700">Remember me</span>
                    </label>
                    <a href="#" class="text-primary-600 font-bold hover:text-primary-900-08539a">Forgot password?</a>
                </div>
                <button class=" bg-primary-orange hover:bg-orange-800 text-white rounded-md h-10 w-full my-2">

                    Log In</button>
            </div>
            <div class="flex justify-center w-full">
                <a href="#" class="absolute md:bottom-2 text-primary-300">Privacy Policy • Terms & Condition</a>
            </div>

            <div class="flex justify-center w-full">
                <p class="lg:hidden absolute bottom-2 text-primary-900 font-bold">© Copyright 2023. All Right Reserved.</p>
            </div>
        </div>
    </div>
</template>
