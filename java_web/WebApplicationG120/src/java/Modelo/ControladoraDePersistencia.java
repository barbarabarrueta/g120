
package Modelo;

import Modelo.exceptions.NonexistentEntityException;
import java.util.List;


public class ControladoraDePersistencia {
    PersonaJpaController personaJPA=new PersonaJpaController();

public void crearPersona(Persona persona)
{
   personaJPA.create(persona);
}

public void eliminarPersona(int id) 
{
    try {
        personaJPA.destroy(id);
    } 
    catch (NonexistentEntityException e) {
        //log de  errores  del   servidor
    }
   
}

public List<Persona> listarPersonas(){
    return personaJPA.findPersonaEntities();
}

}
