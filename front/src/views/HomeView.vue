<script setup>
import {RouterLink, RouterView} from "vue-router";
</script>

<template>
  <div class="h-screen flex justify-center items-center bg-gray-100">
    <div>
      <!-- 头像和网名 -->
      <div class="mb-4 flex items-center justify-center">
        <div class="w-16 h-16 rounded-full overflow-hidden">
          <img src="http://q1.qlogo.cn/g?b=qq&nk=1204798253&s=100" alt="Avatar" class="w-full h-full object-cover">
        </div>
        <div class="ml-4">
          <h2 class="text-lg font-bold">JeckChen</h2>
        </div>
      </div>
      <!-- 自我简介 -->
      <div class="mb-4 flex items-center justify-center h-12">
        <p class="text-gray-600">一个废物程序员</p>
      </div>
      <nav>
        <RouterLink to="/about">关于我</RouterLink>
        <RouterLink to="/card">卡片</RouterLink>
      </nav>
      <RouterView/>
    </div>
  </div>
</template>

<style scoped lang="scss">

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
