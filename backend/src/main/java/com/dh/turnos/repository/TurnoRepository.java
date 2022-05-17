package com.dh.turnos.repository;

import com.dh.turnos.model.Turno;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TurnoRepository extends MongoRepository<Turno,Integer> {

}
