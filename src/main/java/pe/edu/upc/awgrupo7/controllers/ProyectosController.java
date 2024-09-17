package pe.edu.upc.awgrupo7.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.ProyectosDTO;
import pe.edu.upc.awgrupo7.entities.Proyectos;
import pe.edu.upc.awgrupo7.servicesinterfaces.IProyectosService;

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
}
