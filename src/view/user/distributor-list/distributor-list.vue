<template>
    <div>
        <i-table border  :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="action">
                <Button  shape="circle" icon="md-eye" style="margin-right: 5px" @click="show(row)"></Button>
                <Button  shape="circle" icon="md-create"  style="margin-right: 5px" @click="update(row)"></Button>
                <Button  shape="circle" icon="md-trash"  style="margin-right: 5px" @click="remove(row)"></Button>
                <Button v-show="row.authority==0" type="success" size="small" style="margin-right: 5px" @click="getAuthority(row)">授权</Button>
                <Button v-show="row.authority==1"  type="error" size="small" @click="removeAuthority(row)">取消授权</Button>
            </template>
        </i-table>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import {getHour24} from '@/libs/util'
export default {
    name:"distributor_list",
    data () {
        return {
            self:null,
            columns: [
                {
                    title: '用户名',
                    key: 'username',
                    render (h,params) {
                        return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'md-person'
                                    }
                                }),
                                h('strong', params.row.username)
                            ]);
                    }
                },
                {
                    title: '真实姓名',
                    key: 'realname'
                },
                {
                    title: '注册时间',
                    key: 'addTime',
                    render(h,params){
                        return h('div',getHour24(params.row.addTime))
                    }
                },
                {
                    title: '地区',
                    key: 'address',
                    render (h,params) {
                        let str=params.row.province+params.row.city+params.row.address
                        console.log(str)
                        return h('div',str);
                    }
                },
                 {
                    title: '购买订单数',
                    key: 'orderNum'
                },
                {
                    title: '租赁订单数',
                    key: 'rentOrderNum'
                },
                 {
                    title: '经销商店铺名',
                    key: 'distributorName'
                },
                 {
                    title: '归属经销商',
                    key: 'parent'
                },
                {
                    title: '经销商等级',
                    key: 'grade'
                },
                {
                    title: '权限',
                    key: 'authority',
                    render (h,params) {
                        let str=params.row.authority==1?"已授权":"未授权"
                        console.log(str)
                        return h('div',str);
                    }
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 220,
                    fixed:'right',
                    align: 'center',
                    slot:'action'
                }
            ],
            data: []
        }
    },
    mounted(){
        this.getDistributorList()
    },
    methods: {
        ...mapActions([
            'getlistdistributor',
            'getremovedistributor',
            'getauthorize',
            'removeauthorize'
        ]),
        getDistributorList(){
            this.getlistdistributor().then(res=>{
                this.data=res.data||[]
            })
        },
        show (row) {
            this.$router.push({
                path:'user_details',
                name:'user_details',
                query:{
                    id:row.id,
                    isUser:false
                }
            })
        },
        remove (row) {
            console.log(row)
            this.getremovedistributor(row.id).then(res=>{
                if(rse.code==1){
                    this.getDistributorList()
                    this.$Message.success("Success!")
                }
            })
        },
        update (row) {
            this.$router.push({
                path:"update_distributor",
                query:{
                    id:row.id
                }
            })
        },
        getAuthority(row){
            this.getauthorize(row.id).then(res=>{
                if(res.code==1){
                    this.getDistributorList()
                    this.$Message.success("Success!")
                }
            })
        },
        removeAuthority(row){
            this.removeauthorize(row.id).then(res=>{
                console
                if(res.code==1){
                    this.getDistributorList()
                    this.$Message.success("Success!")
                }
            })

        },
    }
}
</script>

<style lang="less" scoped>

</style>
