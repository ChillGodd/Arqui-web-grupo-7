package pe.edu.upc.awgrupo7.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.MensajesDTO;
import pe.edu.upc.awgrupo7.entities.Mensajes;
import pe.edu.upc.awgrupo7.servicesimplements.MensajesServiceImplements;
import pe.edu.upc.awgrupo7.servicesinterfaces.IMensajesService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/Mensajes")
public class MensajesController
{

    @Autowired
    private IMensajesService mS;
    @Autowired
    private MensajesServiceImplements mensajesServiceImplements;

    @PostMapping
    public void insertar(@RequestBody MensajesDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Mensajes men = m.map(dto, Mensajes.class);
        mS.insert(men);
    }

    @GetMapping
    public List<MensajesDTO> listar() {

        return mS.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, MensajesDTO.class);
        }).collect(Collectors.toList());
    }
    @GetMapping("/BuscarSololeidos")
    public List<Mensajes> obtenerMensajesLeidos() {
        return mensajesServiceImplements.obtenerMensajesLeidos();
    }

}
