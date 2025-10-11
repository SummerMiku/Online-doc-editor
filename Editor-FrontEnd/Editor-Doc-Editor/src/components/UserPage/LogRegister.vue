<script setup lang="ts">
import { ref } from "vue";
const isLogin = ref(true);//是否是登录界面
const userEmail = ref("");//邮箱
const userPassword = ref("");//密码
const checkToken = ref("");//验证码
function login() {
    console.log("login");
}

function register() {
    console.log("register");
}

</script>
<template>
    <div class=" bg-gray-200 w-full h-full flex justify-center items-center">
        <div class="container" :class="{ 'right-active': !isLogin }">
            <div class="log flex flex-col items-center justify-center">
                <div class="head-topic">语雀</div>
                <el-input v-model="userEmail" placeholder="请输入邮箱" @click="console.log(userEmail)" class="user-input" />
                <el-input v-model="userPassword" type="password" placeholder="请输入密码" @click="console.log(userPassword)"
                    class="user-input" />
                <el-input v-if="!isLogin" v-model="checkToken" type="text" placeholder="请输入验证码"
                    @click="console.log(checkToken)" class="user-input" />
                <el-button v-if="isLogin" @click="login">登录</el-button>
                <el-button v-else @click="register">注册</el-button>
            </div>
            <div class="overlay">
                <div class="overlay-panel left-0" v-show="!isLogin">
                    <h1>欢迎回来！</h1>
                    <p>登录以继续访问您的账户</p>
                    <el-button @click="isLogin = !isLogin">登录</el-button>
                </div>
                <div class="overlay-panel right-0" v-show="isLogin">
                    <h1>没有账号？</h1>
                    <p>注册以开始新的旅程</p>
                    <el-button @click="isLogin = !isLogin">注册</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5%;
    width: 50%;
    min-width: 700px;
    height: 70%;
    min-height: 500px;
    background-color: #ffffff;
    transition: transform 0.5s ease-in-out;
    overflow: hidden;
}

.head-topic {
    font-size: 2rem;
    font-weight: bolder;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.log {
    position: absolute;
    left: 0;
    transition: all 0.5s ease-in-out;
    width: 50%;
    z-index: 2;
}

.user-input {
    font-size: large;
    height: 3rem;
    width: 70%;
    margin-bottom: 1.5rem;
}

.overlay {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
}

.overlay-panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    top: 0;
    height: 100%;
    width: 100%;
    transition: transform 0.5s ease-in-out;
    background: linear-gradient(90deg, rgba(42, 123, 155, 1) 15%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 85%);
}

.container.right-active .overlay {
    transform: translateX(-100%);
}

.container.right-active .log {
    transform: translateX(100%);
}
</style>