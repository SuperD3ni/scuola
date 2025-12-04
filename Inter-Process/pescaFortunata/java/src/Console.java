public class Console {
    private String nome;
    private boolean lettoreDisco;

    public Console(String nome, boolean lettoreDisco) {
        this.nome = nome;
        this.lettoreDisco = lettoreDisco;
    }

    public String toString() {
        return "Console: " + nome + (lettoreDisco ? " con lettore disco" : " senza lettore disco");
    }
}
