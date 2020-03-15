package com.slokam.pro.entity; 
 import java.io.Serializable; 
 import javax.persistence.*; 
 import java.util.*; 
@Entity 
public class Designation implements Serializable { 

@Id 
 @GeneratedValue 
  private Integer  id;
  private String  lastName;
public Integer getId() {
		return id;
	}
public void setId(Integer id) {
		this.id = id;
	}
public String getLastName() {
		return lastName;
	}
public void setLastName(String lastName) {
		this.lastName = lastName;
	}
}