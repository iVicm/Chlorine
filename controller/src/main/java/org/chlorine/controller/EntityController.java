package org.chlorine.controller;

import org.chlorine.model.MyEntity;
import org.chlorine.service.EntityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.inject.Inject;

/**
 * Handles requests for the application home page.
 */
@Controller
public class EntityController {

	private static final Logger logger = LoggerFactory.getLogger(EntityController.class);

	@Inject
	EntityService entityService;
	
	@ModelAttribute("entity")
	public MyEntity init(@PathVariable String id) {
		return entityService.findEntity(id);
	}
	
	@RequestMapping(value="/myentity/{id}", method=RequestMethod.GET)
	public ModelAndView view(ModelAndView mv, @ModelAttribute("entity") MyEntity entity) {
		mv.addObject("entity", entity);
		mv.setViewName("entity_detail");
		logger.info("requesting /myentity");
		return mv;
	}

	@RequestMapping(value="/myentity/{id}", method=RequestMethod.POST)
	public String update(ModelAndView mv, @ModelAttribute("entity") MyEntity entity) {
	    	logger.info("updating /myentity");
		return "redirect:/myentity/"+entityService.save(entity).getId();
	}
}

