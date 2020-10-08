<template>
  <draggable class="dragArea" :list="list" :group="group">
    <review-widget v-for="el in list" :key="el.id" :title="el.title" control>
      <component :is="el.type + '-widget'" v-bind="el"></component>
      <nested-draggable :list="el.children" :group="group" :key="el.id">
        <div class="res-footer" slot="footer"><span>drag components here</span></div>
      </nested-draggable>
    </review-widget>
    <template slot="footer">
      <slot name="footer"></slot>
    </template>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
export default {
  props: {
    list: {
      required: true,
      type: Array,
    },
    group: {
      required: true,
      type: [Object, String],
    },
  },
  components: {
    draggable,
  },
  name: "nested-draggable",
};
</script>
