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

    @Column(name = "calendarTimeFormat", nullable = true)
    private Integer calendarTimeFormat;

    @Column(name = "calendarStandardView", nullable = true)
    private String calendarStandardView;

    @Column(name = "calendarLink", nullable = true)
    //@ElementCollection(targetClass=String.class)
    //private List<String> calendarLink;
    private String calendarLink;

    @Column(name = "canteenStandardCanteen", nullable = true)
    private String canteenStandardCanteen;

    @Column(name = "canteenHighlightingActive", nullable = true)
    private Boolean canteenHighlightingActive;

    @Column(name = "canteenHighlightingColor", nullable = true)
    private String canteenHighlightingColor;

    @Column(name = "canteenHighlightingOption", nullable = true)
    private String canteenHighlightingOption;

    @Column(name = "canteenFilteringOption", nullable = true)
    private String canteenFilteringOption;

    public User(String id, String nickname, String email, String picture) {
        this.id = id;
        this.nickname = nickname;
        this.calendarTimeFormat = 24;
        this.calendarStandardView = "timeGridWeek";
        this.canteenStandardCanteen = "mensa-erzbergerstrasse";
        this.canteenHighlightingActive = false;
        this.canteenHighlightingColor = "#3aac5c";
        this.canteenHighlightingOption = "vegetarian";
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
/*
    public List<String> getCalendarLink() {
        return calendarLink;
    }

    public void setCalendarLink(List<String> calendarLink) {
        this.calendarLink = calendarLink;
    }
*/
    public String getCalendarLink() {
        return calendarLink;
    }

    public void setCalendarLink(String calendarLink) {
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

    public String getCanteenFilteringOption() {
        return canteenFilteringOption;
    }

    public void setCanteenFilteringOption(String canteenFilteringOption) {
        this.canteenFilteringOption = canteenFilteringOption;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", nickname='" + nickname + '\'' +
                ", displayName='" + displayName + '\'' +
                ", calendarTimeFormat=" + calendarTimeFormat +
                ", calendarStandardView='" + calendarStandardView + '\'' +
                ", calendarLink='" + calendarLink + '\'' +
                ", canteenStandardCanteen='" + canteenStandardCanteen + '\'' +
                ", canteenHighlightingActive=" + canteenHighlightingActive +
                ", canteenHighlightingColor='" + canteenHighlightingColor + '\'' +
                ", canteenHighlightingOption='" + canteenHighlightingOption + '\'' +
                ", canteenFilteringOption='" + canteenFilteringOption + '\'' +
                '}';
    }
}