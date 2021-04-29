import Vue from 'vue';
import Vuex from 'vuex';
import {dataInventory} from '../Data/dataInventory'

Vue.use(Vuex);

function dateResult(data){
  const options = {weekday: 'long',day:'numeric', month: "long", year: "numeric"};
  const date = new Date(data);
  const dateFormat = new Intl.DateTimeFormat("en-US", options).format(date);
  const convertDateMiliSec = Date.parse(dateFormat);
  return convertDateMiliSec
}

export default new Vuex.Store({
  state: {
    answerOne:{},
    inventory:dataInventory,
    resultFind:[]
  },
  mutations: {

    zeroValue(state){
      state.resultFind=[];
    },

    quizOne(state){
      const data=state.inventory.filter(find => find.placement.name === "Meeting Room")
      data.forEach(value=> state.resultFind.push(value.name))
      console.log(data)
    },

    quizTwo(state){
      const data=state.inventory.filter(find => find.type === "electronic")
      data.forEach(value=> state.resultFind.push(value.name))
      console.log(data)
    },

    quizThree(state){
      const data=state.inventory.filter(find => find.type === "furniture" || find.tags === "furniture"  )
      data.forEach(value=> state.resultFind.push(value.name))
      console.log(data)
    },

    quizFour(state){
      state.inventory.forEach(value=>{
        let dateTime=value.time
        const dataMiliSec=dateResult(dateTime)
        var d = new Date("01/21/2020");
        const timeFind = d.getTime();
        if(dataMiliSec < timeFind){
          state.resultFind.push(valueArticle.title);
        }
      })
    },

    quizFive(state){
      let data=state.inventory.forEach(value=>{
        value['tags'].forEach(valueTags =>{
          if(valueTags==="brown"){
            state.resultFind.push(value.name);
            console.log(value)
          }
        })
      })
      console.log(data)
    },

  },
  actions: {

  },
  getters:{
    getQuiz(state){
      return state.resultFind
    },
  },
});
