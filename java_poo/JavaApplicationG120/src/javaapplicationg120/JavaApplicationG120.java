
package javaapplicationg120;

public class JavaApplicationG120 {

    public static void main(String[] args) {
       /*Persona juan = new Persona();
       //juan.nombre="Juan";
       juan.setNombre("Juan");
       juan.saludar();

        Persona  ana=new Persona("Ana",  "Gonzales", "487777");
        ana.saludar();*/

        Persona jose=new Conductor(454545, "jose", "Rosales", "45454");
        jose.saludar();
        //jose.conducir();

        Persona daniel=new Pasajero("Daniel",  "Rosas", "4545545");
        daniel.saludar();

        Auto autoC=new AutoConvertible();
        autoC.encender();
    }
    
}
