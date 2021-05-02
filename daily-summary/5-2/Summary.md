## Observer Pattern VS Publish/Subscribe Pattern

差异: 调度的地方不一致: 观察者模式中, 是由**目标**具体调度(两者之前存在松耦合); 发布订阅模式中, 是由**调度中心**统一调度(两者完全解耦).


## Observer
| 被观察者  | 观察者 |
| --- | --- |
| Subject | Observers |

以`Subject`为核心, 所有事件向`Subject`注入, `Subject`内部依赖`Observers`.

## Pub/Sub

### Publisher

| 发布者 | 调度中心 | 订阅者|
| --- | --- | --- |
| Publisher | Broker[Topics] | Subscriber |

称为发布者和订阅者都需要先注入**调度中心**


