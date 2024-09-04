package pe.edu.upc.awgrupo7.dtos;

import pe.edu.upc.awgrupo7.entities.Roles;

import java.time.LocalDate;

public class UserDTO {
    private int idUser;

    private String NombreUser;

    private String Contrasenia;

    private LocalDate Fecha;

    private Roles rol;

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
