package org.chlorine.model;

import javax.persistence.*;
import java.util.Date;

public class SimpleAudit {

    private int id;
    private Date createDt;
    private User createUser;
    private Date updateDt;
    private User updateUser;
    private Date deleteDt;
    private User deleteUser;
    private boolean deleted;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getCreateDt() {
        return createDt;
    }

    public void setCreateDt(Date createDt) {
        this.createDt = createDt;
    }

    @ManyToOne
    public User getCreateUser() {
        return createUser;
    }

    public void setCreateUser(User createUser) {
        this.createUser = createUser;
    }

    public Date getUpdateDt() {
        return updateDt;
    }

    public void setUpdateDt(Date updateDt) {
        this.updateDt = updateDt;
    }

    @ManyToOne
    public User getUpdateUser() {
        return updateUser;
    }

    public void setUpdateUser(User updateUser) {
        this.updateUser = updateUser;
    }

    public Date getDeleteDt() {
        return deleteDt;
    }

    public void setDeleteDt(Date deleteDt) {
        this.deleteDt = deleteDt;
    }

    @ManyToOne
    public User getDeleteUser() {
        return deleteUser;
    }

    public void setDeleteUser(User deleteUser) {
        this.deleteUser = deleteUser;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
}
