package pe.edu.upc.awgrupo7.servicesinterfaces;

import pe.edu.upc.awgrupo7.entities.Revisiones;

import java.util.List;

public interface IRevisionesService {
    public List<Revisiones> list();
    public void insert(Revisiones rev);
}
