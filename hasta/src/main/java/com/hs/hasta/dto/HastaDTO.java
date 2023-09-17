package com.hs.hasta.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.Instant;


@Getter
@Setter
public class HastaDTO {
    private Long id;
    private String name;
    private String lastname;;
    private Instant birth;


}
