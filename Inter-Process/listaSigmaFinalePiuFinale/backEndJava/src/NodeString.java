public class NodeString {
    private String data;
    private NodeString next;

    public NodeString(String data) {
        this.data = data;
        this.next = null;
    }

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }

    public NodeString getNext() { return next; }
    public void setNext(NodeString next) { this.next = next; }
}
