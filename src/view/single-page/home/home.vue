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
    <Row :gutter="20" style="margin-top: 10px;"  v-show="isMain">
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
import { mapActions } from 'vuex'
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
      charList:['暂无数据'],
      inforCardData: [
        { title: '盈利数', icon: 'md-person-add', count: 0, color: '#2d8cf0' },
        { title: '订单数', icon: 'md-locate', count: 0, color: '#19be6b' },
        { title: '用户数', icon: 'md-help-circle', count: 0, color: '#ff9900' },
      ],
      inforCardMain: [
        { title: '总销量', icon: 'md-person-add', count: 0, color: '#2d8cf0' },
        { title: '订单数', icon: 'md-locate', count: 0, color: '#19be6b' }
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
            data: []
    }
  },
  mounted () {
    this.getHomeCount()
  },
  methods:{
    ...mapActions([
      'getHome'
    ]),
    getHomeCount(){
      this.getHome().then(res=>{
          console.log(res.data)
          let keyword=res.data.keyword//关键词list
          let salesDay=res.data.salesDay//销售量list
          let salesHot=res.data.salesHot//热销情况list
          let totalOrder=res.data.totalOrder//订单数int
          let totalSales=res.data.totalSales//总销量int
          if(this.$store.state.admin.isAdmin==1){
            this.$set(this.inforCardMain[1],"count",totalOrder)
            this.$set(this.inforCardMain[0],"count",totalSales)
          }else{
            this.$set(this.inforCardData[1],"count",totalOrder)
            this.$set(this.inforCardData[0],"count",totalSales)
            
          }
      })
    }

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
