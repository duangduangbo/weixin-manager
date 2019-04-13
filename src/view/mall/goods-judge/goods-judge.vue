<template>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入用户名..."></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input v-model="formValidate.password" placeholder="请输入密码..."></Input>
        </FormItem>
        <FormItem label="确认密码" prop="enpassword">
            <Input v-model="formValidate.enpassword" placeholder="请确认密码..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
    name:"goods_judge",
     data () {
         const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formValidate.password) {
                    callback(new Error('两次密码输入不匹配'));
                } else {
                    callback();
                }
            };
            return {
                formValidate: {
                    name: '',
                    password: '',
                    enpassword: '',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                    enpassword: [
                        { required: true, message: '请再次输入密码', trigger: 'blur' },
                        { validator:validatePassCheck, trigger: 'change' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
}
</script>

<style lang="less" scoped>

</style>
