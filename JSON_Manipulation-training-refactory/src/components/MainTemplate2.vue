<template>
  <section class="Main_Template_2">
    <question-two></question-two>
    <funcionallty-two></funcionallty-two>
    <result-two></result-two>
  </section>
</template>
<script>
  import FuncionalltyTwo from './manipulation_two/FuncionalltyTwo.vue'
  import QuestionTwo from './manipulation_two/QuestionTwo.vue';
  import ResultTwo from './manipulation_two/ResultTwo.vue'
  export default {
    components: {
      QuestionTwo,
      FuncionalltyTwo,
      ResultTwo
    },

  }

</script>
