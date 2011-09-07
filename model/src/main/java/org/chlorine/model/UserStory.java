package org.chlorine.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class UserStory extends SimpleAudit {

    private int id;
    private String name;
    private String description;
    private Set<TestCase> testCases = new HashSet<TestCase>();

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
    public Set<TestCase> getTestCases() {
        return testCases;
    }

    public void setTestCases(Set<TestCase> testCases) {
        this.testCases = testCases;
    }
}
