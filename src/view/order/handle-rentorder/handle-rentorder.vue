<template>
    <div>
        <Tabs @on-click="onClick">
        <TabPane label="未处理订单" icon="ios-analytics-outline">
            <no-handle></no-handle>
        </TabPane>
        <TabPane label="已处理订单" icon="ios-analytics">
            <yes-handle></yes-handle>
        </TabPane>
    </Tabs>
    </div>
</template>
<script>
import noHandle from "./component/nohandle-order"
import yesHandle from "./component/yeshandle-order"
import { mapActions } from 'vuex';
export default {
    name:"handle_rentorder",
    components:{
        noHandle,
        yesHandle
    },
    methods:{
        onClick(){
            
        }
    }
}
</script>

<style lang="less" scoped>

</style>
