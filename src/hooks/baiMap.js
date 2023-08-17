/* eslint-disable no-undef */

// export default {
//     init: function () {
//         console.log("初始化百度地图脚本...");
//         const AK = "SUZTj0XMgP6Q8RuiwAgrzIWiuA2kK3C4"
//         const apiVersion = "3.0";
//         const timestamp = new Date().getTime();
//         const BMap_URL = "http://api.map.baidu.com/getscript?v=" + apiVersion + "&amp;ak=" + AK + "&amp;services=&amp;t=" + timestamp;
//         return new Promise((resolve, reject) => {
//             if (typeof BMap !== "undefined") {
//                 resolve(BMap);
//                 return true;
//             }

//             // 插入script脚本
//             let scriptNode = document.createElement("script");
//             scriptNode.setAttribute("type", "text/javascript");
//             scriptNode.setAttribute("src", BMap_URL);
//             document.body.appendChild(scriptNode);

//             // 等待页面加载完毕回调
//             let timeout = 0;
//             let interval = setInterval(() => {
//                 // 超时10秒加载失败
//                 if (timeout > 20) {
//                     reject();
//                     clearInterval(interval);
//                     console.error("百度地图脚本初始化失败...");
//                 }
//                 // 加载成功
//                 if (typeof BMap !== "undefined") {
//                     resolve(BMap);
//                     clearInterval(interval);
//                     console.log("百度地图脚本初始化成功...");
//                 }
//                 timeout += 1;
//             }, 500);
//         });
//     }
// }   

export default function loadBMap(ak) {
    return new Promise(function (resolve, reject) {
        if (typeof BMap !== 'undefined') {
            resolve(BMap)
            return true
        }
        window.onBMapCallback = function () {
            resolve(BMap)
        }
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src =
            'http://api.map.baidu.com/api?v=3.0&ak=' + ak + '&callback=onBMapCallback'
        script.onerror = reject
        document.head.appendChild(script)
    })
}