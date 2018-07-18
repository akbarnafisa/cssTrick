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

import circleNav from '~/components/circle humburger/circleNav'

import contentSection from '~/components/outdoors template/contentSection'
import factSection from '~/components/outdoors template/factSection'
import gallerySection from '~/components/outdoors template/gallerySection'
import imageSection from '~/components/outdoors template/imageSection'
import moreSection from '~/components/outdoors template/moreSection'
import navSection from '~/components/outdoors template/navSection'
import indexSection from '~/components/outdoors template/indexSection'






const components = {navSection, indexSection, contentSection,factSection,gallerySection,imageSection,moreSection,Card,FilterButton,Search,MaterialButton,MaterialButton2,cursorOnLink,cursorOnElement,cursorMouse,cursorCard,circleNav}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
