<template>
  <div class="wyr">

<!--    secondary level heading-->
    <h2>Please make your choice:</h2>

    <h3>{{question}}</h3>

    <input type="radio" v-model="choice" v-bind:value="answer1" v-on:change="choiceMade"><label>{{answer1}}</label>
    <input type="radio" v-model="choice" v-bind:value="answer2" v-on:change="choiceMade"><label>{{answer2}}</label>

  </div>
</template>

<script>
export default {
  name: 'WouldYourRather',
  props: {
    question: String,
    answer1: String,
    answer2: String,
  },
  data() {
    return {
      choice: ''
    }
  },
  methods: {
    choiceMade() {
      this.$emit('answer-changed', this.choice)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-bottom: 20px;
}

.wyr{
  width: 500px; /* adjust as needed */
  height: auto; /* same as width to create a square */
  margin: 10px auto; /* centers the card */
  text-align: left; /* left-aligns the text */
  //text-align: center;
  border: 2px black dashed;
  padding: 20px;
  padding-top: 0px;
  display: table;
}

label {
  margin-right: 10px;
}

</style>
