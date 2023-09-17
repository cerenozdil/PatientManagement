package com.hs.hasta.Entity;

import jakarta.persistence.*;
import lombok.Data;


import java.time.LocalDate;


@Entity
@Data
public class Hasta {
    @Id
    @SequenceGenerator(name = "kbs_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "kbs_seq")
    private Long id;
    private String name;
    private String lastname;
    private LocalDate birth;

}
