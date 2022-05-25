<template>
  <BUTTON class="button-home">

    <div class="font-1">{{name}}</div>
    <div class="font-2">Prenotato alle 11:28 del 6/5/2022</div>

  </BUTTON>
</template>

<script>
export default {
  name: "Button-home",
  props: {
    name: String
  }
}
</script>

<style scoped>

.button-home {
  background-color: #FFFBE5;
  color: black;
  border-radius: 16px;
  height: 60px;
  width: 300px;
}

.font-1{
  font-family: "Adobe Caslon Pro";
  font-size: 16px;
  text-align: left;
}

.font-2{
  font-size: 10px;
  font-family: "Adobe Caslon Pro";
  text-align: left;
}

</style>