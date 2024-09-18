package pe.edu.upc.awgrupo7.servicesinterfaces;

import pe.edu.upc.awgrupo7.entities.Hosting;

import java.util.List;

public interface IHostingService {
    public List<Hosting> list ();
    public void insert (Hosting host);
    public List<Hosting> findByTipo(String tipo);
}
