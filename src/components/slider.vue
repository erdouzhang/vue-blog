<style scoped>
    div.slider {
        width: 100%;
        height: 320px;
        overflow: hidden;
        margin-top: 50px;
        position: relative;
        border-bottom: 1px solid #d8d8d8;
    }

    ul.slider-box {
        width: 400%;
        height: 100%;
        position: relative;
    }

    ul.slider-box li {
        width: 25%;
        height: 100%;
        float: left;
    }

    ul.slider-box li a {
        width: 100%;
        height: 100%;
        display: block;
    }

    /*div.slider button {
        width: 30px;
        height: 30px;
        background: url("/images/arrows.png") no-repeat;
        position: absolute;
        bottom: 165px;
        cursor: pointer;
        outline: none;
    }*/

    div.slider button.prev {
        background-position: left top;
        left: 10px;
    }

    div.slider button.next {
        background-position: -30px top;
        right: 10px;
    }

    nav {
        width: 88px;
        height: 20px;
        position: absolute;
        bottom: 32px;
        left: 50%;
        margin: 0 0 0 -44px;
    }

    nav ul li {
        float: left;
        width: 22px;
    }

    nav ul li a {
        display: block;
        width: 22px;
        height: 20px;
        background: url("/images/bullets.png") no-repeat;
    }

    nav ul li.active a {
        background-position: left -22px;
    }
</style>
<template>
    <div class="slider" v-if="sliders">
        <ul class="slider-box">
            <li v-for="item in sliders">
                <a v-bind:href="item.href">
                    <img v-bind:src="item.src"/>
                </a>
            </li>
        </ul>
        <button class="prev" v-on:click="prev"></button>
        <button class="next" v-on:click="next"></button>
        <nav>
            <ul>
                <li class="active">
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#"></a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data () {
            clearInterval(this.t);
            this.t = null;
            this.index = 0;
            console.log(this.index);
            this.slide();
            return {}
        },
        props: ["sliders"],
        methods: {
            prev: function () {
                clearInterval(this.t);
                this.t = null;
                if (this.index >= 1) {
                    this.index--;
                } else {
                    this.index = 3;
                }
                this.toggle();
                this.slide();
            },
            next: function () {
                clearInterval(this.t);
                this.t = null;
                if (this.index < 3) {
                    this.index++;
                } else {
                    this.index = 0;
                }
                console.log(this.index);
                this.toggle();
                this.slide();
            },
            toggle: function () {
                $("nav ul li").removeClass("active");
                $("nav ul li").eq(this.index).addClass("active");
                $("ul.slider-box li").stop().fadeOut();
                $("ul.slider-box li").eq(this.index).stop().fadeIn(1500);
            },
            slide: function () {
                var _self = this;
                this.t = setInterval(function () {
                    _self.next();
                }, 4000);
            }
        },
        destroyed: function(){
            if(this.t){
                clearInterval(this.t);
                this.t = null;
            }
        }
    }

</script>
