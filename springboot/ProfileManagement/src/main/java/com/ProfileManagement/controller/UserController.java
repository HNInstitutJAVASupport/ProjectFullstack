package com.ProfileManagement.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.ProfileManagement.entity.User;
import com.ProfileManagement.services.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService userService;

	@GetMapping("/getUsers")
	public Iterable<User> getUsers() {
		return userService.getAllUser();
	}

	@GetMapping("/getUser/{id}")
	public User getUser(@PathVariable Long id){
		Optional<User>userFound=userService.getUserById(id);
		if(userFound.isPresent()) {
			return userFound.get();
		}else {
			return null;
		}
	}

	@PostMapping("/createUser")
	public User createUser(@RequestBody User user){
		return userService.createUser(user);
	
	}

	@PutMapping("updateUser/{id}")
	public User updateUser(@PathVariable Long id, @RequestBody User user){
		Optional<User>userFound=userService.getUserById(id);

		if(userFound.isPresent()) {
			User toUpdate=userFound.get();
			toUpdate.setName(user.getName());
			toUpdate.setFirstName(user.getFirstName());
			toUpdate.setEmail(user.getEmail());
			toUpdate.setTypeUser(user.getTypeUser());
			return userService.createUser(toUpdate);
		}else {
			return null;
		}

	}
	
	@DeleteMapping("/deleteUser/{id}")
	public void deleteUser(@PathVariable Long id){
			userService.deleteUser(id);
	}
	

}
