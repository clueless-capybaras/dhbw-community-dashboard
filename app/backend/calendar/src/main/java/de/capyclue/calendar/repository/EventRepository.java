package de.capyclue.calendar.repository;

import de.capyclue.calendar.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.net.URL;
import java.util.List;

@Repository
public class EventRepository {
    private final IEventRepository IEventRepository;

    @Autowired
    public EventRepository(IEventRepository IEventRepository) {
        this.IEventRepository = IEventRepository;
    }

    public List<Event> findAll() {
        return this.IEventRepository.findAll();
    }

    public void saveAll(List<Event> eventList) {
        this.IEventRepository.saveAll(eventList);
    }

    public List<Event> findAllByUrl(URL url) {
        return this.IEventRepository.findAllByUrl(url.toString());
    }
}
