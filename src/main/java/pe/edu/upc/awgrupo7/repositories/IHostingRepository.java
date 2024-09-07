package pe.edu.upc.awgrupo7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.awgrupo7.entities.Hosting;

@Repository
public interface IHostingRepository extends JpaRepository<Hosting, Integer> {
}
