<template>
  <div class="quizSeven text-left mt-2">
    <b-button v-b-toggle.collapse-7 variant="primary">reverseWord</b-button>
    <b-collapse id="collapse-7" class="mt-2">
      <b-card>
        <p class="card-text">
          Create a function that receive input and will give output
        </p>
        <b-button v-b-toggle.collapse-7-inner size="sm">program</b-button>
        <b-collapse id="collapse-7-inner" class="mt-2">
          <b-card>
            <input type="text" v-model="word" />
            <button class="btn btn-primary mt-2" @click.prevent="dataWord()">
              hasil
            </button>
            <p>nilai yang dibalikan : {{ resultReverseWord }}</p>
          </b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      word: " ",
      resultReverseWord: " ",
    };
  },

  methods: {
    dataWord() {
      const dataLooping = [];
      const data = this.word.split(" ");

      console.log(data.length);
      for (let i = 0; i < data.length; i++) {
        dataLooping.push([data[i]].reverse());
      }
      console.log(dataLooping);
      // const valueWord = data.reverse();
      const joinWword = dataLooping.join(" ");
      this.resultReverseWord = joinWword;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
