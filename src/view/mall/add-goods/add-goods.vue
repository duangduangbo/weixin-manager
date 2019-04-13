<template>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="图片" prop="username">
            <Input v-model="formValidate.username" placeholder="请输入商家名..."></Input>
        </FormItem>
        <FormItem label="名称" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入登录名..."></Input>
        </FormItem>
        <FormItem label="原价" prop="password">
            <Input v-model="formValidate.password" placeholder="请输入密码..."></Input>
        </FormItem>
        <FormItem label="折后价" prop="phone">
            <Input v-model="formValidate.phone" placeholder="请输入电话号码..."></Input>
        </FormItem>
        <FormItem label="商品描述" prop="email">
            <Input v-model="formValidate.email" placeholder="请输入邮箱..."></Input>
        </FormItem>
        <FormItem label="保证金" prop="email">
            <Input v-model="formValidate.email" placeholder="请输入邮箱..."></Input>
        </FormItem>
        <FormItem label="分类" prop="supermerchant">
            <Select v-model="formValidate.supermerchant" placeholder="请选择上级商家...">
                <Option value="beijing">无</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
    name:"add_goods",
     data () {
         
            return {
                formValidate: {
                    username:'',
                    name: '',
                    password: '',
                    phone:'',
                    email:'',
                    address:'',
                    supermerchant:''
                },
                ruleValidate: {
                    username: [
                        { required: true, message: '商家名不能为空', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '登录名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                    phone:[
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                    email:[
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    address:[
                        { required: true, message: '地址不能为空', trigger: 'blur' }
                    ]
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
