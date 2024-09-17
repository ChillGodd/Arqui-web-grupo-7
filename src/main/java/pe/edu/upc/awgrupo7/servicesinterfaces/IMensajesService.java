package pe.edu.upc.awgrupo7.servicesinterfaces;

import pe.edu.upc.awgrupo7.entities.Mensajes;

import java.util.List;

public interface IMensajesService {

    public List<Mensajes> list();

    public void insert(Mensajes men);

}
