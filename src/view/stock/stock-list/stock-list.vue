<template>
    <div>
        <i-table border  :columns="columns" :data="data">
        </i-table>
    </div>
</template>
<script>
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
                    key: 'age'
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
            data: [
                {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居',
                    address2:22
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                    ,address2:2
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                    ,address2:3
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                    ,address2:33
                }
            ]
        }
    },
    created(){
        this.self=this;
        console.log(this.self)
    },
    methods: {
      
    }
}
</script>

<style lang="less" scoped>

</style>
