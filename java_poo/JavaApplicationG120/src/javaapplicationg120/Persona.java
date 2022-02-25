
package javaapplicationg120;

public abstract class Persona {

    //atributos
    protected  int id;
    protected String  nombre;
    protected String  apellido;
    protected String dni;

    //constructores
    public Persona( String nombre, String apellido, String dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    public Persona() {
    }

    //Métodos getters  y setters
    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getDni() {
        return dni;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }


    //métodos
    public void saludar()
    {
        System.out.println("Bienvenidos!! Soy " + nombre);
    }

    public void saludar(String texto){
        System.out.println(texto);
    }
    
}
