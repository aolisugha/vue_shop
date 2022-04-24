<template>
  <div class="wrap">
    <div class="box">
      <h2>电商后台管理系统</h2>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-present"
          ></el-input>
        </el-form-item>
      </el-form>
      <p>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="info">重置</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  //数据
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: "true", message: "请输入用户铭", trigger: "blur" },
          { min: 5, max: "10", message: "长度在5-10个字符", trigger: "blur" },
        ],
        password: [
          { required: "true", message: "请输入密码", trigger: "blur" },
          {
            pattern: /^[0-9a-zA-Z]{6,12}$/,
            message: "数字字母6-12位",
            trigger: "blur",
          },
        ],
      },
    };
  },
  //创建前
  created() {},
  //方法
  methods: {
    login() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.$axios.post('http://www.ysqorz.top:8888/api/private/v1/login',this.ruleForm).then(res=>{
              this.$store.commit('initLoginData',res.data.data)
              console.log(res.data.data);
              this.$router.push('/')
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  //子组件注册
  components: {},
  //计算
  computed: {},
  //监听
  watch: {},
};
</script>

<style lang="scss">
.wrap {
  background-color: #2b4b6b;
  width: 100%;
  height: 100vh;
  position: relative;
}
.box {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  height: 300px;
  padding: 0 20px;
  background-color: white;
  margin: auto;
  h2 {
    width: 100%;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    text-align: center;
  }
  .el-input {
    margin: 8px 0;
  }
  p {
    margin-top: 10px;
    float: right;
  }
}
</style>
