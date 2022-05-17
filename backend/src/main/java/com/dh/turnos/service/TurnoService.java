package com.dh.turnos.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.dh.turnos.model.Turno;
import com.dh.turnos.repository.TurnoRepository;
@Service
public class TurnoService {
    private int id;
    private TurnoRepository turnoRepository;

    public TurnoService(TurnoRepository turnoRepository) {
        this.turnoRepository =  turnoRepository;
    }
    public Optional<Turno> getTurno(int id) {
        return turnoRepository.findById(id);
    }

    public Turno guardarTurno(Turno turno){
        return turnoRepository.save(turno);
    }

    public Turno updateTurno(Turno turno) {
        return turnoRepository.save(turno);
    }

    public void borrarTurno(int id){
        turnoRepository.deleteById(id);
    }

    public List<Turno> listarTurno(){
        return turnoRepository.findAll();
    }

    public Optional<Turno> listarMiTurno(int id){
        return turnoRepository.findById(id);
    }
}
