package pe.edu.upc.awgrupo7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.awgrupo7.entities.Roles;

import java.util.List;

@Repository
public interface IRolesRespository extends JpaRepository<Roles,Integer> {
    @Query("Select d from Roles d where d.nombre like %:nombre")
    public List<Roles> buscar(@Param("nombre") String nombre);
}
