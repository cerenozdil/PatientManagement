package com.hs.hasta.Controller;

import com.hs.hasta.Entity.Hasta;
import com.hs.hasta.Service.HastaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/hasta")
public class HastaController {


    private final HastaService hastaService;

    public HastaController(HastaService hastaService) {
        this.hastaService = hastaService;
    }

    @GetMapping
    public List<Hasta> getAll() {
        return hastaService.getAll();
    }

    @GetMapping("/{id}")
    public Hasta get(@PathVariable Long id) {
        return hastaService.get(id).orElseThrow(() -> new RuntimeException("Hasta bulunamadı"));
    }


    @PostMapping
    public Hasta create(@RequestBody Hasta hasta) {
        return hastaService.save(hasta);
    }



    @PutMapping
    public Hasta update(@RequestBody Hasta hasta) {
        if (hasta.getId() == null || hasta.getId() <= 0)
            throw new RuntimeException("Hasta id boş olamaz");

        return hastaService.save(hasta);
    }

    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable Long id) {
        hastaService.delete(id);
        return true;
    }
}
