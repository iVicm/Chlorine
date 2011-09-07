package org.chlorine.model;

import javax.persistence.*;
import java.util.Date;

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
 Time: 09:07 PM
*/

@Entity
public class TestCase extends SimpleAudit {

    private String name;
    private Date runDt;
    private Language language;
    private User runUser;
    private boolean lastResult;

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
