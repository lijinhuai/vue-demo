import Vue from 'vue'
// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/

// Import Routes
import Routes from './router'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)


// Init Framework7 by passing parameters here
export default {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes
}