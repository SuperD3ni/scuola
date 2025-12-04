public class InventarioArrayVeicoli {
    private Veicolo[] arrayInventario;
    private int dimensioneCorrente;

    public InventarioArrayVeicoli(int capacitaMassima) {
        this.arrayInventario = new Veicolo[capacitaMassima];
        this.dimensioneCorrente = 0;
    }

    public boolean aggiungiElemento(Veicolo veicolo) {
        if (dimensioneCorrente >= arrayInventario.length) {
            System.out.println("ERRORE: Inventario pieno! Non è possibile aggiungere altri veicoli.");
            return false;
        }
        arrayInventario[dimensioneCorrente] = veicolo;
        dimensioneCorrente++;
        return true;
    }

    public void stampaInventario() {
        if (dimensioneCorrente == 0) {
            System.out.println("L'inventario è vuoto.");
            return;
        }
        System.out.println("INVENTARIO COMPLETO");
        for (int i = 0; i < dimensioneCorrente; i++) {
            System.out.println((i + 1) + ". " + arrayInventario[i]);
        }
        System.out.println();
    }

    public Veicolo getElemento(int indice) {
        return arrayInventario[indice];
    }

    public void stampaInventarioPerTipo(Class<?> tipoClasse) {
        boolean trovato = false;
        System.out.println("VEICOLI DI TIPO: " + tipoClasse.getSimpleName());
        for (int i = 0; i < dimensioneCorrente; i++) {
            if (tipoClasse.isInstance(arrayInventario[i])) {
                System.out.println((i + 1) + ". " + arrayInventario[i]);
                trovato = true;
            }
        }
        if (!trovato) {
            System.out.println("Nessun veicolo trovato di questo tipo.");
        }
        System.out.println();
    }
}
