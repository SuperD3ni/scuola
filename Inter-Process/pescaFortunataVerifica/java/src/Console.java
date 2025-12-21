public class Console {
    private String nome;
    private boolean lettoreDisco;

    public Console(String nome, boolean lettoreDisco) {
        this.nome = nome;
        this.lettoreDisco = lettoreDisco;
    }

    public String getNome() {
        return nome;
    }

    public boolean getLettoreDisco() {
        return lettoreDisco;
    }

    @Override
    public String toString() {
        return "Console;"+nome+";"+lettoreDisco;
    }
}
