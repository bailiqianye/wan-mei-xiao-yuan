app.launchApp("完美校园")
sleep(3000)
click("健康打卡")
sleep(3000)

/*var i = 0; /* *定时执行 */
/*
setInterval(function() {
i++;
toast("滑呀滑~");
gestures([150, [300, 1400],
[300, 400]
]);
if (i == 6) {
exit();
}
}, 100);
*/

sleep(3000)
var tj = text("提交信息").depth(13).findOne(3000)
if (tj == null) {
        console.warn("未找到提交按钮,退出脚本")
        exit()
    }
tj.click()
var text2 = text("确认提交").depth(14).findOne(3000)
    if (text2 == null) {
        console.warn("未找到提交按钮2,退出脚本")
        exit()
    }
text2.click()  
/*if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}

// 3、进行截图
captureScreen("/sdcard/img.png");
*/
sleep(5000)

var now  = new Date();
var year = now.getFullYear();
var month = (now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1);
var date = now.getDate();
var nowdata = year+"-"+month+"-"+date

var text3 = text("打卡成功").findOne(3000)
    if (text3 != null) {
        app.startActivity({
        data:"mqqwpa://im/chat?chat_type=wpa&uin="+"867808507",
       });
       text("发送").waitFor();
       sleep(500);
    
       id("input").setText(nowdata+"打卡成功");
       sleep(500);
       while(!click("发送"));
       sleep(500);
    }
         
   
        
    
    
sleep(9000)    
let packageName = app.getPackageName("完美校园");//获取应用包名 通过软件名
app.openAppSetting(packageName)
sleep(3000)
click("强行停止")
sleep(3000)
click("确定")   


