public class Animale {

   protected String nome;

    protected int eta;

    

    public Animale(String nome, int eta) {

        this.nome = nome;

        this.eta = eta;

    } 

    public void mangia() {

        System.out.println(nome + " sta mangiando");

    }

    public String toString() {

        return "Nome: " + nome + ", Età: " + eta;
        
    }
}