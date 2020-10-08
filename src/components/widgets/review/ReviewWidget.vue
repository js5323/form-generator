<template>
  <el-card shadow="hover" class="widget-review-wrap" :class="[control ? 'control' : '']">
    <div class="review-title">
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </el-card>
</template>

<script>
export default {
  props: {
    title: String,
    control: Boolean,
  },
};
</script>

<style lang="less" scoped>
.widget-review-wrap {
  cursor: move;
  position: relative;
  overflow: visible;
  margin: 15px 0;
}
.review-title {
  position: absolute;
  top: -1em;
  left: 1em;
  font-size: 13px;
  background-color: #fff;
  padding: 0.5em 1em;
}
</style>
