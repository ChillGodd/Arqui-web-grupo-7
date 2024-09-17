package pe.edu.upc.awgrupo7.dtos;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import pe.edu.upc.awgrupo7.entities.Proyectos;

import java.time.LocalDate;

public class RevisionesDTO {

    private int idRevision;

    private String Comentario;

    private double Puntuacion;

    private LocalDate Fecha;

    private Proyectos proyecto;

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
