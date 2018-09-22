<template>
  <div id="app">
    <main class="content">
      <img
          v-lazyimg
          v-for="img in images"
          :key="'lazy1-'+ img"
          class="lazy 1"
          :data-src="img.url"
          data-quality="40"
          data-width="350"
          data-height="350"/>
    </main>
    <footer class="footer">
      Copyright © 2018 by Blibli.com Tech Team
    </footer>
  </div>
</template>

<script>
import imageConverter from 'akamai-image-converter'
export default {
  name: "app",
  data() {
    return {
      modalShow: false,
      indexShow: 40,
      imagess: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      images: [
        { url: 'http://cdn.johnywheels.com/2016/02/02/dodgemusclecarwallpaperwallpaperwallpaperlepi-l-6c27dac2e340ac42.jpg'},
        { url: 'http://cdn.johnywheels.com/2016/02/02/dodgemusclecarwallpaperwallpaperwallpaperlepi-l-6c27dac2e340ac42.jpg'},
        { url: 'http://cdn.johnywheels.com/2016/02/02/dodgemusclecarwallpaperwallpaperwallpaperlepi-l-6c27dac2e340ac42.jpg'},
        { url: 'http://cdn.johnywheels.com/2016/02/02/dodgemusclecarwallpaperwallpaperwallpaperlepi-l-6c27dac2e340ac42.jpg'},
        { url: 'http://cdn.johnywheels.com/2016/02/02/dodgemusclecarwallpaperwallpaperwallpaperlepi-l-6c27dac2e340ac42.jpg'},
        { url: 'http://cdn.johnywheels.com/2016/02/02/dodgemusclecarwallpaperwallpaperwallpaperlepi-l-6c27dac2e340ac42.jpg'},
        { url: 'http://cdn.johnywheels.com/2016/02/02/dodgemusclecarwallpaperwallpaperwallpaperlepi-l-6c27dac2e340ac42.jpg'},
        { url: 'http://cdn.johnywheels.com/2016/02/02/dodgemusclecarwallpaperwallpaperwallpaperlepi-l-6c27dac2e340ac42.jpg'},
        ]
    }
  },
  methods: {
    openModal () {
      this.modalShow = !this.modalShow
      if (this.modalShow){
        if (this.indexShow === 1) {
          this.indexShow = 40
        } else {
          this.indexShow--
        }
      }
    },
    hideModal () {
      this.modalShow = false
    }
  }
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji";
  color: #000;
  font-size: 100%;
}
a {
  color: #0095DA;
  text-decoration: none;
}
a:hover {
  color: #0095DA;
}
h1 {
  margin: 0;
  margin-left: 0.3em;
  font-size: 1.5rem;
  color: #000;;
}
.header,
.footer {
  width: 100%;
  background-color: #0095DA;
  color: #000;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
}
.header {
  justify-content: space-between;
  height: 60px;
  top: 0;
}
.footer {
  justify-content: center;
  height: 50px;
  font-size: 1rem;
  bottom: 0;
}
.ic {
  fill: #000;
  margin-right: 0.3em;
  width: 30px;
  height: 30px;
}
.content {
  margin: 70px 0;
  text-align: center;
}
.lazy {
  display: block;
  margin: 1em auto;
  text-align: center;
  width: 350px;
  height: 350px;
}
.modal{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    overflow: auto;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: black;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
}
@media screen and (min-width: 640px) {
  .modal img {
    width: 500px;
    height: 500px;
  }
}
.btn{
  background: #0095DA;
  color: #000;
  display: inline-block;
  padding: 13px 20px;
  outline: none;
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25em;
}
</style>