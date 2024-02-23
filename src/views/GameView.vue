<template>
  <div class="game">
    <ToolbarGame></ToolbarGame>
    <div class="text-h5 text-right pr-2 pt-6">Point: {{ points }}</div>

    <div v-if="!start" class="text-center">
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
      this.points =
        this.points + constant.LEVEL_GAME[this.$store.state.level].POINTS;
    },
  },
};
</script>
