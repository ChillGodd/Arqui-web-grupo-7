package pe.edu.upc.awgrupo7.dtos;

public class UserNotifiacionesDTO {
    private String NombreUser;
    private long cantidadNotificaciones;

    public String getNombreUsuario() {
        return NombreUser;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.NombreUser = nombreUsuario;
    }

    public long getCantidadNotificaciones() {
        return cantidadNotificaciones;
    }

    public void setCantidadNotificaciones(long cantidadNotificaciones) {
        this.cantidadNotificaciones = cantidadNotificaciones;
    }
}