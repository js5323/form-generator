<template>
  <el-container>
    <el-aside class="index-aside">
      <el-form>
        <draggable
          :list="templateList"
          class="asideTempList"
          :group="{ name: 'widgets', pull: 'clone', put: false }"
          :clone="handleCloneData"
        >
          <review-widget v-for="element in templateList" :key="element.id" :title="element.title">
            <component :is="element.type + '-widget'" class="widget-item" v-bind="element"></component>
          </review-widget>
        </draggable>
      </el-form>
    </el-aside>
    <el-main>
      <el-form>
        <nested-draggable :list="generateResult" class="resultList" group="widgets">
          <div class="res-footer" slot="footer"><span>drag components here</span></div>
        </nested-draggable>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import nestedDraggable from "../components/nestedDraggable";
import draggable from "vuedraggable";
import templateList from "../data/templateList";
export default {
  name: "Index",
  data() {
    return {
      tmpDrag: false,
      resDrag: false,
      templateList,
      generateResult: [],
      typeAmountMapping: new Map(),
    };
  },
  methods: {
    handleCloneData(data) {
      const id = data.type + "_" + Date.now();
      const len = this.typeAmountMapping.get(data.type) || 0;
      this.typeAmountMapping.set(data.type, len + 1);
      return {
        ...data,
        children: [],
        title: data.title + (len ? `_${len + 1}` : ""),
        id,
      };
    },
  },
  components: {
    draggable,
    nestedDraggable,
  },
};
</script>

<style lang="less">
.index-aside {
  height: 100%;
  border-right: 1px solid #f1f1f1;
  padding: 15px;
  height: calc(~"100vh - 90px");
}
.res-footer {
  min-height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #ccc;
  color: #ccc;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>
