package pe.edu.upc.awgrupo7.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.UserDTO;
import pe.edu.upc.awgrupo7.entities.User;
import pe.edu.upc.awgrupo7.servicesinterfaces.IUserService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/User")
public class UserController {
    @Autowired
    private IUserService uS;

    @PostMapping
    public void insertar(@RequestBody UserDTO dto)
    {
        ModelMapper m = new ModelMapper();
        User u = m.map(dto, User.class);
        uS.insert(u);
    }

    @GetMapping
    public List<UserDTO> listar() {

        return uS.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, UserDTO.class);
        }).collect(Collectors.toList());
    }
    @GetMapping("/BuscarPorNombre")
    public UserDTO buscarUserPorNombre(@RequestParam String nombre) {
        User user = uS.findByNombreUser(nombre); // Obtiene un solo usuario
        return new ModelMapper().map(user, UserDTO.class);
    }

}
