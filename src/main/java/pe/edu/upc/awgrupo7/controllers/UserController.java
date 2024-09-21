package pe.edu.upc.awgrupo7.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.UserDTO;
import pe.edu.upc.awgrupo7.dtos.UserNotifiacionesDTO;
import pe.edu.upc.awgrupo7.entities.User;
import pe.edu.upc.awgrupo7.servicesinterfaces.IUserService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/User")
@PreAuthorize("hasAuthority('admin')")
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

    @GetMapping("/cantidadnotificaionesuser")
    public List<UserNotifiacionesDTO>findUserWithMostNotifications(){
        List<String[]> lista=uS.findUserWithMostNotifications();
        List<UserNotifiacionesDTO>listaDTO=new ArrayList<>();
        for(String[] columna:lista){
            UserNotifiacionesDTO dto=new UserNotifiacionesDTO();
            dto.setNombreUsuario(columna[0]);
            dto.setCantidadNotificaciones(Integer.parseInt(columna[1]));
            listaDTO.add(dto);
        }
        return listaDTO;
    }

}
