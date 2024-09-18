package pe.edu.upc.awgrupo7.servicesinterfaces;

import pe.edu.upc.awgrupo7.entities.Proyectos;

import java.util.List;

public interface IProyectosService {

    public List<Proyectos> list ();
    public void insert (Proyectos proy);
    public List<String[]> presupuestomayor();
}
