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
                <el-input v-model="userEmail" type="email" placeholder="请输入邮箱" @click="console.log(userEmail)"
                    class="user-input" />
                <el-input v-model="userPassword" type="password" placeholder="请输入密码" @click="console.log(userPassword)"
                    class="user-input" />
                <el-button>登录</el-button>
                <el-button @click="isLogin = !isLogin">没有账号，去注册</el-button>
            </div>
            <div class="register flex flex-col items-center justify-center">
                <div class="head-topic">语雀</div>
                <el-input v-model="userEmail" type="email" placeholder="请输入邮箱" @click="console.log(userEmail)"
                    class="user-input" />
                <el-input v-model="userPassword" type="password" placeholder="请输入密码" @click="console.log(userPassword)"
                    class="user-input" />
                <el-input v-model="checkToken" type="text" placeholder="请输入验证码" @click="console.log(checkToken)"
                    class="user-input" />
                <el-button>注册</el-button>
                <el-button @click="isLogin = !isLogin">已有账号，去登录</el-button>
            </div>
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>欢迎回来！</h1>
                    <p>登录以继续访问您的账户</p>
                    <button class="ghost">登录</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>你好，朋友！</h1>
                    <p>注册以开始新的旅程</p>
                    <button class="ghost">注册</button>
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
    position: fixed;
    top: 20%;
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

.register {
    position: absolute;
    right: 0;
    transition: all 0.5s ease-in-out;
    width: 50%;
    z-index: 1;
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

.container.right-active .overlay {
    transform: translateX(-100%);
}
</style>