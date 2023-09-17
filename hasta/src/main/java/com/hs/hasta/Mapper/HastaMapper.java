package com.hs.hasta.Mapper;


import com.hs.hasta.Entity.Hasta;
import com.hs.hasta.dto.HastaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;


@Mapper
public interface HastaMapper {

    HastaMapper MAPPER = Mappers.getMapper(HastaMapper.class);

    Hasta toEntity(HastaDTO dto);

    HastaDTO toDto(Hasta entity);
}
