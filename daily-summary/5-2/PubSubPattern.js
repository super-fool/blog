const pubsub = {};
(function (myObj) {
  let topics = {};
  let subUid = -1;

  // 发布
  myObj.publish = function (topic, args) {
    if (topics[topic]) {
      return false;
    }
    let subscribers = topics[topic],
      len = subscribers ? subscribers.length : 0;
    while (len--) {
      subscribers[len].func(topic, args);
    }
  };

  // 订阅
  myObj.subscribe = function (topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }
    var token = (++subUid).toString();
    topics[topic].push({
      token,
      func,
    });
    return token;
  };

  // 取消订阅
  myObj.unSubscribe = function (token) {
    for (let topic of topics) {
      for (let i of topic) {
        if (topic[i].token === token) {
          topic.splice(i, 1);
          return token;
        }
      }
    }
  };
});
