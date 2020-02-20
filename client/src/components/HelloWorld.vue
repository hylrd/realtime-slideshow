<template>
  <div class="hello">
     <h1>slider's page</h1>
    <button @click.prevent="com('back')">backu</button>
    <button @click.prevent="com('next')">nextsu</button>
    <div class="container">
    <img :src="images[number]" alt height="350rem" />
    </div>
    <div v-if="images[number] == undefined">
        <h2>gambarnya abis</h2>
    </div>
    {{number}}
  </div>
</template>

<script>
import io from 'socket.io-client'
name: 'HelloWorld'
export default {
  data(){
    return {
      socket: io.connect('http://localhost:3000'),
      number: 1,
      images:[]
    }
  },
  props: {
    msg: String
  },
  methods:{
    com(mand){
      this.socket.emit('hai', mand)
    }
  },
  created:function(){
    this.socket.on('hai', num =>{
      // console.log(num);
      this.number += num
    })
    this.socket.on('gambar', img =>{
      // console.log(img);
      this.images = img
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
