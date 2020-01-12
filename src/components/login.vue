<template>
<div class="login_container">
  <div class="login_box">
    <!-- 头像区域 -->
    <div class="avatar_box">
      <img src="../assets/logo.png" alt="...">
    </div>
    <!-- 登录表单区域 -->
    <el-form label-width="0px">
      <!-- 用户名 -->
      <el-form-item>
        <el-input></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item>
        <el-input></el-input>
      </el-form-item>
      <!-- 按钮区域 -->
      <el-form-item>
        <el-button type="primary">登录</el-button>
        <el-button type="info">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped="scoped">
  .login_container{
    background-color: #2b4b6b;
    height: 100%;
  }
  .login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar_box{
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      transform: translateY(-50%);
      background-color: #fff;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
</style>
