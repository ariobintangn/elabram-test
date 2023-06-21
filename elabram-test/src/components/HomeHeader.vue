<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<template>
    <nav class=" h-[70px] flex items-center justify-between px-[16px]">
        <img src="../assets/home/axdif-icon-square-white.svg" />
        <div class="flex flex-row font-bold" @click="toggleDropdown">
            <h1>Overview</h1>
            <img src="../assets/home/search-24px (1)-2.svg" class="ml-[4px]" />
            <div v-if="isDropdownOpen" class="absolute translate-y-4 bg-white rounded-md shadow-lg mt-2">
                <ul>
                    <li>
                        <a href="#">Overview</a>
                    </li>
                    <li>
                        <a href="#">Employee Stats</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <img src="../assets/home/Profile Picture.png" class="h-[40px]" />
        </div>

    </nav>
</template>
