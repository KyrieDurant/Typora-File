## Node.js学习

- 命令行使用

  > d:   切换到D盘
  >
  > dir   查看当前目录内容
  >
  > cd xxx   cd进入xxx的目录下
  >
  > cd ..   切换到上一级目录
  >
  > dir /s   查找当前目录的所有文件
  >
  > ctrl + c   停止查找，退出
  >
  > 
  >
  > 

- Buffer(缓冲器)

  **1.概念**

  buffer是一个类似于数组的对象，用于表示固定长度的字节序列

  buffer本质是一段内存空间，专门用来处理二进制数据。

  **2.特点**

  1. buffer 大小固定且无法调整
  2. buffer性能较好，可以直接对计算机内存进行操作
  3. 每个元素的大小为1字节(byte)

  **3.使用**

  