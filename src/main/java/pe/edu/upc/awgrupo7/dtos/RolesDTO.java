package pe.edu.upc.awgrupo7.dtos;

public class RolesDTO {
    private int idRol;
    private String Nombre;
    private String Descripcion;

    public int getIdRol() {
        return idRol;
    }
    public void setidRol(int idRol) {
        this.idRol = idRol;
    }
    public String getNombre() {
        return Nombre;
    }
    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }
    public String getDescripcion() {
        return Descripcion;
    }
    public void setDescripcion(String Descripcion) {
        this.Descripcion = Descripcion;
    }
}
