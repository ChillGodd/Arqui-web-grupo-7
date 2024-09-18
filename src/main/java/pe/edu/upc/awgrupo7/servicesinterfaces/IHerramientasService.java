package pe.edu.upc.awgrupo7.servicesinterfaces;

import pe.edu.upc.awgrupo7.entities.Herramientas;
import pe.edu.upc.awgrupo7.entities.Hosting;

import java.util.List;

public interface IHerramientasService {
    public List<Herramientas> list();
    public void insert(Herramientas herramienta);
    public List<Hosting> findByNombreHerramienta(String nombre);
}
