<template>

    <div class="user-details">
        <RadioGroup v-show="isUser" v-model="action" type="button" @on-change="actionChange">
            <Radio label="1">启用</Radio>
            <Radio label="2">禁用</Radio>
            <Radio label="3">拉黑</Radio>
            <Radio label="4">删除</Radio>
        </RadioGroup>
        <Row class="user-row">
            <Col span="8" offset="3"><strong>用户名：{{ isUser?data.nikeName:data.username }}</strong></Col>
            <Col span="8" offset="3"><strong>注册时间：{{ getHour(data.addTime) }}</strong></Col>
            <Col span="8" offset="3"><strong>姓名：{{ data.realname }}</strong></Col>
            <Col span="8" offset="3"><strong>电话：{{ data.phone }}</strong></Col>
            <Col span="8" offset="3"><strong>地区：{{ data.province }}{{ data.city }}{{ data.address }}</strong></Col>
            <Col span="8" offset="3"><strong>订单数：{{ data.totalOrderNum }}</strong></Col>
            <!-- <Col span="8" offset="3" v-show="isUser"><strong>购买记录：{{ data.totalOrderNum }}</strong></Col> -->
            <!-- <Col span="8" offset="3" v-show="!isUser"><strong>返利统计：{{ data.addTime }}</strong></Col> -->
            <Col span="8" offset="3" v-show="!isUser"><strong>店铺名：{{ data.distributorName }}</strong></Col>
            <Col span="8" offset="3" v-show="!isUser"><strong>是否授权：{{ data.authority==1?"是":"否" }}</strong></Col>
        </Row>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import { getHour24 } from '@/libs/util'
export default {
    name:"user_details",
    data () {
        return {
            id:this.$route.query.id,
            isUser:this.$route.query.isUser,
            data:{},
            action:''
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        ...mapActions([
            'getuserparticulars',
            'distriparticulars',
            'getupdateuser'
        ])
        ,
        getHour(val){
            return getHour24(val)
        },
        actionChange(val){
            this.getupdateuser({
                one:this.id,
                two:val
            })
        },
        getData(){
            if(this.isUser){
                
            this.getuserparticulars(this.$route.query.id).then(res=>{
                this.data=res.data
                this.action=res.data.authority
            })
            }else{
                this.distriparticulars(this.$route.query.id).then(res=>{
                this.data=res.data
            })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.user-details{
    font-size: 14px;
    background-color:#fff;
    padding:10px;
    height:100%;
    border: 1px solid #dcdee2;
    .user-row{
        height:50px;
        line-height: 50px;
    }
}
</style>
