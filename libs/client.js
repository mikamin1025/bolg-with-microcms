import { createClient } from "microcms-js-sdk";


export const client = createClient({
//サーバードメインとAPIキーを設定する必要がある。
  serviceDomain: "the1989", //自分のmicroCMSのドメインを設定する
  apiKey: process.env.API_KEY //microCMSと連携するための鍵となるもの
})