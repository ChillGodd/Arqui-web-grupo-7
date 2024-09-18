package pe.edu.upc.awgrupo7.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.awgrupo7.entities.Hosting;
import pe.edu.upc.awgrupo7.repositories.IHostingRepository;
import pe.edu.upc.awgrupo7.servicesinterfaces.IHostingService;

import java.util.List;

@Service
public class HostingServiceImplements implements IHostingService {

    @Autowired
    private IHostingRepository hR;

    @Override
    public List<Hosting> list() {
        return hR.findAll();
    }

    @Override
    public void insert(Hosting host) {
        hR.save(host);
    }

    @Override
    public List<Hosting> findByTipo(String tipo) {
        return hR.findByTipo(tipo);
    }

}
