<template>
  <div class="home">
    <Row :gutter="20" v-show="!isMain">
      <i-col :xs="12" :md="8" :lg="6" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <Row :gutter="20" v-show="isMain">
      <i-col :xs="12" :md="8" :lg="8" v-for="(infor, i) in inforCardMain" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <Row :gutter="20" style="margin-top: 10px;"  v-show="!isMain">
      <i-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <Card shadow>
           <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            用户前十关键词
          </p>
          <ul>
              <li v-for="item in charList">
                  <span>{{item}}</span>
              </li>
          </ul>
        </Card>
      </i-col>
      <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <Card shadow>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            经销商返利
          </p>
          <i-table border  :columns="columns" :data="data" height="250">
        </i-table>
        </Card>
      </i-col>
    </Row>
    <!-- <Row>
      <Card shadow>
        <example style="height: 310px;"/>
      </Card>
    </Row> -->
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  data () {
    return {
      charList:["12",'12'],
      inforCardData: [
        { title: '盈利数', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '订单数', icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: '用户数', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        // { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        // { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        // { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      inforCardMain: [
        { title: '总销量', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '订单数', icon: 'md-locate', count: 232, color: '#19be6b' }
      ],
      isMain:true,
      columns: [
                {
                    title: '名称',
                    key: 'name'
                },
                {
                    title: '日期',
                    key: 'age'
                },
                {
                    title: '销量',
                    key: 'address'
                },
                 {
                    title: '金额',
                    key: 'address1'
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
  mounted () {
    //
  }
}
</script>

<style lang="less">
.home{
  ul li{
    list-style: none;
    line-height: 35px;
  }
}
.count-style{
  font-size: 50px;
}
</style>
