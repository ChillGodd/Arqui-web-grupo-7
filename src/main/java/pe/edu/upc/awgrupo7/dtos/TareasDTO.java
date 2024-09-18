package pe.edu.upc.awgrupo7.dtos;

import pe.edu.upc.awgrupo7.entities.Proyectos;

import java.time.LocalDate;

public class TareasDTO {

    private int idTareas;

    private String Nombre;

    private String Descripcion;

    private LocalDate FechaLimite;

    private float HorasEmpleadas;

    private boolean Estado;

    private Proyectos proyecto;

    public int getIdTareas() {
        return idTareas;
    }

    public void setIdTareas(int idTareas) {
        this.idTareas = idTareas;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }

    public LocalDate getFechaLimite() {
        return FechaLimite;
    }

    public void setFechaLimite(LocalDate fechaLimite) {
        FechaLimite = fechaLimite;
    }

    public float getHorasEmpleadas() {
        return HorasEmpleadas;
    }

    public void setHorasEmpleadas(float horasEmpleadas) {
        HorasEmpleadas = horasEmpleadas;
    }

    public boolean isEstado() {
        return Estado;
    }

    public void setEstado(boolean estado) {
        Estado = estado;
    }

    public Proyectos getProyecto() {
        return proyecto;
    }

    public void setProyecto(Proyectos proyecto) {
        this.proyecto = proyecto;
    }
}
