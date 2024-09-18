package pe.edu.upc.awgrupo7.entities;

import jakarta.persistence.*;


@Entity
@Table(name = "Roles")
public class Roles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idrol;

    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;

    @Column(name = "descripcion", nullable = false, length = 255)
    private String descripcion;

    public Roles() {
    }

    public Roles(int idRol, String Nombre, String Descripcion)
    {
        this.idrol = idRol;
        this.nombre = Nombre;
        this.descripcion = Descripcion;
    }

    public int getIdRol() {
        return idrol;
    }

    public void setIdRol(int idRol) {
        this.idrol = idRol;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        descripcion = descripcion;
    }
}
