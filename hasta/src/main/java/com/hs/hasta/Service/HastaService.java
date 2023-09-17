package com.hs.hasta.Service;

import com.hs.hasta.Entity.Hasta;

import java.util.List;
import java.util.Optional;

public interface HastaService {
    Hasta save(Hasta hasta);

    List<Hasta> getAll();

    Optional<Hasta> get(Long id);

    void delete(Long id);


}