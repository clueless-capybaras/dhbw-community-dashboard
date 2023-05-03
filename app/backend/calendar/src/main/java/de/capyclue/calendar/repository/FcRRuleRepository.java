package de.capyclue.calendar.repository;

import de.capyclue.calendar.model.FcRRule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FcRRuleRepository {
    private final IFcRRuleRepository IFcRRuleRepository;

    @Autowired
    public FcRRuleRepository(IFcRRuleRepository IFcRRuleRepository) {
        this.IFcRRuleRepository = IFcRRuleRepository;
    }

    public List<FcRRule> findAll() {
        return this.IFcRRuleRepository.findAll();
    }

    public void saveAll(List<FcRRule> eventList) {
        this.IFcRRuleRepository.saveAll(eventList);
    }
}
