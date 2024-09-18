package pe.edu.upc.awgrupo7.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.HerramientasDTO;
import pe.edu.upc.awgrupo7.dtos.UserDTO;
import pe.edu.upc.awgrupo7.entities.Herramientas;
import pe.edu.upc.awgrupo7.servicesinterfaces.IHerramientasService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/herramientas")
public class HerramientasController {

    @Autowired
    private IHerramientasService hS;

    @PostMapping
    public void insertar(@RequestBody HerramientasDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Herramientas h = m.map(dto, Herramientas.class);
        hS.insert(h);
    }

    @GetMapping
    public List<Herramientas> listar(){
        return hS.list().stream().map(x ->{
            ModelMapper m = new ModelMapper();
            return m.map(x,Herramientas.class);
        }).collect(Collectors.toList());
    }
    @GetMapping("/buscarpornombre")
    public List<HerramientasDTO> buscarUserPorNombre(@RequestParam String nombre) {
        return hS.findByNombreHerramienta(nombre).stream()
                .map(herramienta -> new ModelMapper().map(herramienta, HerramientasDTO.class))
                .collect(Collectors.toList());
    }
}
