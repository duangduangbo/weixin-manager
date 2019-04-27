<template>
    <div>
        <i-table border  :columns="columns" :data="userdata">
            <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(row)">查看</Button>
            <!-- <Button type="success" size="small" style="margin-right: 5px" @click="update(row)">修改</Button> -->
            <Button type="error" size="small" @click="remove(row)">删除</Button>
            </template>
        </i-table>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import { getHour24 } from '@/libs/util'
export default {
    name:"user_list",
    data () {
        return {
            self:null,
            columns: [
                {
                    title: '用户名',
                    key: 'nikeName',
                    render (h,params) {
                        return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'md-person'
                                    }
                                }),
                                h('strong', params.row.nikeName)
                            ]);
                    }
                },
                {
                    title: '注册时间',
                    key: 'addTime',
                    render (h,params) {
                        return h('div', getHour24(params.row.addTime));
                    }
                },
                {
                    title: '地区',
                    key: 'alladdress'
                },
                 {
                    title: '订单数',
                    key: 'totalOrderNum'
                },
                 {
                    title: '归属经销商',
                    key: 'distributor'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 200,
                    fixed:'right',
                    align: 'center',
                    slot:'action'
                }
            ],
            userdata:[]
        }
    },
    created(){
        this.self=this;
        console.log(this.self)
    },
    mounted(){
        this.getUserList()
    },
    methods: {
        ...mapActions([
            'getlistuser',
            'getremoveuser'
        ]),
        getUserList(){
            this.getlistuser().then(res=>{
                if(res.data){

                for(let i=0;i<res.data.length;i++){
                    res.data[i].alladdress = (res.data[i].province||'')
                                            + (res.data[i].city||'') 
                                            + (res.data[i].address||'')
                }
                }
                
                this.userdata = res.data||[]
            })
        },
        show (row) {
            this.$router.push({
                path:'user_details',
                name:'user_details',
                query:{
                    id:row.id,
                    isUser:true
                },
                params:{
                    data:row,
                }
            })
        },
        remove (row) {
            this.getremoveuser(row.id).then(res=>{
                if(res.code==1){
                    this.getUserList()
                    this.$Message.success('Success!');
                }
            })
        },
        update(row){
            this.$router.push({
                path:"add_distributor",
                query:{
                    id:row.id
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>
