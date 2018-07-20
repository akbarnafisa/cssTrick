<template>
  <no-ssr>
    <section  :class="filterActive ? 'container filter-active ' : 'container' " class="">
      <Search 
        @filterIsActive="filterIsActive" 
        :filterActive="filterActive" 
        :searchActive="searchActive"
        @search="search = $event"/>
        <FilterButton @filterProject="filterProject" :filterActive="filterActive" :tagList="tagList"/>
        <Card :search="search" :filteredList="filteredList" :filterArray="filterArray"/>
        <div @click="panelActive = !panelActive" id="add-project" class="button-float">
          <div></div>
          <div></div>
        </div>
        <transition name="fade">
          <div v-if="panelActive" id="panelProjectWrapper">
            <div>
              Title : 
             <input v-model="titleInput" type="" name="">
            </div>
            <div>
              link :
              <input v-model="linkInput" type="" name="">
            </div>
            <div>
              Github :
               <input v-model="githubInput" type="" name="">
            </div>
            <div>
              Thumbnail :
               <input v-model="thumbnailInput" type="" name="">
            </div>
            <div @click="onAddProject" class="add-button">
              Add
            </div>
          </div>
        </transition> 
       <transition name="fade">
         <div v-if="panelActive"  class="panelBlack"></div>
       </transition> 
    </section>
   </no-ssr>

</template>

<script>
  export default {
    watch : {
      search : function(){
        this.search.length > 0 ? this.searchActive = true : this.searchActive = false
      },
      filterActive : function(){
        if(!this.filterActive){
          console.log(this.filterArray)
          this.filterArray.forEach( val => {
             const el = document.getElementById(val)
             el.classList.remove("filter-btn-active")
          })
          this.filterArray = []
        }
      }
    },
    data (){
      return{
      titleInput  : '',  
      linkInput  : '', 
      githubInput  : '',
      thumbnailInput : '',
      tagsInput : ['3D','Navigation'],
       search : '',
       panelActive : false,
       filterActive : false,
       filterArray : [],
       searchActive : false,
      }
    },
    methods: {
      filterIsActive : function(){
        this.filterActive = !this.filterActive
        this.search = ''
      },
      filterProject (value) {
        const el = value
        el.classList.toggle("filter-btn-active")
        const index = this.filterArray.indexOf(el.id)
        if(index > -1){
          this.filterArray.splice(index, 1);
        }
        else{
          this.filterArray.push(el.id)
        }
      },
      onAddProject(){
        if( this.titleInput != '' && this.linkInput !='' && this.githubInput !='' && this.thumbnailInput !='' ){
          const project = {
            title  :  this.titleInput,  
            link  :  this.linkInput, 
            github : this.githubInput ,
            thumbnail : this.thumbnailInput ,
            tags : ['3D','Navigation'],
          }
          // this.projects.push(project)
          this.$store.dispatch('createProjects', project)
          this.titleInput = ''
          this.linkInput = ''
          this.githubInput = ''
          this.thumbnailInput = ''
      
        }
    
        this.panelActive = !this.panelActive
      }
    },
    computed : {
     projects(){
      return this.$store.getters.loadProjects
    },
     filteredList() {
      if(this.filterArray.length > 0){ // filter using tag
        return this.projects.filter(project => {
          return this.filterArray.every((val) => project.tags.includes(val))
        })
      }
      else{
        return this.projects.filter(project => { // filter using search
          return project.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
     },
     tagList(){
        var tag = []
      
        this.projects.forEach( project => {
          project.tags.forEach(item => tag.includes(item) ? null : tag.push(item));
        })
        return tag.sort()
     }

    },
    
  }
</script>

<style scoped>
  .filter-active .card-wrapper {
    transform: translate3d(0,100px,0);
  }
  .add-button{
    background : #061e46;
    height: 48px;
    text-align: center;
    line-height: 48px;
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease;

  }

  .add-button:hover{
    background: #041025;
  }
  #panelProjectWrapper{
    width: 325px;
    height: 455px;
    background : #2074ff;
     bottom : 10rem;
     right : 10rem;
    position: fixed;
    border-radius: 1rem;
    z-index: 11;
    display: flex;
    flex-direction: column;
    padding : 3rem;
    font-size: 1.6rem;
    color : white;
    font-family: 'Josefin Sans', sans-serif;
  }

  #panelProjectWrapper input{
    padding: 0 13px;
    line-height: 40px;
    width: 100%;
    height: 38px;
    background: rgba(255, 255, 255, .2);
    border: 1px solid rgba(255, 255, 255, .35);
    border-radius: 2px;
    color : white;
    font-size : 16px;
    font-family: 'Josefin Sans', sans-serif;
    outline: 0;
    margin-bottom : 2rem;
    margin-top : 1rem;
  }

  .panelBlack{
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(40,60,80,.9);
    left: 0;
    top: 0;
    z-index: 10;
  }
  .button-float{
    height: 55px;
    width: 55px;
    border-radius: 50%;
    box-shadow: 0px 5px 20px -5px rgba(0,0,0,.5);
    background :#657ED4;
    bottom : 5rem;
    right : 5rem;
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: all .3s ease;
   z-index: 12;
  }

  .button-float:hover{
    background :#3626A7;
  }

  .button-float div{
    width: 45%;
    height: 4px;
    background-color: white;
    position: absolute;
  }

  .button-float > div:first-child{
    transform: rotate(90deg);
  }
  .container{
    width: 1114px;
    margin : 0 auto;
    display: flex;
    flex-wrap: wrap;
  
  }


</style>
