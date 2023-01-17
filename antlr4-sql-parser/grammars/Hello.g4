grammar Hello;
r: 'hello' ID;           // 匹配一个关键字 hello和一个紧随其后的标识符
ID: [a-z]+;              // 忽略小写字母组成的标识符
WS: [ \t\r\n]+ -> skip;  // 忽略空格、Tab、换行及 \r {Windows}