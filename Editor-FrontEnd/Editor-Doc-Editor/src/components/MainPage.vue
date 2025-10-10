<script setup>
import { ref } from "vue";
const isLogin = ref(true); // 是否是登录界面

</script>
<template>
    <div class="container" id="container" :class="{ 'right-panel-active': isLogin }">
        <!-- 登录表单 -->
        <div class="form-container sign-in-container">
            <form>
                <h1>登录</h1>
                <input type="email" placeholder="邮箱" />
                <input type="password" placeholder="密码" />
                <button>登录</button>
            </form>
        </div>

        <!-- 注册表单 -->
        <div class="form-container sign-up-container">
            <form>
                <h1>注册</h1>
                <input type="text" placeholder="用户名" />
                <input type="email" placeholder="邮箱" />
                <input type="password" placeholder="密码" />
                <button>注册</button>
            </form>
        </div>

        <!-- 覆盖层，用于切换内容 -->
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>欢迎回来！</h1>
                    <p>登录以继续访问您的账户</p>
                    <button class="ghost" @click="isLogin = true">登录</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>你好，朋友！</h1>
                    <p>注册以开始新的旅程</p>
                    <button class="ghost" @click="isLogin = false">注册</button>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
/* 基础布局 */
body {
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f6f5f7;
}

.container {
    position: relative;
    width: 768px;
    height: 480px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
}

/* 表单容器 */
.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

/* 登录表单在左侧 */
.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

/* 注册表单初始隐藏在右侧 */
.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

/* 覆盖层容器 */
.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.overlay {
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

/* overlay 内左右面板 */
.overlay-panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
    left: 0;
}

.overlay-right {
    right: 0;
}

/* 点击注册时的状态切换 */
.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}

/* 按钮与表单样式 */
form {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    height: 100%;
    text-align: center;
}

input {
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}

button {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

button:active {
    transform: scale(0.95);
}

button.ghost {
    background-color: transparent;
    border-color: #fff;
}
</style>