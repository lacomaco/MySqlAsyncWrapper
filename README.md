https://www.npmjs.com/package/mysqlasyncawaitwrapper

# MysqlAsyncWrapper

## npm add mysqlasyncawaitwrapper

node js mysql 모듈은 콜백 기반이기 때문에 제가 너무 좋아하는 async/await 문법을 사용할 수 없어 만든 작은 라이브러리입니다. !

node js mysql 모듈을 감싸 Promise 기반의 모듈로 변형하는 역할을 수행합니다. !

### 필요한것

1. mysql모듈을 랩핑하기 때문에 , mysql 접속을 위한 config파일을 다음과 같이 db 파일을 넣어 Config.json 파일을 만들어주세요.

![file](./images/FilePlacement.png)

2. mysql connection 설정과 동일한 설정을 넣어주세요.

![file](./images/Config.png);

설정에 대한 자세한 옵션들은 mysql 홈페이지에서 확인해주세요 . (https://www.npmjs.com/package/mysql)
