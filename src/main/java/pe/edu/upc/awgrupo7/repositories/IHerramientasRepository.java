package pe.edu.upc.awgrupo7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.awgrupo7.entities.Herramientas;
import pe.edu.upc.awgrupo7.entities.Hosting;

import java.util.List;

@Repository
public interface IHerramientasRepository extends JpaRepository<Herramientas, Integer>{
    @Query("SELECT h FROM Herramientas h WHERE h.Nombre = :nombre")
    List<Hosting> findByNombre(@Param("nombre") String nombre);
}
