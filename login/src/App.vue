<template>
  <el-container>
    <el-header class="header" height="100px">
      <h3>学习能力测试</h3>
      <p>Vue用户登录功能</p>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .header{
    background-color: #409EFF;
    color: white;
  }
</style>