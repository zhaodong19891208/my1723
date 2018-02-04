<template>
    <div id="register">
       <retop/>
        <remain/>
       <refooter/>
      <retopone/>
    </div>
</template>

<script>
	
	
import retop from './retop';
		
import remain from './remain';

import refooter from './refooter';

import retopone from './retopone';


export default {
  name: 'Rejister-index',
  components: {
   retop,
   refooter,
   remain,
   retopone
  },
  methods: {
    sayHi: function() {
      alert("hi");
    }
  }
}
	
</script>

<style>







</style>
