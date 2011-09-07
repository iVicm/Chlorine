package org.chlorine.model;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.sql.DataSource;

import org.junit.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Connection;
import java.sql.SQLException;

public class FixtureBase {
    protected User user;

    protected EntityManager entityManager;

    @PersistenceContext
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Autowired
    protected DataSource dataSource;

    public void setEntityManager(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Before
    @Transactional
    public void setUp() throws SQLException {
        Connection conn = null;
        java.sql.Statement statement = null;
        try {
            conn = dataSource.getConnection();
            statement = conn.createStatement();
            statement.execute("SET REFERENTIAL_INTEGRITY FALSE;");
            statement.execute(
                    "INSERT INTO Role (name, description, type, enabled, createDt, createUser_id, updateDt, updateUser_id, deleted) " +
                    "VALUES ('rolebase', 'role base', 0, 1, CURRENT_DATE, 1, CURRENT_DATE, 1, 0)");
            statement.execute(
                    "INSERT INTO User (username, password, createDt, createUser_id, updateDt, updateUser_id, deleted, role_id) " +
                    "VALUES ('load', 'loadpass', CURRENT_DATE, 1, CURRENT_DATE, 1, 0, 1)");
            statement.execute("SET REFERENTIAL_INTEGRITY TRUE;");

            user = entityManager.find(User.class, 1);
        } finally {
            if (statement != null && !statement.isClosed()) {
                statement.close();
            }
            if (conn != null && !conn.isClosed()) {
                conn.close();
            }
        }
    }
}
