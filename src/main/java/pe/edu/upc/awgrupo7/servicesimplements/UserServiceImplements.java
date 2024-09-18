package pe.edu.upc.awgrupo7.servicesimplements;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.awgrupo7.entities.User;
import pe.edu.upc.awgrupo7.repositories.IUserRepository;
import pe.edu.upc.awgrupo7.servicesinterfaces.IUserService;

import java.util.List;

@Service
public class UserServiceImplements implements IUserService {

    @Autowired
    private IUserRepository uR;

    @Override
    public List<User> list() {
        return uR.findAll();
    }

    @Override
    public void insert(User u) {
        uR.save(u);
    }
    @Override
    public User findByNombreUser(String nombre) {
        return uR.findByNombreUser(nombre);
    }
}
