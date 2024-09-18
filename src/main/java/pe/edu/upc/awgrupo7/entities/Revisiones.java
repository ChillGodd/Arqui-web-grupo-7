package pe.edu.upc.awgrupo7.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "Revisiones")
public class Revisiones {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idRevision;

    @Column(name = "Comentario")
    private String Comentario;

    @Column(name = "Puntuacion", nullable = false)
    private double Puntuacion;

    @Column(name = "Fecha", nullable = false)
    private LocalDate Fecha;

    @ManyToOne
    @JoinColumn(name = "idProyecto")
    private  Proyectos proyecto;

    public Revisiones() {
    }

    public Revisiones(int idRevision, String comentario, double puntuacion, LocalDate fecha, Proyectos proyecto) {
        this.idRevision = idRevision;
        this.Comentario = comentario;
        this.Puntuacion = puntuacion;
        this.Fecha = fecha;
        this.proyecto = proyecto;
    }

    public int getIdRevision() {
        return idRevision;
    }

    public void setIdRevision(int idRevision) {
        this.idRevision = idRevision;
    }

    public String getComentario() {
        return Comentario;
    }

    public void setComentario(String comentario) {
        Comentario = comentario;
    }

    public double getPuntuacion() {
        return Puntuacion;
    }

    public void setPuntuacion(double puntuacion) {
        Puntuacion = puntuacion;
    }

    public LocalDate getFecha() {
        return Fecha;
    }

    public void setFecha(LocalDate fecha) {
        Fecha = fecha;
    }

    public Proyectos getProyecto() {
        return proyecto;
    }

    public void setProyecto(Proyectos proyecto) {
        this.proyecto = proyecto;
    }
}
