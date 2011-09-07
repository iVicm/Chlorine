package org.chlorine.model;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Chlorine Project.
 * <p/>
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * <p/>
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * <p/>
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 * <p/>
 * CreatedBy: jmislas
 * Date: 31/08/11
 * Time: 09:43 PM
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:/applicationContext.xml"})
public class ProjectMappingTest {

    protected EntityManager entityManager;

    @PersistenceContext
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Test
    @Transactional
    public void testMapping() {
        Project project = createProject();

        org.junit.Assert.assertTrue("Project id is zero.", project.getId() > 0);
        Project saved = entityManager.find(Project.class, project.getId());

        org.junit.Assert.assertEquals(project.getId(), saved.getId());
        org.junit.Assert.assertEquals(project.getName(), saved.getName());
        org.junit.Assert.assertEquals(project.getDescription(), saved.getDescription());
    }

    @Test
    @Transactional
    public void testFeaturesAssociationAdd() {
        Project project = createProject();

        project.getFeatures().add(createFeature());

        entityManager.persist(project);
        entityManager.flush();

        Project saved = entityManager.find(Project.class, project.getId());
        org.junit.Assert.assertTrue(saved.getFeatures().size() == 1);
    }

    @Test
    @Transactional
    public void testFeaturesAssociationUpdate() {
        final String updateValue = "updated feature";

        Project project = createProjectWithFeatures();
        Feature toUpdate = project.getFeatures().iterator().next();
        toUpdate.setName(updateValue);

        entityManager.persist(project);
        entityManager.flush();

        Project saved = entityManager.find(Project.class, project.getId());
        org.junit.Assert.assertTrue(saved.getFeatures().size() == 1);
        org.junit.Assert.assertTrue(saved.getFeatures().iterator().next().getName().equals(updateValue));
    }

    @Test
    @Transactional
    public void testFeaturesAssociationDelete() {
        Project project = createProjectWithFeatures();
        Feature toRemove = project.getFeatures().iterator().next();

        project.getFeatures().remove(toRemove);

        entityManager.persist(project);
        entityManager.flush();

        Project saved = entityManager.find(Project.class, project.getId());
        org.junit.Assert.assertTrue(saved.getFeatures().size() == 0);
    }

    @Test
    @Transactional
    public void testVcsRootsAssociationAdd() {
        Project project = createProject();

        project.getVcsRoots().add(createVcsRoot());

        entityManager.persist(project);
        entityManager.flush();

        Project saved = entityManager.find(Project.class, project.getId());
        org.junit.Assert.assertTrue(saved.getVcsRoots().size() == 1);
    }

    protected Project createProject() {
        final String projectName = "My project";
        final String description = "This is a test project";

        Project project = new Project();
        project.setName(projectName);
        project.setDescription(description);

        entityManager.persist(project);
        entityManager.flush();

        return project;
    }

    protected Feature createFeature() {
        Feature feature1 = new Feature();
        feature1.setName("test feature");
        feature1.setDescription("feature description");

        return feature1;
    }

    protected Project createProjectWithFeatures() {
        Project project = createProject();

        project.getFeatures().add(createFeature());

        entityManager.persist(project);
        entityManager.flush();

        return project;
    }

    protected VcsRoot createVcsRoot() {
        VcsRoot root = new VcsRoot();
        root.setName("default vcs root");
        root.setUrl("some url");

        return root;
    }
}
