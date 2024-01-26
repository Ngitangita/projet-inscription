package com.incription.inscription.service;

import com.incription.inscription.Entity.User;
import com.incription.inscription.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional

public class UserService implements CrudOperations<User, Long>{
    private final UserRepository userRepository;
    @Override
    public List<User> findAll(){
        return this.userRepository.findAll ();
    }

    @Override
    public User findById(Long id){
        return this.userRepository.findById ( id ).orElse ( null );
    }

    @Override
    public User deleteById(Long id){
       User user = this.userRepository.findById(id).orElse(null);
       if (user != null) {
         this.userRepository.deleteById(id);
       }
     return user;
    }

    @Override
    public User updateById(User toUpdate){
        User user = this.userRepository.findById(toUpdate.getId()).orElse(null);
       if (user != null) {
          return this.userRepository.save(toUpdate);
       }
      throw new RuntimeException("user not fond");
    }

    @Override
    public User save(User toSave){
        return this.userRepository.save ( toSave );
    }
}
