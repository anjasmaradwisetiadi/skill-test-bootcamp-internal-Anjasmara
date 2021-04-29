<template>
  <div class="quizOne text-left mt-2">
    <b-button v-b-toggle.collapse-1 variant="primary"
      >Nearest Fibonacci</b-button
    >
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <p class="card-text">
          Have the function to find nearest Fibonacci numbers, that the
          parameter is array
        </p>
        <b-button
          v-b-toggle.collapse-1-inner
          size="sm"
          @click.prevent="equalFibonancci"
          >Hasil
        </b-button>
      </b-card>

      <div v-for="(item, index) in valueFibonancci" :key="index">
        <p>{{ item }}</p>
      </div>
    </b-collapse>
  </div>
</template>
<script>
let fibonanciData = [];

function fibonacci(value) {
  if (value == 0) {
    return 0;
  }
  if (value <= 2) {
    return 1;
  }
  return fibonacci(value - 1) + fibonacci(value - 2);
}

export default {
  data() {
    return {
      value: null,
      valueFibonancci: [],
      dataCollect: [15, 1, 3],
    };
  },
  methods: {
    equalFibonancci() {
      let sumDataCollect = 0;
      for (let i = 0; i < this.dataCollect.length; i++) {
        sumDataCollect += this.dataCollect[i];
      }
      const counts = fibonanciData;
      const output = counts.reduce((previous, curr) =>
        Math.abs(curr - sumDataCollect) < Math.abs(previous - sumDataCollect)
          ? curr
          : previous
      );
      const differentsial = output - sumDataCollect;
      console.log(
        "kurang " +
          differentsial +
          " untuk mendekati nilai fibonanci = " +
          output
      );
    },
  },

  mounted() {
    console.log(fibonacci(10));
    for (let i = 0; i < 10; i++) {
      fibonanciData.push(fibonacci(i));
    }
  },

  computed: {
    // dataFibonanci() {
    //   return fibonanciData.push(fibonacci(8));
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>
