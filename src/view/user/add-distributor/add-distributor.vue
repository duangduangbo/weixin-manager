<template>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <!-- <FormItem label="商家名" prop="username">
            <Input v-model="formValidate.username" placeholder="请输入商家名..."></Input>
        </FormItem> -->
        <FormItem label="用户名" prop="username">
            <Input v-model="formValidate.username" placeholder="请输入用户名..."></Input>
        </FormItem>
        <FormItem label="真实姓名" prop="realname">
            <Input v-model="formValidate.realname" placeholder="请输入真实姓名..."></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input v-model="formValidate.password" placeholder="请输入密码..."></Input>
        </FormItem>
        <FormItem label="电话号码" prop="phone">
            <Input v-model="formValidate.phone" placeholder="请输入电话号码..."></Input>
        </FormItem>
        <FormItem label="店铺名" prop="distributorName">
            <Input v-model="formValidate.distributorName" placeholder="请输入店铺名..."></Input>
        </FormItem>
        <FormItem label="地址" required>
            <Row>
                <Col span="7">
                <FormItem label=""  prop="province">
                    <Input v-model="formValidate.province" placeholder="请输入省份..."></Input>
                </FormItem>
                </Col>
                <Col span="1" style="text-align: center">-</Col>
                <Col span="7">
                <FormItem label=""  prop="city">
                    <Input v-model="formValidate.city" placeholder="请输入城市..."></Input>
                </FormItem>
                </Col>
                <Col span="1" style="text-align: center">-</Col>
                <Col span="7">
                <FormItem label=""  prop="address">
                    <Input v-model="formValidate.address" placeholder="请输入地址..."></Input>
                </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="是否授权">
            <RadioGroup v-model="formValidate.authority">
                <Radio :label="0">不授权</Radio>
                <Radio :label="1">授权</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="性别">
            <RadioGroup v-model="formValidate.sex">
                <Radio :label="0">未知</Radio>
                <Radio :label="1">男</Radio>
                <Radio :label="2">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="经销商等级" prop="grade">
            <Select v-model="formValidate.grade" @on-change="gradeChange" placeholder="请选择经销商等级...">
                <Option :value="1">等级一</Option>
                <Option :value="2">等级二</Option>
                <Option :value="3">等级三</Option>
                <Option :value="4">等级四</Option>
                <Option :value="5">等级五</Option>
                <Option :value="6">等级六</Option>
            </Select>
        </FormItem>
        <FormItem label="上级经销商" prop="parent">
            <Select v-model="formValidate.parent" placeholder="请选择上级经销商...">
                <Option v-for="(v,k) in parentList" :key="k" :value="v.id">{{v.name}}</Option>
            </Select>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name:"add_distributor",
     data () {
         
            return {
                formValidate: {
                    username:'',
                    realname:'',
                    distributorName:'',
                    authority:0,
                    password: '',
                    sex:0,
                    phone:'',
                    address:'',
                    province:'',
                    city:'',
                    parent:0,
                    grade:''
                },
                ruleValidate: {
                    username: [{ required: true, message: '必填', trigger: 'blur' }],
                    password: [{ required: true, message: '必填', trigger: 'blur' }],
                    phone:[{ required: true, message: '必填', trigger: 'blur' }],
                    address:[{ required: true, message: '必填', trigger: 'blur' }],
                    parent:[ {type:"number", required: true, message: '必填', trigger: 'blur'
                     ,transform(val){return Number(val)}} ],
                    grade:[{type:"number", required: true, message: '必填', trigger: 'blur'
                    ,transform(val){return Number(val) }}],
                    city:[{ required: true, message: '必填', trigger: 'blur' }],
                    province:[{ required: true, message: '必填', trigger: 'blur' }],
                    distributorName:[{ required: true, message: '必填', trigger: 'blur' }],
                    realname:[{ required: true, message: '必填', trigger: 'blur' }],
                },
                id:this.$route.query.id,
                parentList:[]
            }
        },
        mounted(){
            if(this.id!=null&&this.id!=undefined){
                this.distriparticulars(this.$route.query.id).then(res=>{
                this.formValidate=res.data
                console.log(this.formValidate)
                    this.getGradeParent(res.data.grade)
                })
            }else{
                this.formValidate={
                    authority:0,
                    sex:0,
                    parent:0,
                }
            }
        },
        methods: {
            ...mapActions([
                'getadddistributor',
                'distriparticulars',
                'distributorupdate',
                'distributorgetparent'
            ]),
            gradeChange(val){
                this.getGradeParent(val)
            },
            getGradeParent(val){
                this.distributorgetparent({string:val}).then(res=>{
                    this.parentList=res.data
                })
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if(this.id!=null&&this.id!=undefined){
                            console.log(this.formValidate)
                            this.distributorupdate(this.formValidate).then(res=>{
                                this.$Message.success('Success!');
                            })
                        }
                        else{
                                this.getadddistributor(this.formValidate).then(res=>{
                                this.$Message.success('Success!');
                                this.handleReset('formValidate')
                            })
                        }
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
