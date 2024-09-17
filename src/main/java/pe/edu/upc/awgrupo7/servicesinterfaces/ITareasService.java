package pe.edu.upc.awgrupo7.servicesinterfaces;

import pe.edu.upc.awgrupo7.entities.Tareas;

import java.util.List;

public interface ITareasService {

    public List<Tareas> list ();
    public void insert (Tareas tarea);
}
