<template>
    <div>
        <i-table border  :columns="columns7" :data="data6" :height="tableheight">
        </i-table>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:"goods_sales",
    data () {
        return {
            self:null,
            tableheight:window.innerHeight-140,
            columns7: [
                {
                    title: '名称',
                    key: 'name'
                },
                 {
                    title: '商品类型',
                    key: 'type',
                    render(h,params){
                        let typename='';
                        if(params.row.type==1)
                        typename="可租赁"
                        if(params.row.type==2)
                        typename="可购买"
                        if(params.row.type==3)
                        typename="可购买可租赁"
                        return h('div',typename)
                    }
                },
                {
                    title: '购买价格',
                    key: 'price'
                },
                {
                    title: '租赁价格',
                    key: 'rentPrice'
                },
                 {
                    title: '销售日数量',
                    key: 'salesVolumeDay'
                },
                 {
                    title: '销售月数量',
                    key: 'salesVolumeMouth'
                },
                {
                    title: '销售总数量',
                    key: 'sales'
                },
                 {
                    title: '销售日金额',
                    key: 'salesPriceDay'
                },
                {
                    title: '销售月金额',
                    key: 'salesPriceMouth'
                },
                {
                    title: '销售总金额',
                    key: 'salesPriceTotal'
                },
                {
                    title: '租赁日数量',
                    key: 'rentVolumeDay'
                },
                 {
                    title: '租赁月数量',
                    key: 'rentVolumeMouth'
                },
                {
                    title: '租赁总数量',
                    key: 'rentVolumeTotal'
                },
                 {
                    title: '租赁日金额',
                    key: 'rentPriceDay'
                },
                {
                    title: '租赁月金额',
                    key: 'rentPriceMouth'
                },
                {
                    title: '租赁总金额',
                    key: 'rentPriceTotal'
                },
            ],
            data6: []
        }
    },
    mounted(){
        this.getGoodsList()
    },
    methods: {
        ...mapActions([
            'getSalesTabel'
        ]),
        // 查询商品列表
        getGoodsList(){
            this.getSalesTabel().then(res=>{
                console.log(res.data)
                this.data6=res.data||[]
            })
        },
    }
}
</script>

<style lang="less" scoped>
.goods-list-table{
    margin-bottom:20px;
}
</style>
