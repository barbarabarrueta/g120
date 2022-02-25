package javaapplicationg120;

public class Conductor extends Persona {

    private int nroLicencia;

    public Conductor(int nroLicencia, String nombre, String apellido, String dni) {
        //super(nombre, apellido, dni);
        super.nombre=nombre;
        super.apellido=apellido;
        super.dni=dni;
        this.nroLicencia = nroLicencia;
    }

    public int getNroLicencia() {
        return nroLicencia;
    }

    public void setNroLicencia(int nroLicencia) {
        this.nroLicencia = nroLicencia;
    }

    public void conducir() {
        System.out.println("Estoy conduciendo");
    }

    @Override
    public void saludar(){
        System.out.println("Bienvenidos!! Soy el conductor " + super.getNombre());
    }

}
