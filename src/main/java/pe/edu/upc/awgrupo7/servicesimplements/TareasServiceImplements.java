package pe.edu.upc.awgrupo7.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.awgrupo7.entities.Tareas;
import pe.edu.upc.awgrupo7.repositories.ITareasRepository;
import pe.edu.upc.awgrupo7.servicesinterfaces.ITareasService;

import java.util.List;

@Service
public class TareasServiceImplements implements ITareasService {

    @Autowired
    private ITareasRepository tR;

    @Override
    public List<Tareas> list() {
        return tR.findAll();
    }

    @Override
    public void insert(Tareas tarea) {
        tR.save(tarea);
    }
}
