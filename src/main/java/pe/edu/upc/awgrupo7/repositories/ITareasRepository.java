package pe.edu.upc.awgrupo7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.awgrupo7.entities.Tareas;

import java.util.List;

@Repository
public interface ITareasRepository extends JpaRepository<Tareas, Integer> {

    @Query(value = "SELECT COUNT(*) AS cantidad_tareas_cumplidas " +
            "FROM \"Tareas\" " +
            "WHERE \"Estado\" = true", nativeQuery = true)
    public List<String[]> cantidadtareascumplidas();
    //long cantidadtareascumplidas();
}
