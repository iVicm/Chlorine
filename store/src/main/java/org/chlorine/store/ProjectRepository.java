package org.chlorine.store;

import org.chlorine.model.Project;
import org.chlorine.model.User;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

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
 * CreatedBy: trentcioran
 * Date: 7/09/11
 * Time: 10:48 PM
 */
public class ProjectRepository extends AbstractRepository<Project> {

    public ProjectRepository() {
        super(Project.class);
    }

    public List<Project> getUserProjects(User user) {
        return entityManager.createQuery(
                "select distinct p.project from User u join u.projects p",
                Project.class).getResultList();
    }
}
