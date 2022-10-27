## 安裝json-server
1.
```bash
npm install -g json-server
```

## 執行(兩種方式)

### A.客制server.js
1. npm start

### B.直接run json-server的方式(但response無法客製化)
1. ./mock.sh 假資料json<br>
    比如<br>
    ```bash
    ./mock.sh wrap-db.json
    ```

## route對應
1. 修改route.json    
2. query parameter&path mapping可用regular express處理

## 修改port
1. 修改json-server.json<br>
    ```json
    {
    "port": 8083
    }
    ```