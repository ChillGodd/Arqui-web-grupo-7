package pe.edu.upc.awgrupo7.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.awgrupo7.entities.Mensajes;
import pe.edu.upc.awgrupo7.repositories.IMensajesRepository;
import pe.edu.upc.awgrupo7.servicesinterfaces.IMensajesService;

import java.util.List;

@Service
public class MensajesServiceImplements implements IMensajesService {

    @Autowired
    private IMensajesRepository mR;

    public List<Mensajes> list()
    {
        return mR.findAll();
    }

    public void insert(Mensajes men)
    {
        mR.save(men);
    }

    @Autowired
    private IMensajesRepository mensajeRepository;

    public List<Mensajes> obtenerMensajesLeidos() {
        return mensajeRepository.findLeidos();
    }
}
