<template>
  <div>
    <h3>
      <slot/>
    </h3>
    <div class="subTitleUnderline"/>
  </div>
</template>

<script>
export default {
  name: "subtitle"
}
</script>

<style scoped>
h3 {
  font-family: fantasy;
  margin: 0;
  text-align: left;
  width: fit-content;
}
.subTitleUnderline {
  background: #6C63FF;
  width: 3rem;
  height: 10px;
}
</style>
