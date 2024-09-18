package pe.edu.upc.awgrupo7.controllers;


import jakarta.persistence.Access;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.HostingDTO;
import pe.edu.upc.awgrupo7.entities.Hosting;
import pe.edu.upc.awgrupo7.servicesinterfaces.IHostingService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/hosting")
public class HostingController {

    @Autowired
    private IHostingService hS;

    @PostMapping
    public void insertar(@RequestBody HostingDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Hosting h = m.map(dto, Hosting.class);
        hS.insert(h);
    }

    @GetMapping
    public List<Hosting> listar(){
        return hS.list().stream().map(x ->{
            ModelMapper m = new ModelMapper();
            return m.map(x, Hosting.class);
        }).collect(Collectors.toList());
    }
    @GetMapping("/BuscarPorTipo")
    public List<HostingDTO> buscarPorTipo(@RequestParam String tipo) {
        List<Hosting> hostings = hS.findByTipo(tipo);
        List<HostingDTO> hostingDTOs = new ArrayList<>();
        ModelMapper m = new ModelMapper();
        for (Hosting hosting : hostings) {
            hostingDTOs.add(m.map(hosting, HostingDTO.class));
        }
        return hostingDTOs;
    }

}
