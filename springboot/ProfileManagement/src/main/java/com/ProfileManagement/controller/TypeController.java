package com.ProfileManagement.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.ProfileManagement.entity.Type;
import com.ProfileManagement.services.TypeService;

@RestController
@RequestMapping("/typeuser")
@CrossOrigin("http://localhost:4200")
public class TypeController {

	@Autowired
	private TypeService typeService;
	
	@GetMapping("/getTypes")
	public Iterable<Type>getTypes(){
		return typeService.getAllTypes();

	}
	
	@GetMapping("/getType/{id}")
	public Type getType(@PathVariable Long id){
		Optional<Type>typeFound=typeService.getTypeById(id);
		
		if(typeFound.isPresent()) {
			return typeFound.get();
		}else {
			return null;
		}
	}
	
	@PostMapping("/createType")
	public Type createType(@RequestBody Type type){
		return typeService.createType(type);

	}
	
	@PutMapping("/updateType/{id}")
	public Type updateType(@PathVariable Long id, @RequestBody Type type){
		Optional<Type>typeFound=typeService.getTypeById(id);
		if(typeFound.isPresent()) {
			Type toUpdate=typeFound.get();
			toUpdate.setType(type.getType());
			return typeService.createType(toUpdate);
		}else {
			return null;
		}
	}
	
	@DeleteMapping("/deleteType/{id}")
	public void deleteType(@PathVariable long id){
		typeService.deleteType(id);
	}
}
