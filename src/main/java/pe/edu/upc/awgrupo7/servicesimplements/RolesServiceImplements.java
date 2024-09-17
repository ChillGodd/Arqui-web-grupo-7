package pe.edu.upc.awgrupo7.servicesimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.awgrupo7.entities.Roles;
import pe.edu.upc.awgrupo7.repositories.IRolesRespository;
import pe.edu.upc.awgrupo7.servicesinterfaces.IRolesService;

import java.util.List;

@Service
public class RolesServiceImplements implements IRolesService{
    @Autowired
    private IRolesRespository rR;

    @Override
    public List<Roles> list() {return rR.findAll();}

    @Override
    public void insert(Roles rol) {rR.save(rol);}

    @Override
    public Roles listId(int id) {return rR.findById(id).orElse(new Roles());}

    @Override
    public void delete(int id) {rR.deleteById(id);}

    @Override
    public void update(Roles rol) {rR.save(rol);}

    @Override
    public List<Roles> buscar(String nombre) {
        return rR.buscar(nombre);
    }


}
