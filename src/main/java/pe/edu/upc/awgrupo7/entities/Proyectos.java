package pe.edu.upc.awgrupo7.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "Proyectos")
public class Proyectos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProyecto;

    @Column(name = "Nombre", nullable = false, length = 50)
    private String Nombre;

    @Column(name = "Descripcion", nullable = false, length = 100)
    private String Descripcion;

    @Column(name = "Estado", nullable = false)
    private  Boolean Estado;

    @Column(name = "fechaInicio", nullable = false)
    private LocalDate fechaInicio;

    @Column(name = "fechaFin", nullable = false)
    private LocalDate fechaFin;

    @Column(name = "Presupuesto", nullable = false)
    private String Presupuesto;

    @ManyToOne
    @JoinColumn(name = "idUser")
    private User user;

    public Proyectos() {
    }

    public Proyectos(int idProyecto, String nombre, String descripcion, Boolean estado, LocalDate fechaInicio, LocalDate fechaFin, String presupuesto, User user) {
        this.idProyecto = idProyecto;
        this.Nombre = nombre;
        this.Descripcion = descripcion;
        this.Estado = estado;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.Presupuesto = presupuesto;
        this.user = user;
    }

    public int getIdProyecto() {
        return idProyecto;
    }

    public void setIdProyecto(int idProyecto) {
        this.idProyecto = idProyecto;
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

    public Boolean getEstado() {
        return Estado;
    }

    public void setEstado(Boolean estado) {
        Estado = estado;
    }

    public LocalDate getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public LocalDate getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(LocalDate fechaFin) {
        this.fechaFin = fechaFin;
    }

    public String getPresupuesto() {
        return Presupuesto;
    }

    public void setPresupuesto(String presupuesto) {
        Presupuesto = presupuesto;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
