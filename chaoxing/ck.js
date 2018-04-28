if (jQuery) {
    (function(a) {
        a.extend(a.fn, {
            cxplayer: function(b) {
                return a(this).each(function() {
                    var e = a.extend(true, {
                        id: a(this).attr("id"),
                        playerId: generateMixed(6),
                        width: 900,
                        height: 500,
                        player: "player.swf",
                        expressInstall: "expressInstall.swf",
                        provider: "default",
                        datas: {
                            pauseAdvertList: [],
                            preAdvertList: [],
                            preLoaderUrl: "",
                            isAutoPlayNext: true,
                            isDefaultPlay: true,
                            intervalTime: 1000,
                            isAutoChgLine: true,
                            minKbs: 15,
                            minKbsLongTime: 10,
                            cdnUrl: "http://cdn.chaoxing.com/cdnlist.html",
                            siteId: "",
                            danmu: 0,
                            currVideoInfo: {
                                v_begin: "",
                                videoId: "",
                                serieId: "",
                                seriNum: 1,
                                title: "",
                                locked: false,
                                metaDataUrl: "",
                                getVideoUrl: "",
                                dftLineIndex: 0,
                                subtitleUrl: "",
                                previewUrl: "",
                                viewPicUrl: "",
                                pointListUrl: "",
                                playListUrl: "",
                                relatListUrl: "",
                                resourceUrl: "",
                                prePictureUrl: ""
                            }
                        },
                        enableSwitchWindow: 1,
                        logParam: {
                            isSendLog: "",
                            clazzId: "",
                            duration: "",
                            jobid: "",
                            objectId: "",
                            otherInfo: "",
                            rt: "",
                            dtype: "",
                            clipTime: "",
                            dtoken: ""
                        },
                        skin: {
                            text: {
                                siteNameText: "",
                                playLines: [],
                                fastPlayList: []
                            },
                            img: {
                                waterIconImg: "",
                                loadLogoImg: "",
                                loadAdvertImg: "",
                                loadBgImg: "",
                                bottomBgImg: "",
                                miniLogoImg: {},
                                shareIcons: []
                            },
                            color: {
                                themeColor: 16711680,
                                colors: {
                                    bottomBgColor: false,
                                    bottomPanelColor: false,
                                    movieDragPanelColor: false,
                                    rightPanelColor: false,
                                    topPanelColor: false,
                                    settingPanelColor: false,
                                    bigPlayBtnColor: false,
                                    bigRePlayBtnColor: false,
                                    playListPanelColor: false,
                                    lineListBtnColor: false
                                }
                            },
                            style: {
                                subtitle: {
                                    fontSize: 14,
                                    fontFamily: "楷体",
                                    fontColor: 16777215,
                                    strokeColor: 0,
                                    strokeSize: 2,
                                    textAlign: "center",
                                    paddingBottom: 10
                                },
                                resourcePanel: {
                                    x: 0,
                                    y: 0,
                                    width: 150,
                                    height: 100
                                }
                            },
                            view: {
                                bottomPanel: {
                                    bottons: {
                                        playNextBtn: true,
                                        playPrevBtn: true,
                                        playListBtn: true,
                                        fastPlayBtn: false,
                                        chgLineBtn: false,
                                        lineListBtn: true,
                                        subtitleChgBtn: false,
                                        cutImgBtn: true,
                                        settingBtn: true,
                                        miniLogo: false,
                                        onlylineListBtn: false
                                    },
                                    labels: {
                                        msgLabel: true,
                                        timeLabel: true
                                    }
                                },
                                movieDragPanel: {
                                    visiable: true,
                                    bottons: {
                                        fastBackBtn: true,
                                        fastForBtn: true
                                    },
                                    bars: {
                                        progressBar: true
                                    }
                                },
                                rightPanel: {
                                    visiable: true,
                                    bottons: {
                                        shareBtn: true,
                                        trunOffBtn: true,
                                        chgLineBtn: true,
                                        downloadBtn: true
                                    },
                                    customerButtons: []
                                },
                                settingPanel: {
                                    visiable: true,
                                    tabs: {
                                        colorTab: true,
                                        screenTab: true,
                                        subtitleTab: true,
                                        chgLineTab: true
                                    }
                                },
                                topPanel: {
                                    visiable: true,
                                    bottons: {
                                        fullScreenBtn: false,
                                        scale50Btn: true,
                                        scale75Btn: true,
                                        scale100Btn: true,
                                        coveredBtn: false
                                    }
                                },
                                resourcePanel: {
                                    visiable: true,
                                    plugins: {
                                        quiz: {
                                            visible: true,
                                            url: ""
                                        },
                                        ppt: {
                                            visible: true
                                        },
                                        img: {
                                            visible: true
                                        },
                                        valicode: {
                                            visible: true
                                        }
                                    }
                                }
                            }
                        },
                        events: {
                            onInit: function(g, h) {},
                            onDownload: function(g) {},
                            onNotVideoUrl: function(g, i, j, h) {},
                            onGoPlay: function(i, h, j, g) {},
                            onShare: function(h, g, i) {},
                            onPlayProgress: function(j, i, h, k, g) {},
                            onTurnOff: function(h, g) {},
                            onPointStart: function(h, i, g) {},
                            onPointEnd: function(h, i, g) {},
                            onStart: function(h, g, i) {},
                            onEnd: function(i, h, j, g) {},
                            onUnlock: function(h, g, i) {},
                            onChangeLine: function(g, h) {},
                            onInitComplete: function(g) {},
                            onRightIconClick: function(g, h) {},
                            onError: function(g, h) {},
                            onMovieDrag: function(i, h, g, j) {},
                            onPlay: function(h, g) {},
                            onPause: function(h, g) {},
                            onSetCookie: function(h, i, g) {},
                            onAnswerRight: function(g, h) {},
                            onAnswerWrong: function(g, h) {},
                            onSendProgressSuccess: function(g, h) {},
                            onSendProgressError: function(g, h) {},
                            onFullScreen: function(g) {},
                            onNormalScreen: function(g) {},
                            onGoPlayClick: function(g) {},
                            onOpenResource: function(g, h) {},
                            logFunc: function(g, h) {}
                        }
                    }, b);
                    if (e.skin.color.colors.settingPanelColor == false) {
                        e.skin.color.colors.settingPanelColor = e.skin.color.themeColor
                    }
                    if (e.skin.color.colors.bottomBgColor == false) {
                        e.skin.color.colors.bottomBgColor = e.skin.color.themeColor
                    }
                    if (e.skin.color.colors.bottomPanelColor == false) {
                        e.skin.color.colors.bottomPanelColor = e.skin.color.themeColor
                    }
                    if (e.skin.color.colors.movieDragPanelColor == false) {
                        e.skin.color.colors.movieDragPanelColor = e.skin.color.themeColor
                    }
                    if (e.skin.color.colors.topPanelColor == false) {
                        e.skin.color.colors.topPanelColor = e.skin.color.themeColor
                    }
                    if (e.skin.color.colors.bigPlayBtnColor == false) {
                        e.skin.color.colors.bigPlayBtnColor = e.skin.color.themeColor
                    }
                    if (e.skin.color.colors.bigRePlayBtnColor == false) {
                        e.skin.color.colors.bigRePlayBtnColor = e.skin.color.themeColor
                    }
                    if (e.skin.color.colors.rightPanelColor == false) {
                        e.skin.color.colors.rightPanelColor = e.skin.color.themeColor
                    }
                    if (e.skin.color.colors.playListPanelColor == false) {
                        e.skin.color.colors.playListPanelColor = e.skin.color.themeColor
                    }
                    if (e.skin.text.playLines == false) {
                        e.skin.text.playLines = [{
                            index: 0,
                            name: "电信",
                            intro: ""
                        }, {
                            index: 1,
                            name: "联通",
                            intro: ""
                        }, {
                            index: 2,
                            name: "其他",
                            intro: ""
                        }]
                    }
                    a(this).data("opts", e);
                    var d = a('<div id="' + e.playerId + '"></div>');
                    if (e.events.onInit() != false) {
                        var f = {
                            menu: "false",
                            scale: "noScale",
                            allowFullscreen: true,
                            allowScriptAccess: "always",
                            bgcolor: "#000000",
                            wmode: "transparent"
                        };
                        var c = {
                            id: e.id,
                            playerId: e.playerId,
                            provider: e.provider,
                            enableSwitchWindow: e.enableSwitchWindow,
                            datas: encodeURIComponent(JSON.stringify(e.datas)),
                            skin: encodeURIComponent(JSON.stringify(e.skin)),
                            logParam: encodeURIComponent(JSON.stringify(e.logParam))
                        };
                        a(this).css({
                            height: e.height,
                            width: e.width
                        }).empty().append(a("<div></div>").css({
                            backgroundColor: f.bgcolor,
                            width: "100%",
                            height: "100%"
                        }).append(d));
                        swfobject.embedSWF(e.player, e.playerId, "100%", "100%", "10.0.0", e.expressInstall, c, f, {
                            id: e.playerId
                        })
                    }
                    a(this).bind("onInitComplete", {
                        action: e.events.onInitComplete
                    }, function(g) {
                        if (g.data.action(g) !== false) {}
                    });
                    a(this).bind("onPlayProgress", {
                        action: e.events.onPlayProgress
                    }, function(j, i, h, k, g) {
                        if (j.data.action(j, i, h, k, g) !== false) {}
                    });
                    a(this).bind("onDownload", {
                        action: e.events.onDownload
                    }, function(h) {
                        var g = h.data.action(h);
                        a(this).getPlayer().downloadNext(g)
                    });
                    a(this).bind("onNotVideoUrl", {
                        action: e.events.onNotVideoUrl
                    }, function(g, i, j, h) {
                        if (g.data.action(g, i, j, h) !== false) {}
                    });
                    a(this).bind("onGoPlay", {
                        action: e.events.onGoPlay
                    }, function(i, h, j, g) {
                        if (i.data.action(i, h, j, g) !== false) {}
                    });
                    a(this).bind("onShare", {
                        action: e.events.onShare
                    }, function(h, g, i) {
                        if (h.data.action(h, g, i) !== false) {}
                    });
                    a(this).bind("onTurnOff", {
                        action: e.events.onTurnOff
                    }, function(h, g) {
                        if (h.data.action(h, g) !== false) {}
                    });
                    a(this).bind("onPointStart", {
                        action: e.events.onPointStart
                    }, function(h, i, g) {
                        if (h.data.action(h, i, g) !== false) {}
                    });
                    a(this).bind("onPointEnd", {
                        action: e.events.onPointEnd
                    }, function(h, i, g) {
                        if (h.data.action(h, i, g) !== false) {}
                    });
                    a(this).bind("onStart", {
                        action: e.events.onStart
                    }, function(h, g, i) {
                        if (h.data.action(h, g, i) !== false) {}
                    });
                    a(this).bind("onEnd", {
                        action: e.events.onEnd
                    }, function(i, h, j, g) {
                        if (i.data.action(i, h, j, g) !== false) {}
                    });
                    a(this).bind("onUnlock", {
                        action: e.events.onUnlock
                    }, function(g, h) {
                        if (g.data.action(g, h) !== false) {}
                    });
                    a(this).bind("onChangeLine", {
                        action: e.events.onChangeLine
                    }, function(g, h) {
                        if (g.data.action(g, h) !== false) {}
                    });
                    a(this).bind("onRightIconClick", {
                        action: e.events.onRightIconClick
                    }, function(g, h) {
                        if (g.data.action(g, h) !== false) {}
                    });
                    a(this).bind("onError", {
                        action: e.events.onError
                    }, function(g, h) {
                        if (g.data.action(g, h) !== false) {}
                    });
                    a(this).bind("onMovieDrag", {
                        action: e.events.onMovieDrag
                    }, function(i, h, g, j) {
                        if (i.data.action(i, h, g, j) !== false) {}
                    });
                    a(this).bind("onPlay", {
                        action: e.events.onPlay
                    }, function(h, g) {
                        if (h.data.action(h, g) !== false) {}
                    });
                    a(this).bind("onPause", {
                        action: e.events.onPause
                    }, function(h, g) {
                        if (h.data.action(h, g) !== false) {}
                    });
                    a(this).bind("onSetCookie", {
                        action: e.events.onSetCookie
                    }, function(h, i, g) {
                        if (h.data.action(h, i, g) !== false) {}
                    });
                    a(this).bind("onAnswerRight", {
                        action: e.events.onAnswerRight
                    }, function(g, h) {
                        if (g.data.action(g, h) !== false) {}
                    });
                    a(this).bind("sendlogzt", {
                        action: e.events.sendlogzt
                    }, function(g, h) {
                        if (g.data.action(g, h) !== false) {}
                    });
                    a(this).bind("getdanmu", {
                        action: e.events.getdanmu
                    }, function(i, h, g) {
                        if (i.data.action(i, h, g) !== false) {}
                    });
                    a(this).bind("logFunc", {
                        action: e.events.logFunc
                    }, function(g, h) {
                        if (g.data.action(g, h) !== false) {}
                    });
                    a(this).bind("onAnswerWrong", {
                        action: e.events.onAnswerWrong
                    }, function(g, h) {
                        if (g.data.action(g, h) !== false) {}
                    });
                    a(this).bind("onSendProgressSuccess", {
                        action: e.events.onSendProgressSuccess
                    }, function(g, h) {
                        if (g.data.action(g, h) !== false) {}
                    });
                    a(this).bind("onSendProgressError", {
                        action: e.events.onSendProgressError
                    }, function(g, h) {
                        if (g.data.action(g, h) !== false) {}
                    });
                    a(this).bind("onFullScreen", {
                        action: e.events.onFullScreen
                    }, function(g) {
                        if (g.data.action(g) !== false) {}
                    });
                    a(this).bind("onNormalScreen", {
                        action: e.events.onNormalScreen
                    }, function(g) {
                        if (g.data.action(g) !== false) {}
                    });
                    a(this).bind("onGoPlayClick", {
                        action: e.events.onGoPlayClick
                    }, function(i, h, j, g) {
                        if (i.data.action(i, h, j, g) !== false) {}
                    });
                    a(this).bind("onOpenResource", {
                        action: e.events.onOpenResource
                    }, function(g, h) {
                        if (g.data.action(g, h) !== false) {}
                    })
                })
            },
            getInstance: function() {
                return a(this).getPlayer()
            },
            getPlayer: function() {
                return document.getElementById(a(this).data("opts").playerId)
            },
            playMovie: function() {
                a(this).getPlayer().playMovie()
            },
            dragMovie: function(b) {
                a(this).getPlayer().dragMovie(b)
            },
            sendDanmu: function(b) {
                a(this).getPlayer().sendDanmu(b)
            },
            pauseMovie: function() {
                a(this).getPlayer().pauseMovie()
            },
            goPlay: function(b, c) {
                a(this).getPlayer().goPlay(b, c)
            },
            goPlayForUrls: function(b) {
                a(this).getPlayer().goPlayForUrls(b)
            },
            danmuState: function(b) {
                a(this).getPlayer().danmuState(b)
            },
            fastFor: function(b) {
                a(this).getPlayer().fastFor(b)
            },
            addVolNum: function(b) {
                a(this).getPlayer().addVolNum(b)
            },
            setSubtitle: function(b) {
                a(this).getPlayer().setSubtitle(b)
            },
            turnOff: function(b) {
                a(this).getPlayer().turnOff(b)
            },
            getPlaySecond: function() {
                return a(this).getPlayer().getPlaySecond()
            },
            getPlaySize: function() {
                return a(this).getPlayer().getPlaySize()
            },
            getTotalSecond: function() {
                return a(this).getPlayer().getTotalSecond()
            },
            getPlayList: function() {
                return a(this).getPlayer().getPlayList()
            },
            reloadPlayList: function() {
                return a(this).getPlayer().reloadPlayList()
            },
            refreshSkin: function(b) {
                return a(this).getPlayer().refreshSkin(b)
            },
            getPlayState: function() {
                return a(this).getPlayer().getPlayState()
            },
            sendProgress: function(c, d, b) {
                return a(this).getPlayer().sendProgress(c, d, b)
            }
        })
    }
    )(jQuery)
}
function defaultSkin() {
    return "default"
}
var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function generateMixed(d) {
    var b = "";
    for (var a = 0; a < d; a++) {
        var c = Math.ceil(Math.random() * (chars.length - 1));
        b += chars[c]
    }
    return b
}
;