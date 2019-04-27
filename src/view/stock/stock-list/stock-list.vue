<template>

    <div>
        <i-table border  :columns="columns" :data="data">
        </i-table>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import { getHour24 } from '@/libs/util'
export default {
    name:"stock_list",
    data () {
        return {
            self:null,
            columns: [
                {
                    title: '商品',
                    key: 'name'
                },
                {
                    title: '上架时间',
                    key: 'age',
                    render: (h, params) => {
                            return h('div', getHour24(params.row.address2))
                        }
                },
                {
                    title: '归属经销商',
                    key: 'address'
                },
                 {
                    title: '库存数',
                    key: 'address2',
                    render: (h, params) => {
                            return h('div', [
                                h('strong',{
                                    style:{
                                        color:Number(params.row.address2)<10? 'red':'' 
                                    }
                                }, params.row.address2)
                            ]);
                        }
                }
            ],
            data: []
        }
    },
    mounted(){
        this.getData()
        console.log(this.self)
    },
    methods: {
      ...mapActions(['getinventoryWarning']),
      getData(){
          this.getinventoryWarning().then(res=>{
                this.data=res.data
          })
      }
    }
}
</script>

<style lang="less" scoped>

</style>
