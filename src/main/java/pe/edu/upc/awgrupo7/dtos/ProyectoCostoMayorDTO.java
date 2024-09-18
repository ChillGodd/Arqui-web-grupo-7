package pe.edu.upc.awgrupo7.dtos;

public class ProyectoCostoMayorDTO
    {
        private int proyectoId;
        private String nombreProyecto;
        private double presupuesto;

        public int getProyectoId() {
        return proyectoId;
    }

        public void setProyectoId(int proyectoId) {
        this.proyectoId = proyectoId;
    }

        public String getNombreProyecto() {
        return nombreProyecto;
    }

        public void setNombreProyecto(String nombreProyecto) {
        this.nombreProyecto = nombreProyecto;
    }

        public double getPresupuesto() {
        return presupuesto;
    }

        public void setPresupuesto(double presupuesto) {
        this.presupuesto = presupuesto;
    }
    }
