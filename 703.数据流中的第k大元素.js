/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */
Array.prototype.swap = function(i, j) {
  let temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

class PriorityQueue {
  constructor(data = [], compare = (a, b) => a - b) {
    this.data = data;
    this.compare = compare;
  }

  get len() {
    return this.data.length;
  }

  _up(pos = this.len - 1) {
    const { data, len, compare } = this;
    const origin = data[pos];
    while (pos > 0) {
      const parentId = (pos - 1) >> 1;
      const parent = data[parentId];
      if (compare(origin, parent) >= 0) {
        break;
      }
      data[pos] = parent;
      pos = parentId;
    }
    data[pos] = origin;
  }

  _down(pos = 0) {
    const { data, len, compare } = this;
    const half = len >> 1;
    const origin = data[pos];
    while (pos < half) {
      let left = (pos << 1) + 1;
      let best = data[left];
      const right = left + 1;
      if (right < len && compare(data[right], best) < 0) {
        best = data[right];
        left = right;
      }
      if (compare(best, origin) >= 0) {
        break;
      }
      data[pos] = best;
      pos = left;
    }

    data[pos] = origin;
  }

  push(val) {
    this.data.push(val);
    this._up();
  }

  pop() {
    if (this.len === 0) {
      return undefined;
    }
    const top = this.top;

    const item = this.data.pop();
    if (this.len > 0) {
      this.top = item;
      this._down();
    }
    return top;
  }

  get top() {
    return this.data[0];
  }

  set top(val) {
    this.data[0] = val;
  }
}

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new PriorityQueue();
    nums.forEach(i => {
      this.add(i);
    });
  }

  add(val) {
    if (this.k > this.minHeap.len) {
      this.minHeap.push(val);
    } else if (this.minHeap.top < val) {
      // 注意此处对最小堆的操作: 移除顶需要把最后一个元素放到顶递归调整, 而添加元素则是push在最后向上调整, 不能合起来
      this.minHeap.pop();
      this.minHeap.push(val);
    }
    return this.minHeap.top;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
