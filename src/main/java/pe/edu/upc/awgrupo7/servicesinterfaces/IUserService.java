package pe.edu.upc.awgrupo7.servicesinterfaces;

import pe.edu.upc.awgrupo7.entities.User;

import java.util.List;

public interface IUserService {

    public List<User> list();

    public void insert(User u);

    User findByNombreUser(String nombre);

    public List<String[]>findUserWithMostNotifications();
}
