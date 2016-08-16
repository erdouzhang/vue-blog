# vue-blog
使用vue构建的个人博客，应用Vue.js的MVVM开发模式和组件化开发的思想，与野狗实时后端云进行开发
###技术栈
- Vue.js
- 野狗实时后端云
- Webpack
- vue.loader
- vue.router
- AngularJS
- Echart
- iScroll
- jQuery
- BootStrap
- marked.js
- HTML & CSS

###项目描述
1. 应用VUE.js进行组件化开发，将页面中的不同部分，根据功能和结构进行组件化拆分与组合。同时依靠webpack和vue.loader进行打包压缩和组件管理；
2. 应用AngularJS结合其MVC的开发模式后台页面逻辑的开发；
3. 应用ng-router进行后台路由的管理，为不同的路由指定相应的控制器与视图；
4. 通过angularJS的controller，与视图模型进行通信进行页面功能逻辑的开发；
5. 应用野狗实时后端云提供的WildAngular官方插件和javascriptSDK，进行后台数据的管理和api的调用，进行页面功能的开发；
6. 应用BootStrap进行博客后台管理系统界面的开发。
7. 应用vue.router进行路由的管理，针对不同路由所依赖的组件进行指定，同时应用结合应用野狗数据库中数据的[".key"]属性，指定$router.params进行通信，指定跳转到博客详情和项目详情和相册详情等三级页面，同时依靠vue.router的切换钩子函数，保定相应的回调函数。
8. 应用jquery中的选择器和其他工具函数进行快捷开发
9. 应用iscroll制作“gallery”详情页面下方导航的制作，并应用其提供的相应位置属性，进行图片延迟加载的制作
10. 应用Echart.js进行“About me”页面中数据可视化图表的制作，通过Echart.js提供的API，定义视图的形势与样式，使其符合项目的整体界面风格；
11. 在Vue组件中的data属性，指定回调函数，为组件指定其内部的数据;
12. 在组件中依靠Vue组件提供的props进行数据传递，并且应用Vue组件提供的自定义事件（$on()、$emit()、$dispatch()、$broadcast()）进行数据的通信，结合$watch，针对指定属性的变换，绑定回调函数；
13. 应用组件中的created、beforeCompile、compiled、ready、beforeDestroy、destroy不同生命周期相应回调函数的指定。
14. 在博文详情中，应用marked.js结合Vue过滤器，自定义marked过滤器，结合v-html指令，格式化博文内容；
15. 应用Vue提供的过渡指令结合CSS3动画，对页面中的过渡效果进行开发；
