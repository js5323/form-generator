<template>
  <el-form-item :label="config.label">
    <el-input :placeholder="config.placeholder"></el-input>
  </el-form-item>
</template>
<script>
export default {
  props: ["title", "name", "id", "config", "type"],
};
</script>
