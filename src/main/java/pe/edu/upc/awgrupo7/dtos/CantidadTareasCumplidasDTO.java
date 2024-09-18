package pe.edu.upc.awgrupo7.dtos;

public class CantidadTareasCumplidasDTO
{
    private int cantidad;
    private int idTarea;
    private String nombredesarrollador;

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getIdTarea() {
        return idTarea;
    }

    public void setIdTarea(int idTarea) {
        this.idTarea = idTarea;
    }

    public String getNombredesarrollador() {
        return nombredesarrollador;
    }

    public void setNombredesarrollador(String nombredesarrollador) {
        this.nombredesarrollador = nombredesarrollador;
    }
}
