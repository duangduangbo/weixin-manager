<template>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <FormItem label="商家名" prop="username">
            <Input v-model="formValidate.username" placeholder="请输入商家名..."></Input>
        </FormItem>
        <FormItem label="登录名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入登录名..."></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input v-model="formValidate.password" placeholder="请输入密码..."></Input>
        </FormItem>
        <FormItem label="电话号码" prop="phone">
            <Input v-model="formValidate.phone" placeholder="请输入电话号码..."></Input>
        </FormItem>
        <FormItem label="邮箱" prop="email">
            <Input v-model="formValidate.email" placeholder="请输入邮箱..."></Input>
        </FormItem>
        <FormItem label="地址" prop="address">
            <Input v-model="formValidate.address" placeholder="请输入地址..."></Input>
        </FormItem>
        <FormItem label="经销商等级" prop="merchantGrade">
            <Select v-model="formValidate.merchantGrade" placeholder="请选择经销商等级...">
                <Option value="beijing">无</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="上级经销商" prop="superMerchant">
            <Select v-model="formValidate.superMerchant" placeholder="请选择上级经销商...">
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
    name:"add_distributor",
     data () {
         
            return {
                formValidate: {
                    username:'',
                    name: '',
                    password: '',
                    phone:'',
                    email:'',
                    address:'',
                    superMerchant:'',
                    merchantGrade:''
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
                    ],
                    superMerchant:[
                        { required: true, message: '必选', trigger: 'blur' }
                    ],
                    merchantGrade:[
                        { required: true, message: '必选', trigger: 'blur' }
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
