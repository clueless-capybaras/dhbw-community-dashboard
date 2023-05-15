package de.capyclue.calendar.repository;

import de.capyclue.calendar.model.FcRRule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IFcRRuleRepository extends JpaRepository<FcRRule, String> {
    Optional<FcRRule> findByUuid(String uuid);
    List<FcRRule> findAll();
    <S extends FcRRule> List<S> saveAll(Iterable<S> entities);
}
