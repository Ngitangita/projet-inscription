package com.incription.inscription.controller;

import com.incription.inscription.Entity.User;
import com.incription.inscription.service.UserService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    @GetMapping("/")
    public List<User> getUsers(){
        return this.userService.findAll ();
    }

    @PostMapping("/add")
    public User createUser (@RequestBody User user){
        return this.userService.save ( user );
    }

    // 
    @PutMapping("/put")
    public User updaUser (@RequestBody User user){
        return this.userService.updateById(user);
    }
    // 

    @DeleteMapping("/delete/{id}")
    public User delete (@PathVariable Long id){
        return this.userService.deleteById(id);
    }
}
