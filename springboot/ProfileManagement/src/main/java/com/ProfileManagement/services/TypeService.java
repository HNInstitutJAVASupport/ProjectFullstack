package com.ProfileManagement.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProfileManagement.entity.Type;
import com.ProfileManagement.repository.TypeRepository;

@Service
public class TypeService {

	@Autowired
	private TypeRepository typeRepository;

	public Optional<Type> getTypeById(final Long id) {
		return typeRepository.findById(id);

	}

	public Iterable<Type> getAllTypes() {
		return typeRepository.findAll();
	}

	public String deleteType(final Long id) {
		typeRepository.deleteById(id);
		return null;
	}

	public Type createType(Type userType) {
		return typeRepository.save(userType);
	}

	public Optional<Type> updateType(final Long id, Type userType) {
		return typeRepository.findById(id).map(e -> {
			e.setType(userType.getType());
			return typeRepository.save(e);
		});

	}
}
