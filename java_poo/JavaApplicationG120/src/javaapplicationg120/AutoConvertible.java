package javaapplicationg120;

public class AutoConvertible implements Auto {

    @Override
    public void encender() {
        System.out.println("El  auto convertible  está encendido");
    }

    @Override
    public void apagar() {
        System.out.println("El  auto convertible  está apagado");
    }
}
