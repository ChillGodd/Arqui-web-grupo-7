package pe.edu.upc.awgrupo7.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.awgrupo7.entities.Herramientas;
import pe.edu.upc.awgrupo7.repositories.IHerramientasRepository;
import pe.edu.upc.awgrupo7.servicesinterfaces.IHerramientasService;

import java.util.List;

@Service
public class HerramientasServiceImplements implements IHerramientasService {

    @Autowired
    private IHerramientasRepository hR;

    @Override
    public List<Herramientas> list() {
        return hR.findAll();
    }

    @Override
    public void insert(Herramientas herramienta) {
        hR.save(herramienta);
    }
}
