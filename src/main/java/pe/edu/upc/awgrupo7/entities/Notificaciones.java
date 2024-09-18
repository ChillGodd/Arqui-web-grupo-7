package pe.edu.upc.awgrupo7.entities;

import jakarta.persistence.*;
import jdk.jfr.Registered;

import java.time.LocalDate;

@Entity
@Table(name="Notificaciones")
public class Notificaciones {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idNotificacion;

    @Column(name = "FechaNotificacion", nullable = false)
    private LocalDate fechaNotificacion;

    @Column(name = "Mensaje", nullable = false, length = 100)
    private String mensaje;

    @Column(name = "TipoNotificacion", nullable = false, length = 100)
    private String tipoNotificacion;

    @ManyToOne
    @JoinColumn(name = "idUser")
    private User user;

    public Notificaciones() {
    }

    public Notificaciones(int idNotificacion, LocalDate fechaNotificacion, String mensaje, String tipoNotificacion, User user) {
        this.idNotificacion = idNotificacion;
        this.fechaNotificacion = fechaNotificacion;
        this.mensaje = mensaje;
        this.tipoNotificacion = tipoNotificacion;
        this.user = user;
    }

    public int getIdNotificacion() {
        return idNotificacion;
    }

    public void setIdNotificacion(int idNotificacion) {
        this.idNotificacion = idNotificacion;
    }

    public LocalDate getFechaNotificacion() {
        return fechaNotificacion;
    }

    public void setFechaNotificacion(LocalDate fechaNotificacion) {
        this.fechaNotificacion = fechaNotificacion;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getTipoNotificacion() {
        return tipoNotificacion;
    }

    public void setTipoNotificacion(String tipoNotificacion) {
        this.tipoNotificacion = tipoNotificacion;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
