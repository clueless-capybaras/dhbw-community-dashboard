package de.capyclue.user.model;

import java.util.List;

import javax.persistence.*;

@Entity
public class User {
    @Id
    @Column(name = "id", nullable = false)
    private String id;

    @Column(name = "nickname", nullable = false)
    private String nickname;

    @Column(name = "displayName", nullable = true)
    private String displayName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "picture", nullable = false)
    private String picture;

    @Column(name = "calendarTimeFormat", nullable = false)
    private Integer calendarTimeFormat;

    @Column(name = "calendarStandardView", nullable = false)
    private String calendarStandardView;

    @Column(name = "calendarLink", nullable = true)
    @ElementCollection(targetClass=String.class)
    private List<String> calendarLink;

    @Column(name = "canteenStandardCanteen", nullable = false)
    private String canteenStandardCanteen;

    @Column(name = "canteenHighlightingActive", nullable = false)
    private Boolean canteenHighlightingActive;

    @Column(name = "canteenHighlightingColor", nullable = false)
    private String canteenHighlightingColor;

    @Column(name = "canteenHighlightingOption", nullable = false)
    private String canteenHighlightingOption;

    @Column(name = "canteenShowVegetarian", nullable = false)
    private Boolean canteenShowVegetarian;

    @Column(name = "canteenShowVegan", nullable = false)
    private Boolean canteenShowVegan;

    @Column(name = "canteenShowPork", nullable = false)
    private Boolean canteenShowPork;

    public User(String id, String nickname, String email, String picture) {
        this.id = id;
        this.nickname = nickname;
        this.email = email;
        this.picture = picture;
        this.calendarTimeFormat = 24;
        this.calendarStandardView = "timeGridWeek";
        this.canteenStandardCanteen = "mensa-erzbergerstrasse";
        this.canteenHighlightingActive = false;
        this.canteenHighlightingColor = "#3aac5c";
        this.canteenHighlightingOption = "vegetarian";
        this.canteenShowVegetarian = true;
        this.canteenShowVegan = true;
        this.canteenShowPork = true;
    }

    public User() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Integer getCalendarTimeFormat() {
        return calendarTimeFormat;
    }

    public void setCalendarTimeFormat(Integer calendarTimeFormat) {
        this.calendarTimeFormat = calendarTimeFormat;
    }

    public String getCalendarStandardView() {
        return calendarStandardView;
    }

    public void setCalendarStandardView(String calendarStandardView) {
        this.calendarStandardView = calendarStandardView;
    }

    public List<String> getCalendarLink() {
        return calendarLink;
    }

    public void setCalendarLink(List<String> calendarLink) {
        this.calendarLink = calendarLink;
    }

    public String getCanteenStandardCanteen() {
        return canteenStandardCanteen;
    }

    public void setCanteenStandardCanteen(String canteenStandardCanteen) {
        this.canteenStandardCanteen = canteenStandardCanteen;
    }

    public Boolean getCanteenHighlightingActive() {
        return canteenHighlightingActive;
    }

    public void setCanteenHighlightingActive(Boolean canteenHighlightingActive) {
        this.canteenHighlightingActive = canteenHighlightingActive;
    }

    public String getCanteenHighlightingColor() {
        return canteenHighlightingColor;
    }

    public void setCanteenHighlightingColor(String canteenHighlightingColor) {
        this.canteenHighlightingColor = canteenHighlightingColor;
    }

    public String getCanteenHighlightingOption() {
        return canteenHighlightingOption;
    }

    public void setCanteenHighlightingOption(String canteenHighlightingOption) {
        this.canteenHighlightingOption = canteenHighlightingOption;
    }

    public Boolean getCanteenShowVegetarian() {
        return canteenShowVegetarian;
    }

    public void setCanteenShowVegetarian(Boolean canteenShowVegetarian) {
        this.canteenShowVegetarian = canteenShowVegetarian;
    }

    public Boolean getCanteenShowVegan() {
        return canteenShowVegan;
    }

    public void setCanteenShowVegan(Boolean canteenShowVegan) {
        this.canteenShowVegan = canteenShowVegan;
    }

    public Boolean getCanteenShowPork() {
        return canteenShowPork;
    }

    public void setCanteenShowPork(Boolean canteenShowPork) {
        this.canteenShowPork = canteenShowPork;
    }
}