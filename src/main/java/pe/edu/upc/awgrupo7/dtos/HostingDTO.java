package pe.edu.upc.awgrupo7.dtos;

import pe.edu.upc.awgrupo7.entities.Proyectos;

import java.time.LocalDate;

public class HostingDTO {

    private int idHosting;

    private String Tipo;

    private String URL;

    private LocalDate FechaAdquisicion;

    private LocalDate FechaExpiracion;

    private Proyectos proyecto;

    public int getIdHosting() {
        return idHosting;
    }

    public void setIdHosting(int idHosting) {
        this.idHosting = idHosting;
    }

    public String getTipo() {
        return Tipo;
    }

    public void setTipo(String tipo) {
        Tipo = tipo;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public LocalDate getFechaAdquisicion() {
        return FechaAdquisicion;
    }

    public void setFechaAdquisicion(LocalDate fechaAdquisicion) {
        FechaAdquisicion = fechaAdquisicion;
    }

    public LocalDate getFechaExpiracion() {
        return FechaExpiracion;
    }

    public void setFechaExpiracion(LocalDate fechaExpiracion) {
        FechaExpiracion = fechaExpiracion;
    }

    public Proyectos getProyecto() {
        return proyecto;
    }

    public void setProyecto(Proyectos proyecto) {
        this.proyecto = proyecto;
    }
}
