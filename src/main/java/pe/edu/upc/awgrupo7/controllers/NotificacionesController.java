package pe.edu.upc.awgrupo7.controllers;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.NotificacionesDTO;
import pe.edu.upc.awgrupo7.entities.Notificaciones;
import pe.edu.upc.awgrupo7.servicesinterfaces.INotificacionesService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/Notificaciones")
@PreAuthorize("hasAuthority('admin')")
public class NotificacionesController {

    @Autowired
    private INotificacionesService nT;

    @PostMapping
    public void insertar(@RequestBody NotificacionesDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Notificaciones noti = m.map(dto, Notificaciones.class);
        nT.insert(noti);
    }

    @GetMapping
    public List<NotificacionesDTO> listar()
    {

        return nT.list().stream().map(x ->
        {
            ModelMapper m = new ModelMapper();
            return m.map(x, NotificacionesDTO.class);
        }).collect(Collectors.toList());
    }

}
