<!-- @format -->

#### a tool for quickly generating ts interface

##### 1. 使用

```

    const generInteface = require("@edison_zxg/untils-to-ts-inteface");

    // 传入可以有返回值的后端接口即可,比如接口文档上的mock接口
    generInteface('http://www.xxxx.com/api/a/b/c');


```

注意项目根目录下 会自动生成一个 type.d.ts 的文件, 即为根据接口生成的 ts 类型

##### 2. TODO

    后续可支持输出各字段注释
