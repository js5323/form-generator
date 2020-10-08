<template>
  <el-container>
    <el-header class="main-header">
      <h3>Form Generator</h3>
    </el-header>
    <el-main class="main-content">
      <slot></slot>
    </el-main>
  </el-container>
</template>

<style lang="less">
.main-header {
  background-color: #63477d;
  color: #fff;
}
.main-content {
  background-color: #fff;
  margin: 15px;
  padding: 0 !important;
  min-height: calc(~"100vh - 90px");
  display: flex;
}
</style>
