<template>
    <div>
        <!-- <div class="goods-list-table">
        名称：
                <Input placeholder="请输入搜索内容" style="width: auto">
                    <Icon type="ios-search" slot="suffix" />
                </Input>
        </div> -->
        <i-table border  :columns="columns7" :data="data6" :height="tableheight">
            <template slot-scope="{ row, index }" slot="action">
            <Button  shape="circle" icon="md-eye" style="margin-right: 5px" @click="show(row)"></Button>
            <Button  shape="circle" icon="ios-create" style="margin-right: 5px"  @click="update(row)"></Button>
            <Button  shape="circle" icon="md-trash" @click="remove(row)"></Button>
            </template>
            <template slot-scope="{ row, index }" slot="goodsPic">
                <Avatar shape="square" :src="row.picurl" size="large" />
            </template>
            <template slot-scope="{ row, index }" slot="goodsUpOrDown">
                <i-switch v-model="row.online" :value="row.online" true-value="1" false-value="0" @on-change="addGoods(row)" >
                    <Icon type="md-checkmark" slot="open"></Icon>
                    <Icon type="md-close" slot="close"></Icon>
                </i-switch>
                <!-- <Button type="primary" size="small" style="margin-right: 5px" @click="goodsUp(row)">上架</Button>
                <Button type="success" size="small" style="margin-right: 5px"  @click="goodsDown(row)">下架</Button> -->
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
            tableheight:window.innerHeight-140,
            columns7: [
                {
                    title: '图片',
                    key: 'picurl',
                    width: 60,
                    slot:'goodsPic'
                },
                {
                    title: '名称',
                    key: 'name'
                },
                 {
                    title: '商品类型',
                    key: 'type'
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
                    title: '押金',
                    key: 'deposit'
                },
                {
                    title: '订单总数量',
                    key: 'ordernumTotal'
                },
                 {
                    title: '订单月数量',
                    key: 'ordernumMouth'
                },
                 {
                    title: '订单日数量',
                    key: 'ordernumDay'
                },
                 {
                    title: '分类',
                    key: 'classStr'
                },
                 {
                    title: '库存',
                    key: 'inventory'
                },
                {
                    title: '上/下架',
                    key: 'online',
                    width:100,
                    fixed:'right',
                    // slot:"goodsUpOrDown",
                    render: (h, params) => {  // 重点
                        let _this = this
                        return h('i-switch', {  //按钮的话是：button自行替换
                          props: {  //这里可以设置它的属性
                              value: params.row.online==1?true:false,     //设置它的值比如：true或false
                              },
                              on: { //操作事件
                                input: function (event) {  //这里会起到监听的作用
                                  if (event) { params.row.online = true } else { params.row.online = false }
                                  },
                                  'on-change': function () { //值发生了改变调用方法
                                       _this.addGoods(params.row) // 方法自定义
                                  }
                              }
                        })
                      }
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 160,
                    fixed:'right',
                    align: 'center',
                    slot:'action'
                }
            ],
            data6: []
        }
    },
    mounted(){
        this.getGoodsList()
    },
    methods: {
        ...mapActions([
            'getlistcommodity',
            'getremovecommodity',
            'getcommodityonline',
            'getcommoditydownline'
        ]),
        // 查询商品列表
        getGoodsList(){
            this.getlistcommodity().then(res=>{
                console.log(res.data)
                this.data6=res.data||[]
            })
        },
        // 查看商品详情
        show (row) {
           this.$router.push({
                path:"goods_details",
                query:{
                    id:row.id
                }
            })
        },
        // 删除商品
        remove (row) {
            this.getremovecommodity(row.id).then(res=>{
                if(res.code==1){
                    this.getGoodsList()
                }
            })
        },
        // 更新商品
         update (row) {
            this.$router.push({
                path:"update_goods",
                query:{
                    id:row.id
                }
            })
        },
        // 上架
        goodsUp(row){

        },
        // 下架
        goodsDown(row){
            
        },
        addGoods(row){
            console.log(row)
            if(row.online){
                this.getcommodityonline(row.id).then(res=>{
                    this.getGoodsList()
                })
            }else{
                this.getcommoditydownline(row.id).then(res=>{
                    this.getGoodsList()
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.goods-list-table{
    margin-bottom:20px;
}
</style>
