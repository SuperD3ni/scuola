public class Main {
    public static void main(String[] args) throws Exception {
        if (args.length == 1) {
            int index = Integer.parseInt(args[0]);
            Scatola<?>[] scatole = new Scatola<?>[5];
            Object oggettoVinto;
            Carbone carbone;
            for (int i = 0; i < 5; i++) {
                int random = (int) (Math.random() * 10);
                if (random > -1 && random < 3) {
                    scatole[i] = new Scatola<Console>(new Console(Math.random() < 0.5 ? "PlayStation 5" : "Xbox Series X", Math.random() < 0.5));
                } else if (random >= 4 && random < 7) {
                    scatole[i] = new Scatola<Carbone>(new Carbone("nero", 1 + random * 2));
                } else {
                    scatole[i] = new Scatola<Smartphone>(new Smartphone(Math.random() < 0.5 ? "Samsung S25" : "iPhone 17", Math.random() < 0.5 ? 256 : 512));
                }
            }
            oggettoVinto = scatole[index].getContenuto();
            if (oggettoVinto instanceof Console) {
                System.out.println("Hai vinto: " + oggettoVinto.toString());
            } else if (oggettoVinto instanceof Carbone) {
                carbone = (Carbone) oggettoVinto;
                System.out.println("Sei stato sfortunato, Hai vinto del carbone di colore " + carbone.getColore()+ " quantita': " + carbone.getQuantita() + " pezzi.");
            } else if (oggettoVinto instanceof Smartphone) {
                System.out.println("Hai vinto: " + oggettoVinto.toString());
            }
        }
    }
}
