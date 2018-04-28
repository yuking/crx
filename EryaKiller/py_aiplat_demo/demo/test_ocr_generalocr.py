# -*- coding: UTF-8 -*-

import json
import apiutil

app_id = '1106872674'
app_key = 'PBO0bQqsDqSuoClg'

if __name__ == '__main__':
    with open('../data/a.jpg', 'rb') as bin_data:
        image_data = bin_data.read()

    ai_obj = apiutil.AiPlat(app_id, app_key)

    print '----------------------SEND REQ----------------------'
    rsp = ai_obj.getOcrGeneralocr(image_data)

    if rsp['ret'] == 0:
        for i in rsp['data']['item_list']:
            print i['itemstring']
        print '----------------------API SUCC----------------------'
    else:
        print json.dumps(rsp, encoding="UTF-8",
                         ensure_ascii=False, sort_keys=False, indent=4)
        print '----------------------API FAIL----------------------'
