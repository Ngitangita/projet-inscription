package com.incription.inscription.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column
    @Basic
    private Long id;

    @Column(length = 150, nullable = false)
    @Basic
    private String username;

    @Column
    @Basic
    private String email;

    @Column
    @Basic
    private String password;

    @Column(nullable = false)
    @Basic
    @Enumerated(EnumType.STRING)
    private Sex sex;

}
