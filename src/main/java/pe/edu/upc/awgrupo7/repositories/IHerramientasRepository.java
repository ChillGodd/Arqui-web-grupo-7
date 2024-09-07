package pe.edu.upc.awgrupo7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.awgrupo7.entities.Herramientas;

@Repository
public interface IHerramientasRepository extends JpaRepository<Herramientas, Integer>{
}
