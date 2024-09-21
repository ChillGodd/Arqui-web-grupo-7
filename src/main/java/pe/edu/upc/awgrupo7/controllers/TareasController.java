package pe.edu.upc.awgrupo7.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.awgrupo7.dtos.CantidadTareasCumplidasDTO;
import pe.edu.upc.awgrupo7.dtos.TareasDTO;
import pe.edu.upc.awgrupo7.dtos.TareasPendientesDTO;
import pe.edu.upc.awgrupo7.dtos.UserNotifiacionesDTO;
import pe.edu.upc.awgrupo7.entities.Tareas;
import pe.edu.upc.awgrupo7.servicesinterfaces.ITareasService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/tareas")
@PreAuthorize("hasAuthority('admin')")
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

    @GetMapping("/cantidadtareascumplidas")
    public List<CantidadTareasCumplidasDTO> cantidadtareascumplidas() {
        List<String[]> filalista = tS.cantidadtareascumplidas();
        List<CantidadTareasCumplidasDTO> dtoList = new ArrayList<>();

        for (String[] columna : filalista) {
            CantidadTareasCumplidasDTO dto = new CantidadTareasCumplidasDTO();
            dto.setNombredesarrollador(columna[0]);
            dto.setIdTarea(Integer.parseInt(columna[1]));
            dto.setCantidad(Integer.parseInt(columna[2]));
            dtoList.add(dto);
        }

        return dtoList;
    }

    @GetMapping("/cantidadtareaspendientes")
    public List<TareasPendientesDTO>countPendingTasks(){
        List<String[]> filalista =tS.countPendingTasks();
        List<TareasPendientesDTO>dtoList=new ArrayList<>();
        for (String[] columna : filalista) {
            TareasPendientesDTO dto = new TareasPendientesDTO();
            dto.setNombredesarrollador(columna[0]);
            dto.setIdTarea(Integer.parseInt(columna[1]));
            dto.setCantidad(Integer.parseInt(columna[2]));
            dtoList.add(dto);
        }
        return dtoList;
    }


}
