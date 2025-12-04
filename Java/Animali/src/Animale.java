public class Animale {
    private String nome;
    private int eta;
    public Animale(String nome, int eta) {
        this.nome = nome;
        this.eta = eta;
    }
    public String descrizione(){
        return "Nome: " + this.nome + ", Età: " + this.eta;
    }
    public void mangia(){
        System.out.println("L'animale sta mangiando");
    }
    public void dormi(){
        System.out.println("L'animale sta dormendo");
    }

}