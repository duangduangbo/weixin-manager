<template>
    <div>
        <div class="goods-list-table">
        名称：
                <Input placeholder="请输入搜索内容" style="width: auto">
                    <Icon type="ios-search" slot="suffix" />
                </Input>
        </div>
        <i-table border  :columns="columns7" :data="data6">
            <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
            <Button type="success" size="small" style="margin-right: 5px"  @click="update(index)">修改</Button>
            <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
        </i-table>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:"goods_list",
    data () {
        return {
            self:null,
            columns7: [
                {
                    title: '图片',
                    key: 'name'
                },
                {
                    title: '名称',
                    key: 'age'
                },
                {
                    title: '价格',
                    key: 'address'
                },
                 {
                    title: '订单月数量',
                    key: 'address'
                },
                 {
                    title: '订单日数量',
                    key: 'address'
                },
                 {
                    title: '商品描述',
                    key: 'address'
                },
                 {
                    title: '分类',
                    key: 'address'
                },
                {
                    title: '上/下架',
                    key: 'address'
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
            data6: [
                {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
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
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        },
        remove (index) {
            this.data6.splice(index, 1);
        },
         update (index) {
            this.data6.splice(index, 1);
        }
    }
}
</script>

<style lang="less" scoped>
.goods-list-table{
    margin-bottom:20px;
}
</style>
