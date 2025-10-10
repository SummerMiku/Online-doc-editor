<script setup lang="ts">
import { ref } from "vue";
const isLogin = ref(true);
function login() {
    console.log("login");
}

function register() {
    console.log("register");
}

</script>
<template>
    <div class="block-mask">
        <div class="log-register">
            <div class="log">
                <div></div>
                <div></div>
            </div>
            <div class="register"></div>
        </div>
    </div>

</template>
<style scoped>
.block-mask {
    background-color: ragba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.log-register {
    display: flex;
    width: 70%;
    height: 70%;
    background-color: #c1c1c1;
}
</style>