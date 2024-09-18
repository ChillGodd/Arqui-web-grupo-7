package pe.edu.upc.awgrupo7.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.PresupuestoMayorDTO;
import pe.edu.upc.awgrupo7.dtos.ProyectosDTO;
import pe.edu.upc.awgrupo7.entities.Proyectos;
import pe.edu.upc.awgrupo7.servicesinterfaces.IProyectosService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/proyectos")
public class  ProyectosController {

    @Autowired
    private IProyectosService pS;

    @PostMapping
    public void insertar(@RequestBody ProyectosDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Proyectos p = m.map(dto, Proyectos.class);
        pS.insert(p);
    }

    @GetMapping
    public List<Proyectos> listar(){
        return pS.list().stream().map(x ->{
            ModelMapper m = new ModelMapper();
            return m.map(x, Proyectos.class);
        }).collect(Collectors.toList());
    }

    @GetMapping("/presupuestomayor")
    public List<PresupuestoMayorDTO> presupuestomayor()
    {
        List<String[]>filalista=pS.presupuestomayor();
        List<PresupuestoMayorDTO> dtoList=new ArrayList<>();
        for(String[] columna: filalista)
        {
            PresupuestoMayorDTO dto=new PresupuestoMayorDTO();
            dto.setNombrecliente(columna[0]);
            dto.setNombredesarrollador(columna[1]);
            dto.setNombreproyecto(columna[2]);
            dtoList.add(dto);
        }
        return dtoList;
    }
}
