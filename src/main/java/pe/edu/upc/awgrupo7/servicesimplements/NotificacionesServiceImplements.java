package pe.edu.upc.awgrupo7.servicesimplements;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.awgrupo7.entities.Notificaciones;
import pe.edu.upc.awgrupo7.repositories.INotificacionesRepository;
import pe.edu.upc.awgrupo7.servicesinterfaces.INotificacionesService;

import java.util.List;

@Service
public class NotificacionesServiceImplements implements INotificacionesService {
    @Autowired
    private INotificacionesRepository mR;

    public List<Notificaciones> list()
    {
        return mR.findAll();
    }

    public void insert(Notificaciones noti)
    {
        mR.save(noti);
    }

}
