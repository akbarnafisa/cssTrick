import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      mouseIn : {
        link : false,
        element : false,
      },
			projects:[
        {
          title : 'Material Button',
          tags : ['Three.js','Image'],
          origin : '',
          link : 'material-button',
          github : 'https://www.youtube.com/?pbjreload=10',
          thumbnail : 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2018/04/particleeffects_featured.jpg'
        },
        {
          title : 'Circle on Mouse',
          tags : ['Three.js','Image','Component'],
          origin : '',
          link : 'circle-on-mouse',
          github : 'https://www.youtube.com/?pbjreload=10',
          thumbnail : 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2018/04/DistortionHoverEffect.jpg'
        },
        {
          title : 'Circle Hamburger Menu',
           tags : ['Naviagtion','Component'],
           origin : '',
          link : 'circle-hamburger-menu',
          github : 'https://www.youtube.com/?pbjreload=10',
          thumbnail : 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2018/05/GridLayoutMotion_featured.jpg'
        },
        {
          title : 'Particle Effects for Buttons',
         tags : ['Three.js','Image','Component'],
         origin : '',
          link : 'circle-on-mouse',
          github : 'https://www.youtube.com/?pbjreload=10',
          thumbnail : 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2017/10/LiquidDistortion_Featured.jpg'
        },
        {
          title : 'Particle Effects for Buttons',
           tags : ['Naviagtion','3D','Three.js'],
          link : 'circle-on-mouse',
          origin : '',
          github : 'https://www.youtube.com/?pbjreload=10',
          thumbnail : 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2018/03/DesignerWorkspace_Featured.jpg'
        },
       ],
    },
		mutations: {
			createProjects (state,payload){
				state.projects.push(payload)
			},
      setMouse (state,payload){
        state.mouseIn = payload
      }
		},
		actions : {
			createProjects({commit},payload){
				const Project = {
					title  :  payload.titleInput,  
					link  :  payload.linkInput, 
					github : payload.githubInput ,
					thumbnail : payload.thumbnailInput ,
					tags : payload.tagsInput
				}
				commit('createProjects', Project )
			},
      changeMouse({commit},payload){
        const mouse = payload
        commit('setMouse', mouse )
      }
		},
    getters :{
    	loadProjects(state){
    	  return state.projects
    	},
      getMouse(state){
        return state.mouseIn
      },
    }
  })
}

export default createStore