<template>
  <div id="map" style="height: 300px; width: 300px;"></div>
</template>

<script>
export default {
  created() {

  },
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
       var map = new AMap.Map('map',{
            resizeEnable: true,
            zoom: 10,
            center: [116.480983, 40.0958]
        });
    }
  }
}  
</script>