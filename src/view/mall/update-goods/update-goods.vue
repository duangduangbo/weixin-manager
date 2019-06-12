<template>

        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">

        <FormItem label="商品名称" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入商品名..."></Input>
        </FormItem>
        <FormItem label="商品分类" prop="type">
            <RadioGroup v-model="formValidate.type">
                <Radio label="1">只可租赁</Radio>
                <Radio label="2">只可出售</Radio>
                <Radio label="3">可出售可租赁</Radio>
            </RadioGroup>
        </FormItem>
        <template >
            <!-- <FormItem label=""  v-show="formValidate.type!=1"> -->
            <Row v-show="formValidate.type!=1">
                <Col :sm="12" :lg="12">
                    <FormItem label="购买价格" prop="price">
                        <Input v-model="formValidate.price"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                   <FormItem label="购买价格1" prop="price1">
                        <Input v-model="formValidate.price1"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                    <FormItem label="购买价格2" prop="price2">
                        <Input v-model="formValidate.price2"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                   <FormItem label="购买价格3" prop="price3">
                        <Input v-model="formValidate.price3"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                    <FormItem label="购买价格4" prop="price4">
                        <Input v-model="formValidate.price4"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                   <FormItem label="购买价格1" prop="price5">
                        <Input v-model="formValidate.price5"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                    <FormItem label="购买价格6" prop="price6">
                        <Input v-model="formValidate.price6"></Input>
                    </FormItem>
                </Col>
                </Row>
            <!-- </FormItem> -->
        </template>
        <template >
            <!-- <FormItem label="" v-show="formValidate.type!=2"> -->
                <Row v-show="formValidate.type!=2">
                <Col :sm="12" :lg="12">
                    <FormItem label="租赁价格" prop="rentPrice">
                        <Input v-model="formValidate.rentPrice"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                   <FormItem label="租赁价格1" prop="rentPrice1">
                        <Input v-model="formValidate.rentPrice1"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                    <FormItem label="租赁价格2" prop="rentPrice2">
                        <Input v-model="formValidate.rentPrice2"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                   <FormItem label="租赁价格3" prop="rentPrice3">
                        <Input v-model="formValidate.rentPrice3"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                    <FormItem label="租赁价格4" prop="rentPrice4">
                        <Input v-model="formValidate.rentPrice4"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                   <FormItem label="租赁价格1" prop="rentPrice5">
                        <Input v-model="formValidate.rentPrice5"></Input>
                    </FormItem>
                </Col>
                <Col :sm="12" :lg="12" v-show="isAdmin">
                    <FormItem label="租赁价格6" prop="rentPrice6">
                        <Input v-model="formValidate.rentPrice6"></Input>
                    </FormItem>
                </Col>
                </Row>
            <!-- </FormItem> -->


            <FormItem label="保证金" prop="deposit" v-show="formValidate.type!=2">
                <Input v-model="formValidate.deposit" placeholder="请输入保证金..."></Input>
            </FormItem>
        </template>
         <FormItem label="库存" prop="inventory">
            <Input v-model="formValidate.inventory" placeholder="请输入库存..."></Input>
        </FormItem>
        <FormItem label="分类" prop="classId">
            <Cascader :data="dataClass" v-model="formValidate.classId"></Cascader>
        </FormItem>
        <FormItem label="是否上架">
            <RadioGroup v-model="formValidate.online">
                <Radio label="1">是</Radio>
                <Radio label="0">否</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="商品描述" prop="note">
            <Input v-model="formValidate.note" type="textarea" :autosize="{minRows: 5,maxRows: 15}"  placeholder="请输入商品描述..."></Input>
        </FormItem>
        <FormItem label="图片" prop="picurl">
            <Upload
                
                type="drag"
                :before-upload="beforeUpload"
                :disabled="disabled"
                action="admin/commodity/sendpic">
                <div style="padding: 20px 0">
                    <Icon v-show="imgurl==''" type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p v-show="imgurl==''" >点击上传图片</p>
                    <img  v-show="imgurl!=''" :src="imgurl" style="height:100px"/>
                    <Icon v-show="imgurl!=''" class="resetimg" @click.prevent="resetImg" type="md-close" />
                </div>
                                <Input v-model="formValidate.picurl" style="width: 120px;margin-top:24px;display:none"></Input>

            </Upload>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
import { mapActions,mapMutations } from 'vuex';
import { setToken, getToken } from '@/libs/util'
let formData = new FormData(); 
export default {
    name:"update_goods",
     data () {
         
            return {
                formValidate: {
                    name:'',
                    type:'1',
                    picurl:'',
                    note:'',
                    deposit:'',
                    price:'',
                    inventory:'',
                    online:"1"
                },
                dataClass: [],
                imgurl:'',
                disabled:false,
                formData:formData,
                isAdmin:this.$store.state.admin.isAdmin,
                id:this.$route.query.id
            }
        },
        created(){

            console.log(this.isAdmin,this.$store.state.admin.isAdmin)
        },
        mounted(){
            this.getData()
        },
        watch:{
        id:{
            handler:function(newval){
                 console.log(newval)
                this.getData()
                this.getGoods()
            },
            deep:true
        }
    },
        computed:{
            
            ruleValidate(){
                let valid={
                    price: [{ required: true, message: '必填' }],
                    price1: [{ required: true, message: '必填' }],
                    price2: [{ required: true, message: '必填' }],
                    price3: [{ required: true, message: '必填' }],
                    price4: [{ required: true, message: '必填' }],
                    price5: [{ required: true, message: '必填' }],
                    price6: [{ required: true, message: '必填' }],
                }
                let basic={
                    name: [{ required: true, message: '必填' }],
                    classId: [{ required: true, message: '必填',type:"array" }],
                    picurl: [{ required: true, message: '必填' }],
                    inventory: [{ required: true, message: '必填' }],
                    note: [{ required: true, message: '必填' }],
                }
                let rentValid={
                    deposit: [{ required: true, message: '必填' }],
                     rentPrice: [{ required: true, message: '必填' }],
                    rentPrice1: [{ required: true, message: '必填' }],
                    rentPrice2: [{ required: true, message: '必填' }],
                    rentPrice3: [{ required: true, message: '必填' }],
                    rentPrice4: [{ required: true, message: '必填' }],
                    rentPrice5: [{ required: true, message: '必填' }],
                    rentPrice6: [{ required: true, message: '必填' }],
                }
                if(this.formValidate.type==1){
                    if(this.isAdmin)
                    return Object.assign({},basic,rentValid)
                    else
                    return Object.assign({},basic,{
                        rentPrice: [{ required: true, message: '必填' }],
                        deposit: [{ required: true, message: '必填' }]
                        })
                }
                if(this.formValidate.type==2){
                    if(this.isAdmin)
                    return Object.assign({},basic,valid)
                    else
                    return Object.assign({},basic,{price: [{ required: true, message: '必填' }]})
                }
                if(this.formValidate.type==3){
                    if(this.isAdmin)
                    return Object.assign({},basic,rentValid,valid)
                    else
                    return Object.assign({},basic,{
                        price: [{ required: true, message: '必填' }],
                        rentPrice: [{ required: true, message: '必填' }],
                        })
                }
            },
            ...mapMutations([
                'getIsAdmin'
            ])
        },
        methods: {
            ...mapActions([
                'commodityupdate',
                'getsendpic',
                'getclasslist',
                'getcommodityparticulars'
            ]),
            getGoods(){
                this.getcommodityparticulars(this.id).then(res=>{
                    if(res.data){
                        this.formValidate=res.data
                        this.formValidate.online=res.data.online.toString()
                        this.imgurl=res.data.picurl
                           this.formValidate.classId=[res.data.kind,res.data.classId]
                        console.log(this.formValidate.classId,this.dataClass)
                    }
                })
            },
            resetImg(){
                this.imgurl=""
                this.disabled=false
                this.formValidate.picurl=""
            },
            getData(){
                this.getclasslist().then(res=>{
                    let mechanical=[],agentia=[]
                    for(var i=0;i<res.data.agentia.length;i++){
                        agentia.push({
                            label:res.data.agentia[i].classStr,
                            value:res.data.agentia[i].classId
                        })
                    }
                    for(var i=0;i<res.data.mechanical.length;i++){
                        mechanical.push({
                            label:res.data.mechanical[i].classStr,
                            value:res.data.mechanical[i].classId
                        })
                    }
                    console.log(mechanical)
                    this.dataClass=[{
                    value: 1,
                    label: '园林药剂',
                    children: agentia
                },{
                    value: 2,
                    label: '电动机械',
                    children: mechanical
                }]
                // mechanical agentia
                 this.getGoods()
                })
            },
            beforeUpload (file) {
                if((file.size/(1024*1024))>2){
                    this.$Notice.warning({
                    title: '文件大小限制',
                    desc: '文件  ' + file.name + ' 太大，上传不超过2M'
                });
                return false;
                }
                const reader = new FileReader()
                // reader.readAsDataURL(file)
                reader.readAsArrayBuffer(file)
                 
                formData.set('pic',file); 
                formData.set('userToken',getToken()); 
               reader.onload = (event) => {
                    let result = event.target.result
                     let blob = new Blob([result]);//存储二进制数据
                    let url = URL.createObjectURL(blob);//生成本地图片地址用于图片预览
                        this.imgurl = url
                        this.disabled =true
                        this.formValidate.picurl=url
                     
                    // this.getsendpic(formData).then(res=>{
                        
                    // })
                }
                return false
                },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        formData.append('id',this.id); 
                        formData.set('name',this.formValidate.name); 
                        formData.set('type',this.formValidate.type); 
                        formData.set('note',this.formValidate.note); 
                        formData.set('deposit',this.formValidate.deposit); 
                        formData.set('inventory',this.formValidate.inventory); 
                        formData.set('price',this.formValidate.price); 
                        formData.set('price1',this.formValidate.price1); 
                        formData.set('price2',this.formValidate.price2); 
                        formData.set('price3',this.formValidate.price3); 
                        formData.set('price4',this.formValidate.price4); 
                        formData.set('price5',this.formValidate.price5); 
                        formData.set('price6',this.formValidate.price6); 
                        formData.set('rentPrice',this.formValidate.rentPrice); 
                        formData.set('rentPrice1',this.formValidate.rentPrice1); 
                        formData.set('rentPrice2',this.formValidate.rentPrice2); 
                        formData.set('rentPrice3',this.formValidate.rentPrice3); 
                        formData.set('rentPrice4',this.formValidate.rentPrice4); 
                        formData.set('rentPrice5',this.formValidate.rentPrice5); 
                        formData.set('rentPrice6',this.formValidate.rentPrice6); 
                        formData.set('classId',this.formValidate.classId[1]); 
                        formData.set('online',this.formValidate.online.length>0?1:0);  
                        this.commodityupdate(formData).then(res=>{
                            if(res.code==1){
                                this.$Message.success('Success!');
                            }
                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                console.log(name)
                this.$refs[name].resetFields();
                this.imgurl = ''
                this.disabled =false
            }
        }
}
</script>

<style lang="less" scoped>
.resetimg{
        top: 0;
    right: 70px;
    position: absolute;
    font-size: 20px;
}
</style>
