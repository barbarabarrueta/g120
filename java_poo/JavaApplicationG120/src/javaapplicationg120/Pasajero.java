
package javaapplicationg120;

public class Pasajero extends Persona{

    public Pasajero(String nombre, String apellido, String dni) {
        super(nombre, apellido, dni);
    }


     @Override
    public void saludar(){
        System.out.println("Bienvenidos!! Soy el pasajero " + super.getNombre());
    }
}
