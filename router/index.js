let router = input('@/js/plugin/router.js');
let home = '@/views/home/Home.main';
let allGoodsList = '@/views/allgoodslist/AllGoodsList.main';
let community = '@/views/community/Community.main';
let shoppingCart = '@/views/shoppingcart/ShoppingCart.main';
let mine = '@/views/mine/Mine.main';
let favoritesList = '@/views/favoriteslist/FavoritesList.main';
let login = '@/views/login/Login.main';
let setting = '@/views/setting/setting.main';
let taoContent = '@/views/taoContent/taoContent.main';
let addAddress = '@/views/addaddress/addAddress.main';
let addressManagement = '@/views/addressmanagement/addressManagement.main';
let goodsDetails = '@/views/goodsdetails/goodsDetails.main';
let goodsBuy = '@/views/goodsbuy/GoodsBuy.main';
let orderManagement = '@/views/ordermanagement/OrderManagement.main';

let routerObj = new router({
    routes: [
        {
            path: '/',
            component: home,
            title: '首页'
        },
        {
            path: '/all-goods',
            component: allGoodsList,
            title: '所有商品'
        },
        {
            path: '/community',
            component: community,
            title: '社区'
        },
        {
            path: '/shopping-cart',
            component: shoppingCart,
            title: '购物车'
        },
        {
            path: '/mine',
            component: mine,
            title: '用户'
        },
        {
            path: '/favorites-list',
            component: favoritesList,
            title: '收藏夹'
        },
        {
            path: '/login',
            component: login,
            title: '设置手机号'
        },
        {
            path: '/setting',
            component: setting,
            title: '用户设置'
        },
        {
            path: '/taoContent',
            component: taoContent,
            title: '帖子内容'
        },
        {
            path: '/add-address',
            component: addAddress,
            title: '新增地址'
        },
        {
            path: '/address-management',
            component: addressManagement,
            title: '地址管理'
        },
        {
            path: '/goods-details',
            component: goodsDetails,
            title: '商品详情'
        },
        {
            path: '/goods-buy',
            component: goodsBuy,
            title: '商品购买'
        },
        {
            path: '/order-management',
            component: orderManagement,
            title: '订单管理'
        }
    ],
    title: function (router) {
        if(router.title){
            document.title = router.title;
        }
    },
    interceptor: function (route, routerObj) {
        // console.log(routerObj);
        // if(route.path === '/mine'){
        //     routerObj.replace('/login');
        //     return false;
        // }
        return true;
    }
});

output = routerObj;