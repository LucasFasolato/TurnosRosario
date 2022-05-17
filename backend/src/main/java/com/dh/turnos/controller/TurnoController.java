package com.dh.turnos.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @DeleteMapping
    public void borrarTurno(@RequestBody int id) {turnoService.borrarTurno(id);}


    @GetMapping
    public List<Turno> listarTurno() {
        return turnoService.listarTurno();
    }
}
