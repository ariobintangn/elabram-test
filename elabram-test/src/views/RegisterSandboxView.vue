<script>
import RegisterInputBoxSmall from '../components/RegisterInputBoxSmall.vue'
import RegisterLeftSide from '../components/RegisterLeftSide.vue'
export default {
    components: {
        RegisterInputBoxSmall,
        RegisterLeftSide,
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
        <!-- <RegisterInputBoxSmall /> -->
        <RegisterLeftSide />

    </main>
</template>

