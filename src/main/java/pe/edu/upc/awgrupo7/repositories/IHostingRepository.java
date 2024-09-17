package pe.edu.upc.awgrupo7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.awgrupo7.entities.Hosting;

import java.util.List;

@Repository
public interface IHostingRepository extends JpaRepository<Hosting, Integer> {
    @Query("SELECT h FROM Hosting h WHERE h.Tipo = :tipo")
    List<Hosting> findByTipo(@Param("tipo") String tipo);
}
