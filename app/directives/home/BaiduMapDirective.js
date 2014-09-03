/**
 * Created by huangfeng on 2014/9/3.
 */
"use strict";

define(["directives/module"], function(app) {
    return app.directive("baiduMap", [function() {
        return function(scope, element, attrs) {
            var map = new BMap.Map('map');
            map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}));  //右上角，仅包含平移和缩放按钮
            map.centerAndZoom(new BMap.Point(114.387094, 30.516876),14);  //初始化时，即可设置中心点和地图缩放级别。
            map.enableScrollWheelZoom();

            var guangguDetail = '<div style="margin:0;line-height:20px;padding:2px;">' +
                '<img src="img/shangdu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                '地址：光谷广场世界城新尚都21420室<br/>联系人：庞老师  涂老师<br/>电话：(027)87791032， 13995680722， 13638623778<br/></div>';
            var guangguInfoWindow = null;
            guangguInfoWindow = new BMapLib.SearchInfoWindow(map, guangguDetail, {
                title  : "康乐家政光谷店",      //标题
                width  : 290,             //宽度
                height : 105,              //高度
                panel  : "panel",         //检索结果面板
                enableAutoPan : true,     //自动平移
                searchTypes   :[
                    BMAPLIB_TAB_TO_HERE,  //到这里去
                    BMAPLIB_TAB_FROM_HERE //从这里出发
                ]
            });
            var guanggu = new BMap.Marker(new BMap.Point(114.408797, 30.510109));  // 创建标注
            guanggu.addEventListener("click", function(e){
                guangguInfoWindow.open(guanggu);
            });
            map.addOverlay(guanggu);              // 将标注添加到地图中
            var label = new BMap.Label("康乐家政光谷旗舰店",{offset:new BMap.Size(10,-10)});
            guanggu.setLabel(label);

            var jiedaokouDetail = '<div style="margin:0;line-height:20px;padding:2px;">' +
                '<img src="img/weilaicheng.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                '地址：街道口未来城C座1112室<br/>联系人：吴老师<br/>电话：(027)87748868， 18908648300<br/></div>';
            var jiedaokouInfoWindow = null;
            jiedaokouInfoWindow = new BMapLib.SearchInfoWindow(map, jiedaokouDetail, {
                title  : "康乐家政街道口店",      //标题
                width  : 290,             //宽度
                height : 105,              //高度
                panel  : "panel",         //检索结果面板
                enableAutoPan : true,     //自动平移
                searchTypes   :[
                    BMAPLIB_TAB_TO_HERE,  //到这里去
                    BMAPLIB_TAB_FROM_HERE //从这里出发
                ]
            });
            var jiedaokou = new BMap.Marker(new BMap.Point(114.359974,30.531505));  // 创建标注
            jiedaokou.addEventListener("click", function(e){
                jiedaokouInfoWindow.open(jiedaokou);
            })
            map.addOverlay(jiedaokou);              // 将标注添加到地图中
            label = new BMap.Label("康乐家政街道口店",{offset:new BMap.Size(10,-10)});
            jiedaokou.setLabel(label);

            var isPanelShow = false;
            //显示结果面板动作
            $("#showPanelBtn").click(function(){
                if (isPanelShow == false) {
                    isPanelShow = true;
                    $("#showPanelBtn").css("right","300px");
                    $("#panelWrap").css("width", "300px");
                    $("#map").css("margin-right","300px");
                    $("#showPanelBtn").html("隐藏检索结果面板<br/>&gt;");
                } else {
                    isPanelShow = false;
                    $("#showPanelBtn").css("right","0");
                    $("#panelWrap").css("width", "0px");
                    $("#map").css("margin-right","0");
                    $("#showPanelBtn").html("显示检索结果面板<br/>&lt;");
                }
            });

        };
    }]);
});