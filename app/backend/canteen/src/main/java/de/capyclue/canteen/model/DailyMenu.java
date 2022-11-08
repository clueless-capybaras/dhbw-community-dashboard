package de.capyclue.canteen.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class DailyMenu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
}
