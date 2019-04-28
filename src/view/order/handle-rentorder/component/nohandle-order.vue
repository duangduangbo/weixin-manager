<template>
    <div>
        <i-table border  :columns="columns7" :data="data6">
            <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(row)">发货</Button>
            <!-- <Button type="primary" size="small" style="margin-right: 5px" @click="removeShow(row)">取消发货</Button> -->
            <!-- <Button type="error" size="small" @click="remove(row)">取消订单</Button> -->
            </template>
        </i-table>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import {getHour24} from '@/libs/util'
export default {
    name:"nohandle_order",
    data () {
        return {
            columns7: [
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
                    title: '地址',
                    key: 'addr'
                },
                 {
                    title: '订单状态',
                    key: 'status'
                },
                  {
                    title: '取消原因',
                    key: 'reason'
                },
                {
                    title: '经销商ID',
                    key: 'distributorID'
                },
                {
                    title: '经销商',
                    key: 'distributorName'
                },
                {
                    title: '支付状态',
                    key: 'status',
                    render (h,params) {
                        let sta=Number(params.row.status)>=1?"已支付":"未支付"
                        return h('div',sta);
                    }
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
            data6: []
        }
    },
    mounted(){
        this.getNoOrder()
    },
    methods: {
        ...mapActions([
            'getrentorderundo',
            'getrentordersend'
        ]),
        getNoOrder(){
            this.getrentorderundo().then(res=>{
                this.data6=res.data||[]
            })
        },
        show (row) {
            this.getrentordersend(row.orderNumber).then(res=>{
                this.getNoOrder()
            })
        },
        remove (row) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>
