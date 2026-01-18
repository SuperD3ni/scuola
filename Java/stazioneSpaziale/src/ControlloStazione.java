
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ControlloStazione {
    public static void main(String[] args) throws Exception {
        int consumoTot;
        List<ModuloSpaziale> moduliInstallati = new ArrayList<>();
        moduliInstallati.add(new MotoreIperluce(80));
        moduliInstallati.add(new CannoneLaser(50));
        moduliInstallati.add(new SerraIdroponica());

        consumoTot = 0;
        for (ModuloSpaziale modulo : moduliInstallati) {
            modulo.eseguiDiagnostica();
            consumoTot += modulo.getConsumoEnergetico();
            if (modulo instanceof CannoneLaser) {
                ((CannoneLaser) modulo).fuoco();
            } else if (modulo instanceof MotoreIperluce) {
                ((MotoreIperluce) modulo).saltoNellIperspazio();
            }
        }
        System.out.println("Consumo energetico totale: " + consumoTot + " Watt.");

        Iterator<ModuloSpaziale> iterator = moduliInstallati.iterator();
        while (iterator.hasNext()) {
            ModuloSpaziale modulo = iterator.next();
            if (modulo instanceof SerraIdroponica) {
                System.out.println("Rimozione serra idroponica per manutenzione.");
                iterator.remove();
            }
        }
    }
}