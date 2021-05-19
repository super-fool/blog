# Observer Pattern VS Publish/Subscribe Pattern

## Observer
| 被观察者  | 观察者 |
| --- | --- |
| Subject | Observers |

以`Subject`为核心, 所有事件向`Subject`注入, `Subject`内部依赖`Observers`.

## Pub/Sub

三要素:

| 发布者 | 调度中心 | 订阅者|
| --- | --- | --- |
| Publisher | Broker[Topics] | Subscriber |

称为发布者和订阅者都需要先注入**调度中心**


## Diff

| 差异 | Observer | Pub/Sub |
| --- | --- | --- |
| 耦合 | 强耦合: Observer必须知道Subject的存在,在Subject中也注入了ObserverList | 松耦合: Pub和Sub不需要知道对方的存在, 只能通过Topic(Broker)获取联系 |
| 代码执行 | Subject 同步调用 Observers | Pub 只需要通知 Topic, Topic可以异步的触发Subs|
| 平台 | 同平台 | 跨平台 |