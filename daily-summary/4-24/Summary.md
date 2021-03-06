## ISP

Internet Service Provider, 网络服务提供商, 具有以下三点服务: 
- 接入服务, 帮助用户接入Internet, 例如电信, 移动, 长城宽带, 这些都属于具有接入服务的提供商.
- 导航服务, 帮助用户在Internet上找到相关信息, 例如百度地图, Google 这些提供商.
- 信息服务(内容服务), 建立数据服务系统, 收集, 存储信息, 定期维护, 并提供给用户信息, 例如bilibili, 斗鱼等 这些提供商提供了用户的信息.

ISP 多指接入服务的提供商, ICP 多指导航, 信息服务提供商.

我们的电脑联网线路可以由以下几个节点:

电脑 --> 无线路由器 --> 交换机 --> 路由器 --> 边缘路由器 --> ISP

每一条线路称为通信链路(Communication Link), 用于传输数据.

通信链路是一个**抽象概念**, 无线连接, 蓝牙, 有线连接 电缆连接 都可以称为 通信链路.

一个路由器可以接收多个链路的信号, 也可以发送多个信号, 具有多条链路的节点需要进行**交换(switch)**.

交换的本质就是**让数据切换路径**. 有些网络中的数据不是一次性传输, 而是以**分组或封包**的形式依次传输, 例如TCP, 这些网络传输称为**封包交换技术(Packet Switch)**, 很常见的场景就是当我们打开网易云听歌时, 我们经常会发现听一半出现正在加载的问题, 这就是因为网络信号不好, 导致封包数据还没有传输过来, 这个时候封包交换技术就开始应用了, 一条路传输不过去,就换另一条路进行传输数据.

## 移动网络

移动网络的通信链路是**无线传输**. 通信的核心是**蜂窝塔(基站)**, 基站的搭建一般有三大网络提供商部署, 之所以称为蜂窝塔,是因为它的形状是**六边形**, 这种形状的好处是可以均匀的覆盖所有面积, 如下图:
![蜂窝塔](https://github.com/super-fool/blog/blob/master/daily-summary/4-24/image/baseStation.png)

> 基站并不是真的像上图有顺序的排列, 我们只是想用图形学更好的表达六边形的覆盖会更加均匀. **现实中大部分基站的网络覆盖都是重叠的**

每一个基站都包含一个边缘路由器和基站, ISP可以给最高级的子网:**边缘路由器**提供网络服务, 路由器连接基站, 基站进行网络提供(Internet Provider), 我们手机接入基站的网络(Network Access).

