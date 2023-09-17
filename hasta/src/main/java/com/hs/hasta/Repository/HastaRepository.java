package com.hs.hasta.Repository;

import com.hs.hasta.Entity.Hasta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HastaRepository extends JpaRepository<Hasta, Long> {
}
