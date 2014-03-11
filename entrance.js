/*
 * Ucentu JsFramework - Ucentu 前端JS框架
 * Copyright (c) 2014
 * Author: lazyphp
 * Version: 1.0
 */

jsFilePath = '/JsFramework/'+GROUP+'/'+MODEL+'_'+ACTION+'.js';
checkJsRes = doesFileExist(jsFilePath);
if(checkJsRes == true){
    loadjs(jsFilePath);
}else{
    alert('不存在'+MODEL+'_'+ACTION+'.js文件，系统已经停止加载!');
}

/**
 * 加载js文件
 * @param {type} script_filename 文件地址
 */
function loadjs(script_filename) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', script_filename);
    script.setAttribute('id', 'coolshell_script_id');

    script_id = document.getElementById('coolshell_script_id');
    if (script_id) {
        document.getElementsByTagName('head')[0].removeChild(script_id);
    }
    document.getElementsByTagName('head')[0].appendChild(script);
}

/**
 * 判断加载的JS文件是否存在
 * @param {type} urlToFile 文件地址
 */
function doesFileExist(urlToFile)
{
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();

    if (xhr.status == "200") {
        return true;
    } else {
        return false;
    }
}