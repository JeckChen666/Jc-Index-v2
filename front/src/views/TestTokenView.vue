<script setup>
import { clearToken, getToken, setToken } from '@/utils/tokenUtils.js'

function setT() {
  setToken('token test value')
}

function getT() {
  let o = getToken()
  console.log(o)
}

function clearT() {
  clearToken()
  console.log('clear token')
}
</script>

<template>
  <div>
    <h1>This is TestTokenView</h1>
    <div>
      <button @click="setT">setToken</button>
    </div>
    <div>
      <button @click="getT">getToken</button>
    </div>
    <div>
      <button @click="clearT">clearToken</button>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
