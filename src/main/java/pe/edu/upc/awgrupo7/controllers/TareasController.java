package pe.edu.upc.awgrupo7.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.TareasDTO;
import pe.edu.upc.awgrupo7.entities.Tareas;
import pe.edu.upc.awgrupo7.servicesinterfaces.ITareasService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tareas")
public class TareasController {

    @Autowired
    private ITareasService tS;

    @PostMapping
    public void insertar(@RequestBody TareasDTO dto){
        ModelMapper m = new ModelMapper();
        Tareas t = m.map(dto, Tareas.class);
        tS.insert(t);
    }

    @GetMapping
    public List<TareasDTO> listar(){
        return tS.list().stream().map(x ->{
            ModelMapper m = new ModelMapper();
            return m.map(x,TareasDTO.class);
        }).collect(Collectors.toList());
    }

}
