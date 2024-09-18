package pe.edu.upc.awgrupo7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.awgrupo7.entities.Proyectos;

import java.util.List;

@Repository
public interface IProyectosRepository extends JpaRepository<Proyectos, Integer> {

    @Query(value = "SELECT nombre, CAST(presupuesto AS DECIMAL) AS presupuesto " +
            "FROM Proyectos " +
            "ORDER BY CAST(presupuesto AS DECIMAL) DESC " +
            "LIMIT 1", nativeQuery = true)
    public List<String[]> presupuestomayor();
}

