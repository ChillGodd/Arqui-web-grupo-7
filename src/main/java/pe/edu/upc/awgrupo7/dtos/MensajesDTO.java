package pe.edu.upc.awgrupo7.dtos;

import pe.edu.upc.awgrupo7.entities.User;

import java.time.LocalDate;

public class MensajesDTO {

    private int idMensaje;

    private String Contenido;

    private LocalDate Fecha;

    private boolean Leido;

    private User user;

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
