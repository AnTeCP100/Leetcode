/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        map<Node*, Node*> map;
        
        //copy value for new node
        Node *tmp = head;
        while(tmp != NULL) {
            map[tmp] = new Node(tmp->val);
            tmp = tmp->next;
        }
        
        //copy pointer
        Node *newHead = map[head];
        Node *curNode = newHead;
        tmp = head;
        while(tmp != NULL) {
            if(tmp->next != NULL) {
                curNode->next = map[tmp->next];
            }
            if(tmp->random != NULL) {
                curNode->random = map[tmp->random];
            }
            tmp = tmp->next;
            curNode = curNode->next;
        }
        
        return newHead;
    }
};