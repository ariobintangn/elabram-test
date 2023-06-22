<script>
import RegisterInputBoxSmall from '../components/RegisterInputBoxSmall.vue'
import RegisterLarge from '../components/RegisterLarge.vue'
export default {
    components: {
        RegisterInputBoxSmall,
        RegisterLarge,
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
    },
}
</script>

<template>
    <main>
        <RegisterInputBoxSmall />
        <RegisterLarge class="hidden lg:flex" />
    </main>
</template>

