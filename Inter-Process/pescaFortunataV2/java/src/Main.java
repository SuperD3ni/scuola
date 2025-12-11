public class Main {
    public static void main(String[] args) throws Exception {
        if (args.length == 2) {
            if (Integer.parseInt(args[1]) == 5) {                   // if it's last box returns carbone
                Carbone carbone = new Carbone("nero", (int) (Math.random() * 10) * 2);
                System.out.println(carbone.toString());
            } else {
                int index = Integer.parseInt(args[0]);
                Scatola<?>[] scatole = new Scatola<?>[5];
                Object oggettoVinto;
                for (int i = 0; i < 5; i++) {                       // populate boxes array randomly
                    int random = (int) (Math.random() * 10);
                    if (random > -1 && random < 3) {                // 30% smartphone, 40% console, 30% carbone
                        scatole[i] = new Scatola<Smartphone>(new Smartphone(Math.random() < 0.5 ? "Samsung S25" : "iPhone 17", Math.random() < 0.5 ? 256 : 512));
                    } else if (random > 2 && random < 6) {
                        scatole[i] = new Scatola<Console>(new Console(Math.random() < 0.5 ? "PlayStation 5" : "Xbox Series X", Math.random() < 0.5));
                    } else {
                        scatole[i] = new Scatola<Carbone>(new Carbone("nero", 1 + random * 2));
                    }
                }
                oggettoVinto = scatole[index].getContenuto();      // get content of chosen box
                if (oggettoVinto instanceof Console) {             // return object info (name;attribute1;attribute2)
                    System.out.println(oggettoVinto.toString());
                } else if (oggettoVinto instanceof Carbone) {
                    System.out.println(oggettoVinto.toString());
                } else if (oggettoVinto instanceof Smartphone) {
                    System.out.println(oggettoVinto.toString());
                }
            }
            
        }
    }
}
