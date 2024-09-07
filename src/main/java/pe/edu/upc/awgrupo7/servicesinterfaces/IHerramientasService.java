package pe.edu.upc.awgrupo7.servicesinterfaces;

import pe.edu.upc.awgrupo7.entities.Herramientas;

import java.util.List;

public interface IHerramientasService {
    public List<Herramientas> list();
    public void insert(Herramientas herramienta);
}
