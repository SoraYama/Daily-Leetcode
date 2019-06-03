
function ListNode(val) {
     this.val = val;
     this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var cur = new ListNode(0);
    var dummy = new ListNode(0);
    dummy.next = head;
    cur = head;
    var len = 0;
    while(cur !== null) {
        len ++;
        cur = cur.next;
    }
    cur = dummy;
    len = len - n;
    while(len > 0) {
        len --;
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return dummy.next;
};

var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(null);
    dummy.next = head;

    let leading = head;
    let prev = dummy;
    let curr = head;
    let i = 0;
    while (leading) {
        if (i >= n) {
            prev = prev.next;
            curr = curr.next;
        }
        leading = leading.next;
        i++;
    }
    prev.next = curr.next;
    return dummy.next;
};
