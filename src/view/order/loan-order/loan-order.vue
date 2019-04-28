<template>
    <div>
        <i-table border  :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="action">
            <Button shape="circle" icon="md-eye" style="margin-right: 5px" @click="show(row)"></Button>
            <!-- <Button type="success" size="small" style="margin-right: 5px" @click="update(index)">修改</Button> -->
            <!-- <Button type="error" size="small" @click="remove(row)">删除</Button> -->
            </template>
        </i-table>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import {getHour24} from '@/libs/util'
export default {
    name:"loan_order",
    data () {
        return {
            self:null,
            columns: [
                {
                    title: '商品名称',
                    key: 'commodityName'
                },
                {
                    title: '日期',
                    key: 'payOrdertime',
                    render(h,params){
                        return h('div',getHour24(params.row.payOrdertime))
                    }
                },
                {
                    title: '购买人',
                    key: 'ownerName'
                },
                 {
                    title: '地区',
                    key: 'addr'
                },
                 {
                    title: '订单状态',
                    key: 'status'
                },
                // {
                //     title: '经销商',
                //     key: 'distributorName'
                // },
                {
                    title: '经销商ID',
                    key: 'distributorID'
                },
                {
                    title: '金额',
                    key: 'payMoney'
                },
                {
                    title: '保证金',
                    key: 'deposit'
                },
                {
                    title: '订单数量',
                    key: 'count'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 100,
                    fixed:'right',
                    align: 'center',
                    slot:'action'
                }
            ],
            data: []
        }
    },
    mounted(){
        this.getRentOrderList()
    },
    methods: {
        ...mapActions([
            'getrentorderlist'
        ]),
        getRentOrderList(){
            this.getrentorderlist().then(res=>{
                this.data=res.data||[]
            })
        },
        show (row) {
            this.$router.push({
                path:'order_details',
                name:'order_details',
                query:{
                    id:row.orderNumber,
                    isLoan:true
                }
            })
        },
        remove (index) {
            this.data6.splice(index, 1);
        }
    }
}
</script>

<style lang="less" scoped>

</style>
