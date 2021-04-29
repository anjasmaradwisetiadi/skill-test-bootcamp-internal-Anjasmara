<template>
  <section class="Dashbord">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="d-flex flex-column">
            <quiz-palindrom></quiz-palindrom>
            <quiz-leap-year></quiz-leap-year>
            <quiz-reverse-word></quiz-reverse-word>
            <quiz-nearest-fibonacci></quiz-nearest-fibonacci>
            <quiz-fizz-buzz></quiz-fizz-buzz>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import QuizNearestFibonacci from "./quiz/QuizNearestFibonacci.vue";
import QuizFizzBuzz from "./quiz/QuizFizzBuzz.vue";
import QuizPalindrom from "./quiz/QuizPalindrom.vue";
import QuizLeapYear from "./quiz/QuizLeapYear.vue";
import QuizReverseWord from "./quiz/QuizReverseWord.vue";
export default {
  components: {
    QuizNearestFibonacci,
    QuizFizzBuzz,
    QuizPalindrom,
    QuizLeapYear,
    QuizReverseWord,
  },
};
</script>

<style scoped>
</style>
