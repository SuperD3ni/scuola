public class Smartphone {
    private String modello;
    private int memoria;

    public Smartphone(String modello, int memoria) {
        this.modello = modello;
        this.memoria = memoria;
    }

    public String toString() {
        return "Smartphone: " + modello + ", Memoria: " + memoria + "GB";
    }
}
