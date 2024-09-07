package pe.edu.upc.awgrupo7.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Herramientas")
public class Herramientas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idHerramienta;

    @Column(name = "Nombre", nullable = false, length = 50)
    private String Nombre;

    @Column(name = "Descripcion", nullable = false, length = 100)
    private String Descripcion;

    @ManyToOne
    @JoinColumn(name = "idProyectos")
    private Proyectos proyecto;

    public Herramientas() {
    }

    public Herramientas(int idHerramienta, String nombre, String descripcion, Proyectos proyecto) {
        this.idHerramienta = idHerramienta;
        this.Nombre = nombre;
        this.Descripcion = descripcion;
        this.proyecto = proyecto;
    }

    public int getIdHerramienta() {
        return idHerramienta;
    }

    public void setIdHerramienta(int idHerramienta) {
        this.idHerramienta = idHerramienta;
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

    public Proyectos getProyecto() {
        return proyecto;
    }

    public void setProyecto(Proyectos proyecto) {
        this.proyecto = proyecto;
    }
}
