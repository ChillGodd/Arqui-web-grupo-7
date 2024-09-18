package pe.edu.upc.awgrupo7.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.RevisionesDTO;
import pe.edu.upc.awgrupo7.entities.Revisiones;
import pe.edu.upc.awgrupo7.servicesinterfaces.IRevisionesService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/revisiones")
public class RevisionesController {

    @Autowired
    private IRevisionesService rS;

    @PutMapping
    public void insertar(@RequestBody RevisionesDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Revisiones r = m.map(dto, Revisiones.class);
        rS.insert(r);
    }
    @GetMapping
    public List<Revisiones> listar()
    {
        return rS.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, Revisiones.class);
        }).collect(Collectors.toList());
    }
}
