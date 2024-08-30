package pe.edu.upc.awgrupo7.entities;

import jakarta.persistence.*;


@Entity
@Table(name = "Roles")
public class Roles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idRol;

    @Column(name = "Nombre", nullable = false, length = 50)
    private String Nombre;

    @Column(name = "Descripcion", nullable = false, length = 255)
    private String Descripcion;

    public Roles() {
    }

    public Roles(int idRol, String Nombre, String Descripcion)
    {
        this.idRol = idRol;
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
    }

    public int getIdRol() {
        return idRol;
    }

    public void setIdRol(int idRol) {
        this.idRol = idRol;
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
}
