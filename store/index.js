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
          tags : ['Button'],
          origin : '',
          link : 'material-button',
          github : 'https://www.youtube.com/?pbjreload=10',
          thumbnail : 'https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2018/04/particleeffects_featured.jpg'
        },
        {
          title : 'Circle on Mouse',
          tags : ['Cursor','Hover'],
          origin : 'https://theshift.tokyo/',
          link : 'circle-on-mouse',
          github : 'https://www.youtube.com/?pbjreload=10',
          thumbnail : 'https://cdn.pbrd.co/images/HuSepQi.png'
        },
        {
          title : 'Circle Hamburger Menu',
           tags : ['Naviagtion','Menu'],
           origin : 'https://www.bigyouth.fr/en',
          link : 'circle-hamburger-menu',
          github : 'https://www.youtube.com/?pbjreload=10',
          thumbnail : 'https://cdn.pbrd.co/images/HuSez2Q.png'
        },
        {
          title : 'Outdoors Template',
         tags : ['Template','Slider','Instagram'],
          origin : 'https://tympanus.net/Development/OutdoorsTemplate/',
          link : 'outdoors-template',
          github : 'https://www.youtube.com/?pbjreload=10',
          thumbnail : 'https://cdn.pbrd.co/images/HuScXAM.png'
        },
        {
          title : 'The gooey effect',
           tags : ['Misc','SVG'],
          link : 'gooey-effect',
          origin : 'https://css-tricks.com/gooey-effect/',
          github : 'https://www.youtube.com/?pbjreload=10',
          thumbnail : 'https://cdn.pbrd.co/images/Hvish7K.png'
        },
        {
          title : 'SVG Waving Animation',
           tags : ['Misc','SVG'],
          link : 'svg-wave',
          origin : 'https://bodymovin.solutions/',
          github : 'https://www.youtube.com/?pbjreload=10',
          thumbnail : 'https://cdn.pbrd.co/images/HvkIGLt.png'
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
					title  :  payload.title,  
					link  :  payload.link, 
					github : payload.github ,
					thumbnail : payload.thumbnail ,
					tags : payload.tags
				}
				console.log(payload)
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