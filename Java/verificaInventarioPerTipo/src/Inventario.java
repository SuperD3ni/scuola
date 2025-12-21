public class Inventario {
    public int contaOggettiNelMagazzino(Scatola<?>[] inventario, Class<?> classe) {
        int count = 0;
        for (int i = 0; i < inventario.length; i++) {
            if (classe.isInstance(inventario[i].getContenuto())) {
                count++;
            }
        }
        return count;
    }
}
