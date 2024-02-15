<template>
  <div class="game">
    <ToolbarGame></ToolbarGame>
    <div class="text-h5 text-sm-right pr-2 pt-6">Point: {{ points }}</div>

    <div v-if="!start">
      <div class="py-4 text-h6">Click the play button for a new game</div>
      <v-btn elevation="2" color="info" @click="start = true">Play</v-btn>
    </div>
    <table-game v-else @add="addPoint()"></table-game>
  </div>
</template>

<script>
import ToolbarGame from "@/components/ToolbarGame.vue";
import TableGame from "@/components/TableGame.vue";
import { constant } from "@/common/constant.js";
export default {
  name: "GameView",
  components: {
    ToolbarGame,
    TableGame,
  },
  props: {
    msg: String,
  },
  data: () => ({
    points: 0,
    start: false,
    firstName: "",
  }),
  methods: {
    addPoint() {
      if (this.$store.state.level === constant.HIGH_TEXT) {
        this.points = this.points + constant.HIGH_POINT;
      } else if (this.$store.state.level === constant.MEDIUM_TEXT) {
        this.points = this.points + constant.MEDIUM_POINT;
      } else {
        this.points = this.points + constant.LOW_POINT;
      }
    },
  },
};
</script>
