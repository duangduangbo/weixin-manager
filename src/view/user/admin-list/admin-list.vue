<template>
    <div>
        <i-table border  :columns="columns7" :data="data6">
            <template slot-scope="{ row, index }" slot="action">
            <Button  shape="circle" icon="md-eye" style="margin-right: 5px" @click="show(index)"></Button>
            <Button  shape="circle" icon="md-trash" @click="remove(index)"></Button>
            </template>
        </i-table>
    </div>
</template>
<script>
export default {
    name:"admin_list",
    data () {
        return {
            self:null,
            columns7: [
                {
                    title: '姓名',
                    key: 'name',
                    render (h,params) {
                        return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'md-person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                    }
                },
                {
                    title: '年龄',
                    key: 'age'
                },
                {
                    title: '地址',
                    key: 'address'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
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
        }
    }
}
</script>

<style lang="less" scoped>

</style>
