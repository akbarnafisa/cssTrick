<template>
  <div class="wrapper">
    <div id="cvs" class="slide-wrapper">
      				
    </div>

    <a href="#" class="scene-nav scene-nav--prev" data-nav="previous">PREV</a>
    <a href="#" class="scene-nav scene-nav--next" data-nav="next">NEXT</a>
  </div>
</template>

<script>
  // import {Container} from 'pixi.js'


  // import { TimelineMax } from 'greensock';
  // import { TweenMax } from 'greensock';
 
  

  // export default {
  //   data() {
  //     return {
  //       displacementImage: '/distortion/clouds.jpg',
  //       sprites : ['/Img21.jpg',
  //       '/Img22.jpg',
  //       '/Img26.jpg'],
  //       currentIndex : 0,

  //     }
  //   },
  //   mounted(){
  //     this.drawCanvas()
  //   },
  //   methods: {
  //     drawCanvas() {
  //       var app                 = new PIXI.Application();
  //       var slidesContainer     = new PIXI.Container();
  //       var displacementSprite  = new PIXI.Sprite.fromImage( this.displacementImage );
  //       var displacementFilter  = new PIXI.filters.DisplacementFilter( displacementSprite );
  //       var body                = document.getElementById('cvs')
  //       var nav                 = document.querySelectorAll( '.scene-nav' )
  //       var self                = this

  
        
      

  //       // Add canvas to the HTML
  //       document.body.appendChild( app.view );
        

  //       // Add child container to the main container 
  //       app.stage.addChild( slidesContainer );
  //       app.stage.interactive = true;
        

  //       // Set the filter to stage and set some default values for the animation

  //       app.stage.filters = [displacementFilter]; 

  //       this.sprites.forEach(sprite => {
  //         var texture = new PIXI.Texture.fromImage(sprite)
  //         var image = new PIXI.Sprite(texture)
  //         image.anchor.set(0.5);
  //         image.x = app.renderer.width / 2;
  //         image.y = app.renderer.height / 2;  
  //         slidesContainer.addChild(image)
  //       })

      
  //       var slideImages = slidesContainer.children;
  //       var isPlaying = false;  

  //       for ( var i = 0; i < nav.length; i++ ) {
  //         var navItem = nav[i];
  //         navItem.onclick = function( event ) {
  //           // Make sure the previous transition has ended
  //           if ( isPlaying ) {
  //             return false;
  //           }     
  //           if ( this.getAttribute('data-nav') === 'next' ) {
  //             if ( self.currentIndex >= 0 && self.currentIndex < slideImages.length - 1 ) {
  //               moveSlider( self.currentIndex + 1 );
  //             } else {
  //               moveSlider( 0 );
  //             }
  //           } else {
  //             if ( self.currentIndex > 0 && self.currentIndex < slideImages.length ) {
  //               moveSlider(  self.currentIndex - 1 );
  //             } else {
  //               moveSlider( self.sprites.length - 1 );
  //             }            
  //           }
  //           return false;
  //         }
  //       }

        
       
  //       function moveSlider( newIndex ) {
  //         isPlaying = true;
  //         console.log(self.currentIndex)
  //         console.log(self.sprites)
  //         var baseTimeline = new TimelineMax( { onComplete: function () {
  //           self.currentIndex = newIndex;
  //           isPlaying = false;
  //         }}); 
          
  //         baseTimeline
  //           .to(displacementFilter.scale, 1, { x: 200, y: 200  })
  //           .to(slideImages[self.currentIndex], 0.5, { alpha: 0 })
  //           .to(slideImages[newIndex], 0.5, { alpha: 1 })          
  //           .to(displacementFilter.scale, 1, { x: 20, y: 20 } );

  //       };

  //       slidesContainer.interactive = true;
  //       slidesContainer.buttonMode = true;
        
  //       var rafID, mouseX, mouseY;

  //       function rotateSpite() {
  //         displacementSprite.rotation += 0.001;
  //         rafID = requestAnimationFrame( rotateSpite );
  //       }

  //       slidesContainer.pointerover = function( mouseData ){
  //         mouseX = mouseData.data.global.x;
  //         mouseY = mouseData.data.global.y;   
  //         TweenMax.to( displacementFilter.scale, 1, { x: "+=" + Math.sin( mouseX ) * 100 + "", y: "+=" + Math.cos( mouseY ) * 100 + ""  });   
  //         rotateSpite();
  //       }      
                    
  //       slidesContainer.pointerdown = function( mouseData ){
  //         mouseX = mouseData.data.global.x;
  //         mouseY = mouseData.data.global.y;         
  //         TweenMax.to( displacementFilter.scale, 1, { x: "+=" + Math.sin( mouseX ) * 100 + "", y: "+=" + Math.cos( mouseY ) * 200 + ""  });   
  //       }     

  //       slidesContainer.pointerout = function( mouseData ){
  //         TweenMax.to( displacementFilter.scale, 1, { x: 0, y: 0 });
  //         cancelAnimationFrame( rafID );
  //       }     

  //       slidesContainer.pointerup = function( mouseData ){
  //         TweenMax.to( displacementFilter.scale, 1, { x: 0, y: 0 });                      
  //         cancelAnimationFrame( rafID );
  //       }   
   
  //     },
  //   },
  //   computed: {
      
  //   }
  // }
</script>

<style scoped>
  .wrapper{
    position: relative;
    width:100%;
    height: 100%;
  }
  .slide-wrapper {
  
  }

  .scene-nav {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: red;
  }

  .scene-nav--next {
    right: 2%;
  }

  .scene-nav--prev {
    left: 2%;
  }

  
</style>