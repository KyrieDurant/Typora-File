## git推送步骤

第一次推送时按照步骤来即可，修改文件完成后再次进行提交步骤：

```js
git status    //查看状态
git add .     //(add后面有个空格才到.)
git commit -m "本次更新说明文字"
git push -u origin main  //要是存储库是main就推到main 要是master就推到master

```



如果推送过程中报错

fatal: unable to access 'https://github.com/KyrieDurant/my-uniapp.git/': OpenSSL SSL_read: Connection was reset, errno 10054

翻译内容：致命：无法访问'https://github.com/KyrieDurant/my-uniapp.git/'：OpenSSL SSL_read:连接已重置，错误号10054

意思是git操作出现网络错误，通过代理也无法解决，可输入下面命令修改http的ssl认证，完成后再次推送即可

```js
git config --global http.sslVerify "false"
```



git拉取远程代码

```js
git clone + 拉取远程代码的地址
```



