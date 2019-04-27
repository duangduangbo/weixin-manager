<template>
    <div class="goods-details">
        <Row class="order-row">
            <Col span="8" offset="3">商品名称：{{ goods.name}}</Col>
            <Col  v-show="goods.type==2||goods.type==3" span="8" offset="3">商品金额：￥{{ goods.price}}</Col>
            <Col v-show="(goods.type==2||goods.type==3)&&isAdmin" span="8" offset="3">商品金额1：￥{{ goods.price1}}</Col>
            <Col v-show="(goods.type==2||goods.type==3)&&isAdmin" span="8" offset="3">商品金额2：￥{{ goods.price2}}</Col>
            <Col v-show="(goods.type==2||goods.type==3)&&isAdmin" span="8" offset="3">商品金额3：￥{{ goods.price3}}</Col>
            <Col v-show="(goods.type==2||goods.type==3)&&isAdmin" span="8" offset="3">商品金额4：￥{{ goods.price4}}</Col>
            <Col v-show="(goods.type==2||goods.type==3)&&isAdmin" span="8" offset="3">商品金额5：￥{{ goods.price5}}</Col>
            <Col v-show="(goods.type==2||goods.type==3)&&isAdmin" span="8" offset="3">商品金额6：￥{{ goods.price6}}</Col>
            
            <Col v-show="goods.type==1||goods.type==3" span="8" offset="3">租赁金额：￥{{ goods.rentPrice}}</Col>
            <Col v-show="(goods.type==1||goods.type==3)&&isAdmin" span="8" offset="3">租赁金额1：￥{{ goods.rentPrice1}}</Col>
            <Col v-show="(goods.type==1||goods.type==3)&&isAdmin" span="8" offset="3">租赁金额2：￥{{ goods.rentPrice2}}</Col>
            <Col v-show="(goods.type==1||goods.type==3)&&isAdmin" span="8" offset="3">租赁金额3：￥{{ goods.rentPrice3}}</Col>
            <Col v-show="(goods.type==1||goods.type==3)&&isAdmin" span="8" offset="3">租赁金额4：￥{{ goods.rentPrice4}}</Col>
            <Col v-show="(goods.type==1||goods.type==3)&&isAdmin" span="8" offset="3">租赁金额5：￥{{ goods.rentPrice5}}</Col>
            <Col v-show="(goods.type==1||goods.type==3)&&isAdmin" span="8" offset="3">租赁金额6：￥{{ goods.rentPrice6}}</Col>
            <Col span="8" offset="3">分类：{{ goods.classStr}}</Col>
            <Col span="8" offset="3">库存：{{ goods.inventory}}</Col>
            <Col span="8" offset="3">保证金：￥{{ goods.deposit}}</Col>
            <Col span="8" offset="3">总销量：{{ goods.ordernumTotal}}</Col>
        </Row>
    </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    name:"goods_details",
    data () {
        return {
            id:this.$route.query.id,
            goods:{},
            isAdmin:this.$store.state.admin.isAdmin,
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        ...mapActions([
            'getcommodityparticulars'
        ]),
        getData(){
            this.getcommodityparticulars(this.id).then(res=>{
                this.goods=res.data
            })
        },
        goodsType(){
            if(this.goods.type==3){
                this.buy=true
                this.rent=true
            }
            if(this.goods.type==2){
                this.buy=true
                this.rent=false
            }
            if(this.goods.type==2){
                this.buy=true
                this.rent=false
            }
        }
    }
}
</script>

<style lang="less" scoped>
.goods-details{
     font-size: 14px;
    background-color:#fff;
    padding:10px;
    height:100%;
    border: 1px solid #dcdee2;
    .order-row{
        height:45px;
        line-height: 45px;
    }
}
</style>
