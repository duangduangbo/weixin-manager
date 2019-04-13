<template>
    <div class="user-details">
        <Row class="user-row">
            <Col span="4" offset="6"><strong>用户名：</strong></Col>
            <Col span="10" offset="4"><strong>注册时间：</strong></Col>
        </Row>
        <Row class="user-row">
            <Col span="4" offset="6"><strong>地区：</strong></Col>
            <Col span="10" offset="4"><strong>订单数：</strong></Col>
        </Row>
        <Row class="user-row">
            <Col span="4" offset="6"><strong>购买记录：</strong></Col>
            <Col span="10" offset="4"><strong>返利统计：</strong></Col>
        </Row>
    </div>
</template>
<script>
export default {
    name:"user_details",
    data () {
        return {
            
        }
    },
    created(){
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
.user-details{
    font-size: 14px;
    .user-row{
        height:50px;
        line-height: 50px;
    }
}
</style>
