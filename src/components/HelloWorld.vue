<template>
<html>
  <head>
  </head>
  <body>
    <div class="hello">
      <h1>Nummer: {{store.getNumber()}}</h1>
      <h1>Name: {{store.getName()}}</h1>
    </div>
    <div>
      <p>Wir rechnen nun mit den Zahlen {{calculator.firstNumber}} und {{calculator.secondNumber}} </p>
      <p>Addition: {{calculator.addition()}} </p>
      <p>Subtraktion: {{calculator.subtraction()}} </p>
      <p>Multiplikation: {{calculator.multiplication()}} </p>
      <p>Divison: {{calculator.division()}} </p>
      <p>Http Result:  {{resultHttp.message}} </p>
      <p v-if="resultHttpArray.length != 0">Http Result Array first element: {{resultHttpArray[0].message}} </p>
      <p v-if="resultHttpArray.length != 0">Http Result Array second element: {{resultHttpArray[1].message}} </p>
      <button type="button" class="btn btn-dark" @click="getMethod">Start Http Request</button>
      <button type="button" class="btn btn-primary" @click="changeStoreData"> Change Store </button>
      <button type="button" class="btn btn-warning" @click="getMethodArray"> Start Http Request Array </button>
      <button type="button" class="btn btn-success" @click="changeArrayValue"> Change Array Value </button>
    </div>
  </body>
</html>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {Store} from '@/classes/Store';
import {Calculator} from '@/classes/Calculator';
import {ResponseResult} from '@/classes/ResponseResult';
import {RESTCONTROLLER } from '@/main';

export default class HelloWorld extends Vue {
  store = new Store();
  calculator = new Calculator(10, 2);
  resultHttp = new ResponseResult();
  resultHttpArray: ResponseResult[] = [];

  changeStoreData(): void{
    // Error, because private! -> this.store._number = "4711";
    this.store.setNumber("4711");
    //Error, because private! -> this.store._name = "Xenia"
    this.store.setName("Xenia")
    //Error, because private! -> this.store.greet();
  }

  getMethod(): void{
    RESTCONTROLLER.getCall('/test')
    .then(response => this.resultHttp = response.data)
    .catch(error => this.resultHttp = error);
  }

  getMethodArray(): void{
    RESTCONTROLLER.getCall('/testArray')
    .then(response => this.resultHttpArray =  response.data)
    .catch(error => this.resultHttpArray = error);
  }

  changeArrayValue(): void{
    this.resultHttpArray[0].message = 'OK3'
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
