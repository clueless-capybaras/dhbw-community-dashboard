package de.capyclue.calendar.repository;

import de.capyclue.calendar.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface SpringCalendarRepository extends JpaRepository<Event, Long> {
    Optional<Event> findById(Long id);
    List<Event> findAll();
}
