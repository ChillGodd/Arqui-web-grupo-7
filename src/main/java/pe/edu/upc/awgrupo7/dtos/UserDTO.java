package pe.edu.upc.awgrupo7.dtos;

import pe.edu.upc.awgrupo7.entities.Roles;

import java.time.LocalDate;

public class UserDTO {
    private int iduser;

    private String nombreuser;

    private String contrasenia;

    private LocalDate fecha;

    private RolesDTO rol;
    private Boolean enabled;

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public int getIduser() {
        return iduser;
    }

    public void setIduser(int iduser) {
        this.iduser = iduser;
    }

    public String getNombreuser() {
        return nombreuser;
    }

    public void setNombreuser(String nombreuser) {
        this.nombreuser = nombreuser;
    }

    public String getContrasenia() {
        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public RolesDTO getRol() {
        return rol;
    }

    public void setRol(RolesDTO rol) {
        this.rol = rol;
    }
}
