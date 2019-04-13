<template>
    <div class="order-details">
        <Row class="order-row">
            <Col span="4" offset="6">商品名称：</Col>
            <Col span="10" offset="4">商品金额：</Col>
        </Row>
        <Row class="order-row">
            <Col span="4" offset="6">购买日期：</Col>
            <Col span="10" offset="4">购买数量：</Col>
        </Row>
        <Row class="order-row">
            <Col span="4" offset="6">购买人：</Col>
            <Col span="10" offset="4">收货地址：</Col>
        </Row>
        <Row class="order-row" v-show="isLoan">
            <Col span="4" offset="6">保证金：</Col>
            <Col span="10" offset="4">租赁时间：</Col>
        </Row>
        <Row class="order-row">
            <Col span="4" offset="6">经销商：</Col>
            <Col span="10" offset="4">订单状态：</Col>
        </Row>
    </div>
</template>
<script>
export default {
    name:"order_details",
    data () {
        return {
            isLoan:true
        }
    },
    created(){
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
.order-details{
     font-size: 14px;
    .order-row{
        height:50px;
        line-height: 50px;
    }
}
</style>
