package com.ProfileManagement.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProfileManagement.entity.User;
import com.ProfileManagement.repository.UserRepository;


@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public Optional<User> getUserById(final Long id) {
		return userRepository.findById(id);
	}

	public Iterable<User> getAllUser() {
		return userRepository.findAll();
	}

	public String deleteUser(final Long id) {
		userRepository.deleteById(id);
		return null;
	}

	public User createUser(User user) {
		return userRepository.save(user);
	}

	public Optional<User> updateUser(final Long id, User user) {

		return userRepository.findById(id).map(e -> {
			e.setTypeUser(user.getTypeUser());
			e.setName(user.getName());
			e.setTypeUser(user.getTypeUser());
			e.setEmail(user.getEmail());
			return userRepository.save(e);
		});
	}
}
