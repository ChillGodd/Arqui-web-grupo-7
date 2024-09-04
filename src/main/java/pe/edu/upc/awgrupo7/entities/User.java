package pe.edu.upc.awgrupo7.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUser;

    @Column(name = "NombreUser", nullable = false, length = 40)
    private String NombreUser;

    @Column(name = "Contrasenia", nullable = false,length = 50)
    private String Contrasenia;

    @Column(name = "Fecha", nullable = false)
    private LocalDate Fecha;

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



