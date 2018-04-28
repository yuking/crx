#!/usr/bin/env python
# -*- coding: utf-8 -*-


# from aip import AipOcr
import json
from apiutil import AiPlat

""" baidu APPID AK SK """
# APP_ID = '11159171'
# API_KEY = 'ORuAAVRP1Cu6s2KEsuOPhPGq'
# SECRET_KEY = 'daBMzO4Flb2VLdwQXm4ncBydgNmY29oE'
# client = AipOcr(APP_ID, API_KEY, SECRET_KEY)

# tencent ai api
app_id = '1106872674'
app_key = 'PBO0bQqsDqSuoClg'
client = AiPlat(app_id, app_key)


def get_file_content(img_path):
    with open(img_path, 'rb') as fp:
        return fp.read()


def get_text(img_path):
    image = get_file_content(img_path)

    """ 调用通用文字识别, 图片参数为本地图片 """
    # return client.basicGeneral(image)
    return client.getOcrGeneralocr(image)


def get_code(img_path):
    res = get_text(img_path)
    code = ''
    if res['ret'] == 0:
        for i in res['data']['item_list']:
            code += i['itemstring']
        print '----------------------API SUCC----------------------'
        return code.replace(' ', '')
    else:
        print json.dumps(res, encoding="UTF-8",
                         ensure_ascii=False, sort_keys=False, indent=4)
        print '----------------------API FAIL----------------------'
        return 0


if __name__ == '__main__':
    img_path = 'verImg.png'
    print '----------------------SEND REQ----------------------'
    # res = get_text(img_path)
    # baidu ai
    # words = res.get('words_result')
    # for w in words:
    #     print w.get('words')

    # tencent ai
    code = get_code(img_path)
    print code
