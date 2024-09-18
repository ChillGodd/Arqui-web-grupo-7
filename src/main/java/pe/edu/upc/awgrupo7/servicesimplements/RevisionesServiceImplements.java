package pe.edu.upc.awgrupo7.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.awgrupo7.entities.Revisiones;
import pe.edu.upc.awgrupo7.repositories.IRevisionesRepository;
import pe.edu.upc.awgrupo7.servicesinterfaces.IRevisionesService;

import java.util.List;

@Service
public class RevisionesServiceImplements implements IRevisionesService {

    @Autowired
    private IRevisionesRepository rR;

    @Override
    public List<Revisiones> list() {
        return rR.findAll();
    }

    @Override
    public void insert(Revisiones rev) {
        rR.save(rev);
    }
}
