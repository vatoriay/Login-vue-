<template>
<!--el-form标签添加rules属性绑定为配置的验证规则，添加status-icon属性可显示状态图标-->
    <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" v-show="isShow" >
                <el-input v-model="user.pass" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                    <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>

<script>
    export default {
        methods: {
            login () {
                //点击登录按钮后改变状态
                this.isShow = !this.isShow;
                 this.$refs.loginForm.validate((valid) => {
        if (valid) {
            //在login方法中，通过dispatch方法来调用actions中的login方法
            if (this.user.name === 'admin' && this.user.pass === '123') {
               this.$store.dispatch('login', this.user).then(() => {
                    this.$notify({
                        type: 'success',
                        message: '欢迎你,' + this.user.name + '!',
                        duration: 3000
                    })
                    this.$router.replace('/')
                })
            } else {
                this.$message({
                    type: 'error',
                    message: '用户名或密码错误',
                    showClose: true
                })
            }
        }
        else {
            return false
        }
    })
            }
        },
        //配置用户规则，不可为空
        data () {
             return {
                 //默认状态为false，不显示密码栏
                  isShow:false,
                user: {},
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            }
        }
    }
    
</script>