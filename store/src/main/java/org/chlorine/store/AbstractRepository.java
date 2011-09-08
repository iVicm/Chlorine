package org.chlorine.store;

import org.chlorine.model.SimpleAudit;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Date;
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
 * Time: 09:58 PM
 */
public abstract class AbstractRepository<T extends SimpleAudit> implements Repository<T> {

    protected Class<T> type;
    @PersistenceContext
    protected EntityManager entityManager;

    public AbstractRepository(Class<T> type) {
        this.type = type;
    }

    @Override
    @Transactional(readOnly = true)
    public T get(int id) {
        return entityManager.find(type, id);
    }

    @Override
    public void save(T entity) {
        entityManager.persist(entity);
    }

    @Override
    @Transactional(readOnly = true)
    public List<T> getAll() {
        return entityManager.createQuery("select o from " + type.getName() + " o")
                .getResultList();
    }

    @Override
    public void delete(T entity) {
        entity.setDeleted(true);
        entity.setDeleteDt(new Date());
        entityManager.persist(entity);
    }
}

