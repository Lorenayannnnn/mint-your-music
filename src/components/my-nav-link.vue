/**
 * @Description: navigation link themed with orange
 * @author Tianyi(Lorena) Yan
*/
<template>
  <a class="navLink" style="text-decoration: underline;" :href="to" target="_blank">{{to}}</a>
</template>

<script>
export default {
  name: "my-nav-link",
  props: {
    to: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>
.navLink {
  text-decoration: none;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #4d4e50;
  transition: color .2s cubic-bezier(.645,.045,.355,1);
}
.navLink:hover {
  color: #FF8626;
  transition: color .2s cubic-bezier(.645,.045,.355,1);
}
</style>
