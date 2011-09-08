package org.chlorine.model;

import java.io.Serializable;

/**

 Chlorine Project.

 This library is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.

 This library is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public
 License along with this library; if not, write to the Free Software
 Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA

 CreatedBy: trentcioran
 Date: 07/09/11
 Time: 11:33 PM
*/
public class ProjectAssignmentId implements Serializable {
    private User user;
    private Project project;

    public ProjectAssignmentId() {
    }

    public ProjectAssignmentId(User user, Project project) {
        this.user = user;
        this.project = project;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public boolean equals(Object o) {
        return ((o instanceof ProjectAssignmentId) &&
            user.getId() == ((ProjectAssignmentId)o).getUser().getId() &&
            project.getId() == ((ProjectAssignmentId)o).getProject().getId());
    }

    public int hashCode() {
        return user.hashCode() + project.hashCode();
    }
}
