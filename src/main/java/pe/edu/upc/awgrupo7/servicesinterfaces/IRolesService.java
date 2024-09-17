package pe.edu.upc.awgrupo7.servicesinterfaces;

import pe.edu.upc.awgrupo7.entities.Roles;

import java.util.List;

public interface IRolesService {
    public List<Roles> list();
    public void insert(Roles rol);
    public Roles listId(int id);
    public void delete(int id);
    public void update(Roles rol);
    public List<Roles>buscar(String nombre);

}
