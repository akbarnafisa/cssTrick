import Vue from 'vue'
import Card from '~/components/home/Card'
import FilterButton from '~/components/home/FilterButton'
import Search from '~/components/home/Search'

import MaterialButton from '~/components/material button/MaterialButton'
import MaterialButton2 from '~/components/material button/MaterialButton2'

import cursorMouse from '~/components/circle on mouse/cursorMouse'
import cursorOnLink from '~/components/circle on mouse/cursorOnLink'
import cursorOnElement from '~/components/circle on mouse/cursorOnElement'
import cursorCard from '~/components/circle on mouse/cursorCard'





const components = {Card,FilterButton,Search,MaterialButton,MaterialButton2,cursorOnLink,cursorOnElement,cursorMouse,cursorCard}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
