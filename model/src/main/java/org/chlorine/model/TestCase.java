package org.chlorine.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class TestCase extends SimpleAudit {

    private int id;
    private String name;
    private Date runDt;
    private Language language;
    private User runUser;
    private boolean lastResult;

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

    public Date getRunDt() {
        return runDt;
    }

    public void setRunDt(Date runDt) {
        this.runDt = runDt;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    @ManyToOne
    public User getRunUser() {
        return runUser;
    }

    public void setRunUser(User runUser) {
        this.runUser = runUser;
    }

    public boolean isLastResult() {
        return lastResult;
    }

    public void setLastResult(boolean lastResult) {
        this.lastResult = lastResult;
    }
}
