/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    if (!head) {
        return 0;
    }

    let str = '' + head.val;

    while (head.next) {
        head = head.next;
        str += head.val;
    }

    return parseInt(str, 2);
};


console.log(getDecimalValue([1, 0, 1]))