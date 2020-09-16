//优先注册路径插件
let path = input('path/index.js');
Main.use(path);

//注册路由插件
let router = input('router/index.js');

Main.use(router);

//注册广播插件
let broadcast = input('js/plugin/broadcast.js');
Main.use(broadcast);

let myTabBar = input('component/content/tabbar/MyTabbar.main')

new Main({
    el: '#app',
    template:`
        <div style="width: 100%;">
            <router-view></router-view>
            <tab-bar ref="tarBar" @selected="tabBarClick"></tab-bar>
        </div>
    `,
    data: {
        showIndex: 0
    },
    components:{
        tabBar: myTabBar,
    },
    created: function () {
        this.$main.container.set('windowWidth', document.body.clientWidth || document.documentElement.clientWidth)
        this.$main.container.set('windowHeight', document.body.clientHeight || document.documentElement.clientHeight)
    },
    mounted: function(){
        this.$main.container.set('hideTarBar', () => {
            this.$refs.tarBar.hide();
        })
        this.$main.container.set('showTarBar', () => {
            this.$refs.tarBar.show();
        })
    },
    methods: {
        tabBarClick: function (s) {
            switch(s){
                case '首页':
                    this.$router.goPath('/')
                    break;
                case '全部宝贝':
                    this.$router.goPath('/all-goods')
                    break;
                case '社区':
                    this.$router.goPath('/community')
                    break;
                case '购物车':
                    this.$router.goPath('/shopping-cart')
                    break;
                case '我的':
                    this.$router.goPath('/mine')
                    break;
            }
        }
    }
});