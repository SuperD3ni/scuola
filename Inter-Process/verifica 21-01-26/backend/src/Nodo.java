public class Nodo <T>{
    private T data;
    private Nodo<T> next;
    public Nodo(T data) {
        this.data = data;
        this.next = null;
    }
    public Nodo(T data, Nodo<T> next) {
        this.data = data;
        this.next = next;
    }
    public T getData() {
        return data;
    }
    public void setData(T data) {
        this.data = data;
    }
    public Nodo<T> getNext() {
        return next;
    }
    public void setNext(Nodo<T> next) {
        this.next = next;
    }
}