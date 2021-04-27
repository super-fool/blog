## HTTP的Connection

http/1.0之前 是属于短连接: 每一次请求都要经历DNS解析, 三次握手, 四次挥手. 反复创建和断开TCP连接, 导致开销巨大.

http/1.0之后 属于持久连接: 将`Connection: keep-alive`请求至服务端, 申请持久连接, 后端也会同样返回该连接, 这样客户端会使用同一个TCP进行请求.

keep-alive默认参数是: `timeout=5, max=100`, 即**TCP可以服务在5s内, 最多请求100次连接

> 1.0 版本不是默认携带, 之后的版本会默认携带该请求头

优点:
1. TCP连接更少，这样就会节约TCP连接在建立、释放过程中，主机和路由器上的CPU和内存开销。
2. 网络拥塞也减少了，拿到响应的延时也减少了
3. 错误处理更优雅：不会粗暴地直接关闭连接，而是report，retry

keep-alive模式下, 客户端如何判断服务端的响应数据已经接收完成?

- 如果请求一个静态页面/图片时, 服务器是知道数据的具体大小, 那么通过`Content-Length`来告诉客户端请求数据的大小.
- 如果请求一个动态页面时, 服务器无法预先知道内容大小, 可以使用`Transfer-Encoding: chunked`, 即表示服务一边产生数据,一边发送给客户端数据.

## 分块编码（Transfer-Encoding: chunked）

Transfer-Encoding，是一个 HTTP 头部字段（响应头域），字面意思是「传输编码」。最新的 HTTP 规范里，只定义了一种编码传输：分块编码(chunked)。

分块传输编码（Chunked transfer encoding）是超文本传输协议（HTTP）中的一种数据传输机制，允许HTTP由网页服务器发送给客户端的数据可以分成多个部分。分块传输编码只在HTTP协议1.1版本（HTTP/1.1）中提供。

数据分解成一系列数据块，并以一个或多个块发送，这样服务器可以发送数据而不需要预先知道发送内容的总大小。
具体方法

在头部加入 Transfer-Encoding: chunked 之后，就代表这个报文采用了分块编码。这时，报文中的实体需要改为用一系列分块来传输。

每个分块包含十六进制的长度值和数据，长度值独占一行，长度不包括它结尾的 CRLF(\r\n)，也不包括分块数据结尾的 CRLF。

**最后一个分块长度值必须为 0，对应的分块数据没有内容，表示实体结束。**

Content-Encoding 和 Transfer-Encoding 二者经常会结合来用，其实就是针对 Transfer-Encoding 的分块再进行 Content-Encoding压缩。

例子：
```js
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

25\r\n
This is the data in the first chunk\r\n

1C\r\n
and this is the second one\r\n

3\r\n
con\r\n

8\r\n
sequence\r\n

0\r\n
\r\n
```