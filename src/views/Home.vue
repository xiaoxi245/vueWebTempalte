<template>
  <div class="home" :style="{height:homeHeight}">
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /srcf

export default {
  name: 'Home',
  data () {
    return {
      homeHeight: ''
    }
  },
  mounted () {
    const height = window.innerHeight
    console.log(height)
    this.homeHeight = height
  }

}
</script>
<style scoped>
  .el-container{
    height: 100%;
  }
  .el-aside{
    border: 1px solid #cacaca;
  }
  .el-main{
    border: 1px solid #cacaca;
  }
</style>
