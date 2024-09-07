package pe.edu.upc.awgrupo7.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "Tareas")
public class Tareas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idTareas;

    @Column(name = "Nombre", nullable = false, length = 50)
    private String Nombre;

    @Column(name = "Descripcion", nullable = false, length = 100)
    private String Descripcion;

    @Column(name = "FechaLimite", nullable = false)
    private LocalDate FechaLimite;

    @Column(name = "HorasEmpleadas", nullable = false)
    private float HorasEmpleadas;

    @Column(name = "Estado", nullable = false)
    private boolean Estado;

    @ManyToOne
    @JoinColumn(name = "idProytecto")
    private Proyectos proyecto;

    public Tareas() {
    }

    public Tareas(int idTareas, String nombre, String descripcion, LocalDate fechaLimite, float horasEmpleadas, boolean estado, Proyectos proyecto) {
        this.idTareas = idTareas;
        this.Nombre = nombre;
        this.Descripcion = descripcion;
        this.FechaLimite = fechaLimite;
        this.HorasEmpleadas = horasEmpleadas;
        this.Estado = estado;
        this.proyecto = proyecto;
    }

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
