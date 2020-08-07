<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4" cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          앱이 만들어졌군요
        </h1>
      </v-col>
      <v-col cols="12" sm="5">
        <v-btn
          @click="add"
        >
          숫자를 더해보자
        </v-btn>
         <v-btn
          class="red" 
         >
          버튼하나 추가 기능무
        </v-btn>
         <v-btn
          @click="minus"
        >
          숫자를 빼보자
        </v-btn>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          width="500"
          v-model="num"
          readonly
        >
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

  export default {
    name: 'HelloWorld',

    data: () => ({
    }),
    computed: {
      ...mapState({
        num: 'num'
      })
    },
    methods: {
      add() {
        this.$store.dispatch('addNum')
      },
      minus() {
        this.$store.dispatch('minusNum')
      }
    }
  }
</script>
