package pe.edu.upc.awgrupo7.dtos;

public class PresupuestoMayorDTO
{
    private String nombreproyecto;
    private String nombredesarrollador;
    private String nombrecliente;

    public String getNombreproyecto() {
        return nombreproyecto;
    }

    public void setNombreproyecto(String nombreproyecto) {
        this.nombreproyecto = nombreproyecto;
    }

    public String getNombredesarrollador() {
        return nombredesarrollador;
    }

    public void setNombredesarrollador(String nombredesarrollador) {
        this.nombredesarrollador = nombredesarrollador;
    }

    public String getNombrecliente() {
        return nombrecliente;
    }

    public void setNombrecliente(String nombrecliente) {
        this.nombrecliente = nombrecliente;
    }
}
