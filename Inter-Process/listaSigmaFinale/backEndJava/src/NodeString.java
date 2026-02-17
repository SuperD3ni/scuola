public class NodeString {
    private String data;
    private NodeString next;
    private NodeString prev;

    public NodeString(String data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }

    public NodeString getNext() { return next; }
    public void setNext(NodeString next) { this.next = next; }

    public NodeString getPrev() { return prev; }
    public void setPrev(NodeString prev) { this.prev = prev; }
}
