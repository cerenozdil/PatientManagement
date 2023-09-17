package com.hs.hasta.Service.impl;

import com.hs.hasta.Entity.Hasta;
import com.hs.hasta.Repository.HastaRepository;
import com.hs.hasta.Service.HastaService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class HastaServiceImpl implements HastaService {

    private final HastaRepository hastaRepository;

    public HastaServiceImpl(HastaRepository hastaRepository) {
        this.hastaRepository = hastaRepository;
    }

    @Override
    public Hasta save(Hasta hasta) {
        return hastaRepository.save(hasta);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Hasta> getAll() {
        return hastaRepository.findAll();
    }

    @Override
    public Optional<Hasta> get(Long id) {
        return hastaRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        hastaRepository.deleteById(id);
    }


}
