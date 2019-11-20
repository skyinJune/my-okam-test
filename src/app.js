/**
 * @file 小程序入口
 * @author mazhiwen
 */

'use strict';


export default {
    config: {
        pages: [
            'pages/home/index'
        ],

        window: {
            navigationBarBackgroundColor: '#fff',
            navigationBarTextStyle: 'black',
            backgroundTextStyle: 'black',
            enablePullDownRefresh: true,
            backgroundColor: 'light'
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


