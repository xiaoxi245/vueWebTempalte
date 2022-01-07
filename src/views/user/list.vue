<template>
    <div>
        <h1>{{$route.meta.title || 'User list'}}</h1>
        <el-button type="success">这是一个按钮</el-button>
        <base-header></base-header>
        <base-input></base-input>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/style/_vars.scss";
    h1{
        color: $--color-primary;
    }

</style>
