package de.capyclue.calendar.repository;

import de.capyclue.calendar.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface SpringCalendarRepository extends JpaRepository<Event, String> {
    Optional<Event> findById(String id);
    List<Event> findAll();
    List<Event> findAllByUrl(String url);
    <S extends Event> List<S> saveAll(Iterable<S> entities);

}
