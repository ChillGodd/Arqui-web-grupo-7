package pe.edu.upc.awgrupo7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.awgrupo7.entities.Mensajes;

import java.util.List;

@Repository
public interface IMensajesRepository extends JpaRepository<Mensajes, Integer> {

    @Query("SELECT m FROM Mensajes m WHERE m.Leido = true")
    List<Mensajes> findLeidos();
}
