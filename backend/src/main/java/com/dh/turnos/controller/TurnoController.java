package com.dh.turnos.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import com.dh.turnos.model.Turno;
import com.dh.turnos.service.TurnoService;

@RestController
@RequestMapping("/turnos")
public class TurnoController {

    private TurnoService turnoService;

    public TurnoController(TurnoService turnoService) {
        this.turnoService = turnoService;
    }

    @PostMapping
    public Turno agregarTurno(@RequestBody Turno turno) {
        return turnoService.guardarTurno(turno);
    }

    
    @PutMapping(value = "/edit/{id}")
    public Turno updateTurno(@PathVariable int id, @RequestBody Turno newTurno) {
        Turno oldTurno = turnoService.getTurno(id).orElseThrow(() ->
                new Error("Turno not found for this id :: " + id));

        oldTurno.setId(newTurno.getId());
        oldTurno.setNombre(newTurno.getNombre());
        oldTurno.setFecha(newTurno.getFecha());
        oldTurno.setHora(newTurno.getHora());
        turnoService.updateTurno(oldTurno);

        return oldTurno;
    }


    @DeleteMapping(value = "/delete/{id}")
    public void borrarTurno(@PathVariable int id) {
        turnoService.borrarTurno(id);
    }

    @GetMapping
    public List<Turno> listarTurno() {
        return turnoService.listarTurno();
    }

    @GetMapping("/{id}")
    public Optional<Turno> getTurno(@PathVariable int id) {
        Optional<Turno> turno = turnoService.getTurno(id);
        return turno;
    }
}
