<template>

<div>
<div  class="form-type">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="所属种类" prop="one">
            <Select v-model="formValidate.one" placeholder="请选择所属种类...">
                <Option value="1">园林药剂</Option>
                <Option value="2">电动机械</Option>
            </Select>
        </FormItem>
        <FormItem label="分类名称" prop="two">
            <Input v-model="formValidate.two" placeholder="请输入分类名称..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
    </div>
    <div class="">
           <Row>
        <Col span="11">
            <Card>
                <p slot="title">园林药剂</p>
                <i-table border :show-header="false" size="small" :columns="columns" :data="data">
                <template  slot-scope="{ row, index }"  slot="removeClass">
                    <Button shape="circle" icon="md-trash" @click="removeType(row)"  style="font-size:18px"></Button>
                </template>
                </i-table>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card dis-hover>
                <p slot="title">电动机械</p>
                <i-table border :show-header="false" size="small" :columns="columns1" :data="data1">
                <template  slot-scope="{ row, index }" slot="removeClass1">
                    <Button shape="circle"  style="font-size:18px" icon="md-trash" @click="removeType(row)"></Button>
                </template>
                </i-table>
            </Card>
        </Col>
    </Row>
    </div>
</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name:"goods_judge",
     data () {
            return {
                formValidate: {
                    two: '',
                    one: '',
                },
                ruleValidate: {
                    two: [
                        { required: true, message: '分类名不能为空', trigger: 'blur' }
                    ]
                },
                columns:[
                 {
                    title: '分类名称',
                    key: 'classStr'
                },{
                    title:"删除",
                    key:'remove',
                    slot:"removeClass",
                    width:60
                }],
                data:[],
                 columns1:[
                 {
                    title: '分类名称',
                    key: 'classStr'
                },
                {
                    title:"删除",
                    key:'remove',
                    slot:"removeClass1",
                    width:60
                }],
                data1:[]
            }
        },
        mounted(){
            this.getClass()
        },
        methods: {
            ...mapActions([
                'getaddcommodityclass',
                'getclasslist',
                'getremovecommodityclass'
            ]),
            // 获取
            getClass(){
                this.getclasslist().then(res=>{
                    this.data1=res.data.mechanical//机械
                    this.data=res.data.agentia//药剂
                })
            },
            // 添加
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.getaddcommodityclass({
                            one:this.formValidate.one,
                            two:this.formValidate.two,
                            }).then(res=>{
                                if(res.code==1){
                                    
                                this.formValidate= {
                                    two: '',
                                    one: '',
                                }
                                this.getClass()
                                this.$Message.success('Success!')
                                }
                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            // 重置
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            // 删除
            removeType(row){
                console.log(row)
                this.getremovecommodityclass(row.classId).then(res=>{
                    if(res.code==1){
                        this.getClass()
                    this.$Message.success('Success!')
                  }
                })
            }
        }
}
</script>

<style lang="less" scoped>
.form-type{
    padding-left:50px;
    padding-right:50px;
}
</style>
