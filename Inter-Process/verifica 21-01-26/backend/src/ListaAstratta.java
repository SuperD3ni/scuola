public abstract class ListaAstratta<T> {
    protected Nodo<T> head;


    protected T rimuoviDallaTesta() {
        if (head == null) {
            return null;
        }
        T data = head.getData();
        head = head.getNext();
        return data;
    }

    public abstract void inserisci(T data);
    public abstract T estrai();

    public Nodo<T> getHead() {
        return head;
    }
}