package pe.edu.upc.awgrupo7.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.RolesDTO;
import pe.edu.upc.awgrupo7.entities.Roles;
import pe.edu.upc.awgrupo7.servicesinterfaces.IRolesService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/Roles")
public class RolesController {
    @Autowired
    private IRolesService rR;

    @GetMapping
    public List<RolesDTO> listar(){
        return rR.list().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x, RolesDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping
    public void insertar(@RequestBody RolesDTO dto) {
        ModelMapper m = new ModelMapper();
        Roles r = m.map(dto, Roles.class);
        rR.insert(r);
    }

    @GetMapping("/{id}")
    public RolesDTO listarId(@PathVariable("id") Integer id) {
        ModelMapper m = new ModelMapper();
        RolesDTO dto = m.map(rR.listId(id), RolesDTO.class);
        return dto;
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id) {
        rR.delete(id);
    }

    @PutMapping
    public void modificar(@RequestBody RolesDTO dto) {
        ModelMapper m = new ModelMapper();
        Roles r = m.map(dto, Roles.class);
        rR.insert(r);
    }

    @GetMapping("/busquedas")
    public List<RolesDTO> BuscarEjemplo(@RequestParam String n){
        return rR.buscar(n).stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x, RolesDTO.class);
        }).collect(Collectors.toList());
    }



}
