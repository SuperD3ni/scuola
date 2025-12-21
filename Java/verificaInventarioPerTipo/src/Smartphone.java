public class Smartphone {
    private String modello;
    private int memoria;

    public Smartphone(String modello, int memoria) {
        this.modello = modello;
        this.memoria = memoria;
    }

    public String getModello() {
        return modello;
    }

    public int getMemoria() {
        return memoria;
    }

    @Override
    public String toString() {
        return "Smartphone;"+modello+";"+memoria;
    }

}
