package pe.edu.upc.awgrupo7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.awgrupo7.entities.User;

import java.util.List;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer> {
    @Query(value = "SELECT * FROM users WHERE nombre_user = :nombreUser", nativeQuery = true)
    User findByNombreUser(@Param("nombreUser") String nombreUser);

    @Query("SELECT u FROM User u JOIN Notificaciones n ON u.idUser = n.idNotificacion " +
            "GROUP BY u.idUser ORDER BY COUNT(n.idNotificacion) DESC")
    public List<String[]> findUserWithMostNotifications();
}
