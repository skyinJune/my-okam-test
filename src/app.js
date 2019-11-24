/**
 * @file 小程序入口
 * @author mazhiwen
 */

'use strict';


export default {
    config: {
        pages: [
            'pages/home/index',
            'pages/discovery/index',
            'pages/message/index',
            'pages/my/index'
        ],

        window: {
            navigationBarBackgroundColor: '#fff',
            navigationBarTextStyle: 'black',
            backgroundTextStyle: 'black',
            enablePullDownRefresh: true,
            backgroundColor: 'light'
        },
        tabBar: {
            list: [
                {
                    pagePath: 'pages/home/index',
                    iconPath: '',
                    selectedIconPath: '',
                    text: '首页'
                },
                {
                    pagePath: 'pages/discovery/index',
                    iconPath: '',
                    selectedIconPath: '',
                    text: '发现'
                },
                {
                    pagePath: 'pages/message/index',
                    iconPath: '',
                    selectedIconPath: '',
                    text: '消息'
                },
                {
                    pagePath: 'pages/my/index',
                    iconPath: '',
                    selectedIconPath: '',
                    text: '我的'
                },
            ],
            selectedColor: '#3388FF'
        },
        networkTimeout: {
            request: 30000
        },

        /* eslint-disable fecs-camelcase */
        _quickEnv: {
            networkTimeout: null,
            package: 'com.okam.demo',
            name: 'okam-quick',
            versionCode: '2',
            icon: '/common/img/okm.png'
        }
        /* eslint-enable fecs-camelcase */
    },
    $promisifyApis: [
        'getSystemInfo'
    ],

    async onLaunch() {
        let result = await this.$api.getSystemInfo();
        console.log('launch system info', result);
        console.log('show onLaunch...');
    },

    onShow() {
        this.$api.getSystemInfo().then(function (res) {
            console.log('systemInfo', res);
        });
        console.log('show app...');
    },


    onHide() {
        console.log('hide app...');
    }
};


