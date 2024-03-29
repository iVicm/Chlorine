package org.chlorine.service;

import org.chlorine.model.MyEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
public class EntityService {
	
	private static final Logger logger = LoggerFactory.getLogger(EntityService.class);
	
	@PersistenceContext
	EntityManager em;

	public void setEntityManager(EntityManager em) {
		this.em = em;
	}
	
	@Transactional(readOnly=true)
	public MyEntity findEntity(String id) {

		// Uncomment when you have defined your entity
		//
		if("new".equals(id)) {
			return new MyEntity();
		} else {
			return em.find(MyEntity.class, id);
		}
		 
		// ...meanwhile here's a fake entity (remove this when the real one is ready)
		
//		MyEntity entity = new MyEntity();
//		entity.setId("fake_id");
//		entity.setName("Fake Entity");
//		return entity;
		
	}

	@Transactional
	public MyEntity save(MyEntity entity) {

		// Once you have defined your entity in the MyEntity model object, you can
		// uncomment this code. The entity must have an id property.
		
		if (entity.getId() != null) {
			entity = em.merge(entity);
		} else {
			em.persist(entity);
		}
		logger.info("entity saved: " + em);
		return entity;

	}
	
	@Transactional
	public boolean delete(String entityId) {
		MyEntity entity = em.find(MyEntity.class, entityId);
		if(entity==null) {
			return false;
		}
		em.remove(entity);
		return true;
	}

}
