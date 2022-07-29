<template>
  <view class="page-pl-pr-60 content">
    <!-- 防止覆盖导航栏 -->
    <view class="status_bar"></view>
    <!-- 标题 -->
    <view class="title-content">
      <view>欢迎登录</view>
      <view>请使用已注册手机号登录</view>
    </view>
    <!-- 表单 -->
    <u-form :model="form" ref="uForm">
    		<u-form-item label=""><u-input focus v-model="dataForm.username" placeholder="输入您的手机号码"/></u-form-item>
    		<u-form-item label=""><u-input v-model="dataForm.password" placeholder="输入密码" type="password"/></u-form-item>
    	</u-form>
  </view>
</template>

<script setup>
  import {
    reactive,
    
  } from 'vue'
  
  // 登入请求参数
  const dataForm = reactive({
    username:"",
    password:""
  })
  // 输入筐样式
  inputStyle:{
    color:"red";
  }
</script>

<style lang="scss">
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
    
</style>
