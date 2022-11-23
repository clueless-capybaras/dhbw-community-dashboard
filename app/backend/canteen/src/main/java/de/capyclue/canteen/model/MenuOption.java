package de.capyclue.canteen.model;

import javax.persistence.*;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Entity
public class MenuOption {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Basic
    private String name;

    @Basic
    private double price;

    @Basic
    private String meatCategory;

    @ElementCollection
    private List<String> allergens;

    @ElementCollection
    private List<String> additives;

    @Basic
    private Date lastServed;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getMeatCategory() {
        return meatCategory;
    }

    public void setMeatCategory(String meatCategory) {
        this.meatCategory = meatCategory;
    }

    public List<String> getAllergens() {
        return allergens;
    }

    public void setAllergens(List<String> allergens) {
        this.allergens = allergens;
    }

    public List<String> getAdditives() {
        return additives;
    }

    public void setAdditives(List<String> additives) {
        this.additives = additives;
    }

    public Date getLastServed() {
        return lastServed;
    }

    public void setLastServed(Date lastServed) {
        this.lastServed = lastServed;
    }
}
