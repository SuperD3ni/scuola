public class List {
    private NodeInt head;

    public void add(int data){
        NodeInt n = new NodeInt(data);
        if (head != null && data>head.getData()){
            NodeInt p = head;
            while (p.getNext() != null && data>p.getNext().getData()){
                p = p.getNext();
            } n.setNext(p.getNext());
            p.setNext(n);
        } else {
            n.setNext(head);
            head = n;
        }
    }
}
