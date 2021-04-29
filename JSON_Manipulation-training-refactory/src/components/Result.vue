<template>
    <div class="result row mt-4">
    <div class="col">
      <div class="card">
        <div class="card-body text-left">
          <span>Answered : </span>
          <span>{{getQuiz.length}}</span>
          <span 
          v-if="getQuiz.length === 0"
           class="d-block text-danger mt-2 font-weight-bold"
          >Tidak ditemukan !!!</span>
          <ul v-for="(item,index) in getQuiz" :key="index" class="mt-2">
            <li v-if="getQuiz.length > 1">{{index +1}}. username : {{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'


export default {
    computed:{
        ...mapGetters(['getQuiz']),
    },

}
</script>

<style lang="scss" scoped>
    ul li{
       list-style: none; 
    }
</style>