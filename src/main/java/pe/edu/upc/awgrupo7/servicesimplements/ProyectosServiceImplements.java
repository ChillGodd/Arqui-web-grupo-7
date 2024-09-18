package pe.edu.upc.awgrupo7.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.awgrupo7.entities.Proyectos;
import pe.edu.upc.awgrupo7.repositories.IProyectosRepository;
import pe.edu.upc.awgrupo7.servicesinterfaces.IProyectosService;

import java.util.List;

@Service
public class ProyectosServiceImplements implements IProyectosService {

    @Autowired
    private IProyectosRepository pR;


    @Override
    public List<Proyectos> list() {
        return pR.findAll();
    }

    @Override
    public void insert(Proyectos proy) {
        pR.save(proy);
    }

    @Override
    public List<String[]> presupuestomayor() {
        return pR.presupuestomayor();
    }

    @Override
    public List<String[]> findProjectWithHighestCost() {
        return pR.findProjectWithHighestCost();
    }

    @Override
    public List<String[]> countOverdueProjects() {
        return pR.countOverdueProjects();
    }
}
