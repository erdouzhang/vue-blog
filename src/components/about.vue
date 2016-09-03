<style scoped>
    div.container {
        width: 720px;
        float: left;
        margin-top: 120px;
        margin-left: 245px;
        padding-bottom: 80px;
    }

    hgroup {
        width: 100%;
        height: 140px;
        border-top: 1px solid #d8d8d8;
        border-bottom: 1px solid #d8d8d8;
        margin-top: 50px;
        text-align: center;
    }

    hgroup h3 {
        margin-top: 20px;
    }

    hgroup img {
        margin: 15px 0;
    }

    div.technique {
        margin: 44px 0 0 0;
    }

    div.technique h4 {
        font-size: 16px;
    }

    div.technique p {
        font-size: 14px;
        line-height: 24px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    div.technique ol {
        margin-bottom: 20px;
    }

    div.technique li {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 5px;
    }

    div#echart {
        width: 720px;
        height: 350px;
    }
    div.appraise h4{
      margin-top: 20px;
    }
    div.planning ol{
      margin: 10px 0;
    }
</style>
<template>
    <div class="container content">
        <hgroup>
            <h3>这里是一些关于我的···</h3>
            <img v-bind:src="'./images/star_divider.png'" width="430" height="16" />
            <h4>在这里你能了解到关于我的一些情况</h4>
        </hgroup>
        <div class="technique">
            <h4>我掌握的一些专业技能</h4>
            <p>IT技能：Javascript、Ajax、jsonp、jQuery、Html5、CSS3、Zepto、Bootstrap、knockoutJS、Angular、Vue、ionic、Node.js、Gulp、Webpack、Express、MongoDB、Git</p>
            <ol>
                <li>1. 熟练掌握HTML5、CSS3，熟悉HTM:L5新增的标签和接口，能够编写符合语义化和W3C规范的代码；</li>
                <li>2. 熟练原生JavaScript，掌握面向对象编程思想、熟悉JavaScript常用的设计模式、熟悉语法ES6规范；</li>
                <li>3. 理解JQuery源码，能够根据面向对象的封装和继承的思想，通过`$.extend()`和`$.fn.extend()`拓展和构建常用的jQuery静态和实例方法；</li>
                <li>4. 熟悉Bootstrap/EasyUI等UI框架，弄够使用其快速搭建应用界面；</li>
                <li>5. 理解和掌握Angular/Vue/KnockoutJS/React等MVVM前端框架技术，能够熟练构建基于其的应用程序。能够熟练结合vue、webpack、vue-loader和vue-route搭建模块化的vue单页应用（个人主页），能够熟练搭建AngularJS基于MVC构建的项目应用，熟练应用directive、filter拓展自定义指令和控制器，通过服务拓展全局方法。能够结合ng-route和ng-animate管理路由和页面切换效果，构建单页应用，能够结合ionic构建移动端应用，并弄够结合使用firebase和wilddog等实时后端云，快速搭建复合restful架构风格的应用。</li>
                <li>6. 了解CMD/AMD规范和模块化开发流程，熟练使用Require.js；</li>
                <li>7. 熟练运用AJAX技术与后台处理数据，熟悉浏览器和服务器交互机制及页面间的通信方式，掌握Session和cookie和LocalStorage等数据存储技术，能够应用依据接口文档和POSTMAN和AJAX完成与后台的交互；</li>
                <li>8. 掌握Node.js和mongobd的基本使用，能够应用NPM生态环境和Yoman等前端脚手架工具、mongoose速构建应用；</li>
                <li>9. 能够运用Gulp、Webpack自动化打包工具，整理项目代码；</li>
                <li>10. 熟悉React、ES6、babel和webpack；</li>
            </ol>

            <div id="echart"></div>
            <div class="planning">
              <h4>我的短期规划</h4>
              <ol>
                <li>1. 学习一门常用的后台语言（PHP和他的框架yii），进行关系型数据库的学习（mySql）。</li>
                <li>2. 深入学习javascript设计模式</li>
              </ol>
            </div>
            <div class="appraise">
              <h4>我的自我评价</h4>
              <p>互联网电商公司前端开发岗位的相关工作经验，使我能够较好的规划和利用自己的时间，根据项目的需求，完成自己的开发任务。具备一定的抗压能力，能够适应前端开发岗位的工作。性格谦和，能够和同事进行有效良好的沟通，相互配合完成指派的开发任务。较好的学习能力，热衷学习和掌握新的前端技术，提高自己的工作技能。</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  ready: function(){
  var myChart = echarts.init(document.getElementById('echart'));

  var option = {
      title: {
          text: '我的技术栈',
          textStyle: {
            color: "#6c6c6c",
            fontSize: 16
          }
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      legend: {
          data: ['技术熟练度']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          },
          axisLabel: {
              show: false
          }
      },
      yAxis: {
          type: 'category',
          data: ['NodeJS', 'Vue', 'KnockoutJS', 'AngularJS', 'jQuery & Zepto', 'CSS3', "HTML5"],
          axisTick: {
              show: false,
              interval: 1
          },
          axisLine: {
              show: false
          },
          axisLabel: {
              margin: 20
          }
      },
      series: [{
          name: '掌握程度',
          type: 'bar',
          data: [{
              value: 60,
              itemStyle: {
                  normal: {
                      color: "gray"
                  }
              }
          }, {
              value: 65,
              itemStyle: {
                  normal: {
                      color: "gray"
                  }
              }
          }, {
              value: 70,
              itemStyle: {
                  normal: {
                      color: "gray"
                  }
              }
          }, {
              value: 70,
              itemStyle: {
                  normal: {
                      color: "gray"
                  }
              }
          }, {
              value: 75,
              itemStyle: {
                  normal: {
                      color: "gray"
                  }
              }
          }, {
              value: 85,
              itemStyle: {
                  normal: {
                      color: "gray"
                  }
              }
          },{
              value: 90,
              itemStyle: {
                  normal: {
                      color: "gray"
                  }
              }
          }]
      }]
  };

  myChart.setOption(option);

  }
  };



</script>
