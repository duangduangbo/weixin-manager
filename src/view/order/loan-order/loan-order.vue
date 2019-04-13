<template>
    <div>
        <i-table border  :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
            <!-- <Button type="success" size="small" style="margin-right: 5px" @click="update(index)">修改</Button> -->
            <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
        </i-table>
    </div>
</template>
<script>
export default {
    name:"loan_order",
    data () {
        return {
            self:null,
            columns: [
                {
                    title: '商品名称',
                    key: 'name'
                },
                {
                    title: '日期',
                    key: 'age'
                },
                {
                    title: '购买人',
                    key: 'address'
                },
                 {
                    title: '地区',
                    key: 'address1'
                },
                 {
                    title: '分类',
                    key: 'address2'
                },
                {
                    title: '经销商',
                    key: 'address2'
                },
                {
                    title: '金额',
                    key: 'address2'
                },
                {
                    title: '保证金',
                    key: 'address2'
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
            data: [
                {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居',
                    address2:'123231'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                    ,address2:'123231'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                    ,address2:'123231'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                    ,address2:'123231'
                }
            ]
        }
    },
    created(){
        this.self=this;
        console.log(this.self)
    },
    methods: {
        show (index) {
            this.$router.push({
                path:'order_details'
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
