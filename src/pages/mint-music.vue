<template>
  <div>
    <el-steps :active="active">
      <el-step title="1" icon="el-icon-edit"></el-step>
      <el-step title="2" icon="el-icon-upload"></el-step>
      <el-step title="3" icon="el-icon-picture"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "mintMusic",
  data () {
    return {
      active: 1
    }
  }
}
</script>

<style scoped>

</style>
