<template>
  <div class="Header">
      <ul>
        <li v-for="(item,index) in menu" @click="toView(item.path)" :key="index">{{item.name}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      menu: [
        { name: '首页', path: 'home' },
        { name: '编辑', path: 'edit' },
        { name: '列表', path: 'list' }
      ]
    }
  },
  methods: {
    toView (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style scoped>
  .Header{
    width: 100%;
    height: 52px;
  }
  .Header ul li{
    display: inline-block;
    list-style: none;
    margin: 0 10px;
  }
</style>
