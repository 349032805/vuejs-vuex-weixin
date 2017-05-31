<template>
   <div class="home">
      <div class="top">
         <div class="left-top">
             <img class="location" src="../../assets/location.png" alt="">
             <span class="content">{{ADDRESS}}</span>
             <img class="arrow" src="../../assets/gray.png" alt="">
         </div>
         <div>
             <span>fdsafdas</span>
         </div>
      </div>
   </div>
</template>

<script>
  import { mapMutations,mapState} from 'vuex'
  export default{
    created () {
      let that = this
      let geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          let [lng,lat] = [r.point.lng, r.point.lat];
          that.$http('/api/geocoder/v2/',{
            location :`${lat},${lng}`,
            output : "json",
            pois :1,
            ak : "Gtc0L5C2rcEvYaGa0ZovlbasH58yl0ip"
          }).then(res=>{
            console.log(res)
            that.SAVE_LOCATION(res.result.location) //把径尾度存起来
            that.SAVE_CITY_CODE(res.result.cityCode) //把城市码给存起来
            that.SAVE_ADDRESS(res.result.formatted_address) //把城市的定位地址给存起来
          }).catch(error=>{
            console.log(error)
          })
        }
        else {
           alert('failed'+this.getStatus());
        }
      },{enableHighAccuracy: true})

//
//
       this.$http('/api/place/v2/search',{
         q : "陆家嘴软件园",
         region : "上海",
         output : "json",
         ak : "Gtc0L5C2rcEvYaGa0ZovlbasH58yl0ip"
       }).then(res=>{
           console.log(res)
       })
    },
    data () {
        return {

        }

    },
    computed : {
      ...mapState([
        'ADDRESS'
      ])
    },
    methods : {
      ...mapMutations([
        'SAVE_LOCATION','SAVE_CITY_CODE','SAVE_ADDRESS'
      ]),
    }
  }
</script>

<style lang="less">
  @import './home.less';
</style>




























