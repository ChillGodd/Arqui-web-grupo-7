package pe.edu.upc.awgrupo7.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "Mensajes")
public class Mensajes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idMensaje;

    @Column(name = "Contenido",nullable = false,length = 50)
    private String Contenido;

    @Column(name = "Fecha",nullable = false)
    private LocalDate Fecha;

    @Column(name = "Leido",nullable = false)
    private boolean Leido;

    @ManyToOne
    @JoinColumn(name = "idUser")
    private User user;

    public Mensajes() {
    }

    public Mensajes(int idMensaje, String contenido, LocalDate fecha, boolean leido, User user) {
        this.idMensaje = idMensaje;
        this.Contenido = contenido;
        this.Fecha = fecha;
        this.Leido = leido;
        this.user = user;
    }

    public int getIdMensaje() {
        return idMensaje;
    }

    public void setIdMensaje(int idMensaje) {
        this.idMensaje = idMensaje;
    }

    public String getContenido() {
        return Contenido;
    }

    public void setContenido(String contenido) {
        Contenido = contenido;
    }

    public LocalDate getFecha() {
        return Fecha;
    }

    public void setFecha(LocalDate fecha) {
        Fecha = fecha;
    }

    public boolean isLeido() {
        return Leido;
    }

    public void setLeido(boolean leido) {
        Leido = leido;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
