package pe.edu.upc.awgrupo7.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "Hosting")
public class Hosting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idHosting;

    @Column(name = "Tipo", nullable = false, length = 50)
    private String Tipo;

    @Column(name = "URL", nullable = false, length = 100)
    private String URL;

    @Column(name = "FechaAdquisicion", nullable = false)
    private LocalDate FechaAdquisicion;

    @Column(name = "FechaExpiracion", nullable = false)
    private LocalDate FechaExpiracion;

    @ManyToOne
    @JoinColumn(name = "idProyecto")
    private Proyectos proyecto;

    public Hosting() {
    }

    public Hosting(int idHosting, String tipo, String URL, LocalDate fechaAdquisicion, LocalDate fechaExpiracion, Proyectos proyecto) {
        this.idHosting = idHosting;
        this.Tipo = tipo;
        this.URL = URL;
        this.FechaAdquisicion = fechaAdquisicion;
        this.FechaExpiracion = fechaExpiracion;
        this.proyecto = proyecto;
    }

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
