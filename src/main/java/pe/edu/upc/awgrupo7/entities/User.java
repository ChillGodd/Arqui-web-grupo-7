package pe.edu.upc.awgrupo7.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUser;

    @Column(name = "nombre_user", nullable = false, length = 40)
    private String NombreUser;

    @Column(name = "contrasenia", nullable = false,length = 200)
    private String Contrasenia;

    @Column(name = "fecha", nullable = false)
    private LocalDate Fecha;
    private Boolean enabled;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "idRol")
    private Roles rol;

    public User() {
    }

    public User(int idUser, String nombreUser, String contrasenia, LocalDate fecha, Roles rol)
    {
        this.idUser = idUser;
        this.NombreUser = nombreUser;
        this.Contrasenia = contrasenia;
        this.Fecha = fecha;
        this.rol = rol;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public String getNombreUser() {
        return NombreUser;
    }

    public void setNombreUser(String nombreUser) {
        NombreUser = nombreUser;
    }

    public String getContrasenia() {
        return Contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        Contrasenia = contrasenia;
    }

    public LocalDate getFecha() {
        return Fecha;
    }

    public void setFecha(LocalDate fecha) {
        Fecha = fecha;
    }

    public Roles getRol() {
        return rol;
    }

    public void setRol(Roles rol) {
        this.rol = rol;
    }
}



