package de.capyclue.canteen.model;

import javax.persistence.*;

@Entity
public class MenuOption {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
}
