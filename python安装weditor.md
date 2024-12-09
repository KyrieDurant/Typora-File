### python安装weditor



因为使用命令`pip install weditor`安装时老是报错，找了好久才找到解决方法：

1. 使用Git命令拉取github上的代码下来，依此输入下面命令

   ```js
   git clone https://github.com/openatx/weditor.git
   cd weditor
   pip install .
   ```

   

2. 手动下载和安装：最后，我手动下载了 weditor 的源代码包，并解压后进入目录，运行了 python setup.py install 命令进行安装。这种方法也很有效。

3. **通过命令启动服务**
   通过adb shell启动手机上的ATX服务。操作如下：

   ```js
   adb shell chmod 775 /data/local/tmp/atx-agent
   adb shell /data/local/tmp/atx-agent server -d
   ```

4. 画面不同步或者没画面解决办法
   weditor同步不了手机画面解决方法如下：
   1、首先确保adbdevices能查询到设备。
   2、关键解决方法：删除手机上的ATX，重新执行python-muiautomator2init。
   3、以防万一，不要直接执行weditor，一定要执行python-mweditor。
   4、之后点击DumpHierarchy就可以同步画面了，不要用实时，直接用静态即可。

   ```js
   python -m uiautomator2 init
   adb connect 127.0.0.1:5555
   adb -s 127.0.0.1:5555 root
   adb -s 127.0.0.1:5555 shell chmod 775 /data/local/tmp/atx-agent
   adb -s 127.0.0.1:5555 shell /data/local/tmp/atx-agent server -d
   timeout /nobreak /t 1
   python -m weditor
   pause
   ```

   