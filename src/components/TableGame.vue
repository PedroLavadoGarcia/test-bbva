<template>
  <div class="text-center">
    <div>{{ timeLeft }} seconds left</div>
    <div class="text-h4 pb-6">{{ titleGame }}</div>
    <div class="d-flex flex-wrap">
      <div
        class="celda text-h3"
        :class="clickItems.includes(number) ? validateTest(number) : ''"
        v-for="(number, index) in list"
        :key="index"
        @click="clickValue(number)"
      >
        {{ viewMode || clickItems.includes(number) ? number : "?" }}
      </div>
    </div>
    <div class="py-2">
      <v-btn
        :disabled="clickItems.length != 3"
        id="again"
        elevation="2"
        color="info"
        @click="initGame()"
        >Play again</v-btn
      >
    </div>
  </div>
</template>

<script>
import { constant } from "@/common/constant";
import {
  shuffle,
  stopAllTimeoutByArray,
  vibrate,
  randomElements,
} from "@/common/functions";
export default {
  name: "TableGame",
  data: () => ({
    timeOutView: [],
    timeLeft: null,
    clickItems: [],
    numbersSearch: [],
    viewMode: true,
    list: [],
  }),
  computed: {
    titleGame() {
      return this.viewMode
        ? "Memorize the cards"
        : `Where is the numbers ${this.numbersSearch}?`;
    },
    name() {
      return this.$store.state.name ? this.$store.state.name : "Nombre";
    },
    time() {
      return constant.LEVEL_GAME[this.$store.state.level].TIME;
    },
  },
  watch: {
    time() {
      this.initGame();
    },
  },
  mounted() {
    this.list = this.$store.state.list;
    this.initGame();
  },
  methods: {
    clickValue(number) {
      if (this.clickItems.length < 3 && !this.viewMode) {
        this.clickItems.push(number);
        if (this.numbersSearch.includes(number)) {
          this.$emit("add");
        } else {
          vibrate();
        }
      }
    },
    initGame() {
      stopAllTimeoutByArray(this.timeOutView);
      this.timeLeft = this.time / constant.SECOND;
      this.viewMode = true;
      this.clickItems = [];
      this.list = shuffle(this.list);
      this.timeOutView.push(
        setTimeout(
          () => (
            (this.viewMode = false),
            (this.numbersSearch = randomElements(this.list, 3))
          ),
          this.time
        )
      );
      this.timeLeftDown();
    },
    timeLeftDown() {
      if (this.timeLeft) {
        this.timeOutView.push(
          setTimeout(() => (this.timeLeft--, this.timeLeftDown()), 1000)
        );
      }
    },
    validateTest(number) {
      return this.numbersSearch.includes(number) ? "bg-green" : "bg-red";
    },
  },
};
</script>

<style scoped>
.celda {
  cursor: pointer;
  border: 2px solid;
  padding: 8px;
  margin: 8px;
  flex: 1 1 30%;
}
</style>
