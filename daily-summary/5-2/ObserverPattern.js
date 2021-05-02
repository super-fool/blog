// Observer Pattern

// ObserverList
class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(obs) {
    return this.observerList.push(obs);
  }
  count() {
    return this.observerList.length;
  }
  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }
  indexOf(obs, startIndex) {
    let i = startIndex;
    while (i < this.observerList.length) {
      if (this.observerList[i] === obs) {
        return i;
      }
      i++;
    }
    return -1;
  }
  removeAt(index) {
    this.observerList.splice(index, 1);
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(obs) {
    this.observers.add(obs);
  }
  removeObserver(obs) {
    this.observers.removeAt(this.observers.indexOf(obs, 0));
  }
  notify(context) {
    let count = this.observers.count();
    for (let i = 0; i < count; i++) {
      this.observers.get(i).update(context);
    }
  }
}

class Observer {
  constructor() {}
  update(ctx) {
    // sth-
  }
}
