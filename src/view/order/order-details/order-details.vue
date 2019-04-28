<template>
    <div class="order-details">
        <Row class="order-row">
            <Col span="8" offset="3">商品名称：{{ data.commodityName }}</Col>
            <Col span="8" offset="3">支付金额：{{ data.payMoney }}</Col>
            <Col span="8" offset="3">购买日期：{{ data.payOrdertime }}</Col>
            <Col span="8" offset="3">购买数量：{{ data.count }}</Col>
            <Col span="8" offset="3">购买人：{{ data.ownerName }}</Col>
            <Col span="8" offset="3">收货地址：{{ data.addr }}</Col>
            <Col span="8" offset="3" v-show="isLoan">保证金：{{ data.deposit }}</Col>
            <!-- <Col span="8" offset="3">租赁时间：{{ data.makeOrdertime }}</Col> -->
            <Col span="8" offset="3">经销商：{{ data.distributorID }}</Col>
            <Col span="8" offset="3">订单状态：{{ state[data.status] }}</Col>
        </Row>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import {getHour24} from '@/libs/util'
export default {
    name:"order_details",
    data () {
        return {
            isLoan:this.$route.query.isLoan,
            data:[],
            id:this.$route.query.id,
            state:['交易已取消','待支付', '已支付', '待发货', '待收货','待评价', '交易完成']
        }
    },
    mounted(){
        console.log(this.isLoan)
        this.getData()
    },
    methods: {
        ...mapActions([
            'getrentorderparticulars',
            'getlistpart'
        ]),
        getData(){
            if(this.isLoan){
                
            this.getrentorderparticulars(this.id).then(res=>{
                this.data=res.data
                this.data.payOrdertime=getHour24(this.data.payOrdertime)
            })
            }else{
                
            this.getlistpart(this.id).then(res=>{
                this.data=res.data
                this.data.payOrdertime=getHour24(this.data.payOrdertime)
            })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.order-details{
     font-size: 14px;
     background-color:#fff;
    padding:10px;
    height:100%;
    border: 1px solid #dcdee2;
    .order-row{
        height:50px;
        line-height: 50px;
    }
}
</style>
