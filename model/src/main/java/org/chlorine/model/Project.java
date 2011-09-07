package org.chlorine.model;

import javax.persistence.*;
import javax.security.auth.callback.LanguageCallback;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

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
 Date: 31/08/11
 Time: 09:07 PM
*/

@Entity
public class Project extends SimpleAudit {

    private String name;
    private String description;
    private Set<Feature> features = new HashSet<Feature>();
    private Set<VcsRoot> vcsRoots = new HashSet<VcsRoot>();

    @NotNull
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @NotNull
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @OneToMany(orphanRemoval = true, cascade = { CascadeType.ALL })
    public Set<Feature> getFeatures() {
        return features;
    }

    public void setFeatures(Set<Feature> features) {
        this.features = features;
    }

    @OneToMany(orphanRemoval = true, cascade = { CascadeType.ALL })
    public Set<VcsRoot> getVcsRoots() {
        return vcsRoots;
    }

    public void setVcsRoots(Set<VcsRoot> vcsRoots) {
        this.vcsRoots = vcsRoots;
    }
}

