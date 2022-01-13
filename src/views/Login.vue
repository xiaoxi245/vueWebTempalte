<template>
  <div class="Login">
      <el-form :rules="rules" ref="loginForm" class="loginForm">
        <el-form-item>
          <el-input type="text" auto-complete="false" placeholder="请输入账号" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" auto-complete="false" placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      rules: [

      ],
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.form.name === 'admin' && this.form.password === '123') {
        this.$router.push('home')
      } else {
        this.$message.error('账号或密码错误')
      }
    }
  }
}
</script>

<style scoped>
  .Login{
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .loginForm{
    border-radius: 15px;
    background-clip: padding-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-image: linear-gradient(180deg, #bebdb6, #b8b8b842);
    width: 350px;
    padding: 15px 35px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cacaca;

  }
</style>
