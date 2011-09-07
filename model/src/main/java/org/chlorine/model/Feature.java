package org.chlorine.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Feature extends SimpleAudit {

    private int id;
    private String name;
    private String description;
    private Set<UserStory> userStories = new HashSet<UserStory>();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @OneToMany
    public Set<UserStory> getUserStories() {
        return userStories;
    }

    public void setUserStories(Set<UserStory> userStories) {
        this.userStories = userStories;
    }
}
