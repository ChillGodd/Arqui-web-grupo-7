package pe.edu.upc.awgrupo7.servicesinterfaces;


import pe.edu.upc.awgrupo7.entities.Notificaciones;

import java.util.List;

public interface INotificacionesService {
    public List<Notificaciones> list();

    public void insert(Notificaciones n);
}
