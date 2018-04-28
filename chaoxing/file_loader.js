/**
 * 动态加载文件到doc中，并依据obj来设置属性，加载成功后执行回调函数fn
 * @name loadFile
 * @example
 * //指定加载到当前document中一个script文件，加载成功后执行function
 * utils.loadFile( document, {
 *     src:"test.js",
 *     tag:"script",
 *     type:"text/javascript",
 *     defer:"defer"
 * }, function () {
 *     console.log('加载成功！')
 * });
 */
 var loadFile = function() {
    var tmpList = [];

    function getItem(doc, obj) {
        try {
            for (var i = 0, ci; ci = tmpList[i++];) {
                if (ci.doc === doc && ci.url == (obj.src || obj.href)) {
                    return ci;
                }
            }
        } catch (e) {
            return null;
        }

    }

    return function (doc, obj, fn) {
        var item = getItem(doc, obj);
        if (item) {
            if (item.ready) {
                fn && fn();
            } else {
                item.funs.push(fn)
            }
            return;
        }
        tmpList.push({
            doc:doc,
            url:obj.src || obj.href,
            funs:[fn]
        });
        if (!doc.body) {
            var html = [];
            for (var p in obj) {
                if (p == 'tag')continue;
                html.push(p + '="' + obj[p] + '"')
            }
            doc.write('<' + obj.tag + ' ' + html.join(' ') + ' ></' + obj.tag + '>');
            return;
        }
        if (obj.id && doc.getElementById(obj.id)) {
            return;
        }
        var element = doc.createElement(obj.tag);
        delete obj.tag;
        for (var p in obj) {
            element.setAttribute(p, obj[p]);
        }
        element.onload = element.onreadystatechange = function () {
            if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                item = getItem(doc, obj);
                if (item.funs.length > 0) {
                    item.ready = 1;
                    for (var fi; fi = item.funs.pop();) {
                        fi();
                    }
                }
                element.onload = element.onreadystatechange = null;
            }
        };
        element.onerror = function () {
            throw Error('The load ' + (obj.href || obj.src) + ' fails,check the url settings of file ueditor.config.js ')
        };
        doc.getElementsByTagName("head")[0].appendChild(element);
    };
}();


var loadMultiFile = function(fileArray, callback) {
    if(Object.prototype.toString.call(fileArray) === '[object Array]') {
        var iLen = fileArray.length;
        if(!iLen) {
            return;
        }
        var iCount = 0;
        for(var i = 0; i < fileArray.length; i++) {
            loadFile(document, fileArray[i], function() {
                iCount ++;
                if(iLen == iCount) {
                    try{
                        callback && callback();
                    } catch(e){}
                }
            });
        }
    } else if(Object.prototype.toString.call(fileArray) === '[object Object]'){
        loadFile(document, fileArray, function() {
            try{
                callback && callback();
            } catch(e){}
        });
    }
};