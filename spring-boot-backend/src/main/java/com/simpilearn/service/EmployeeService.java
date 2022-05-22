package com.simpilearn.service;

import com.simpilearn.entity.Employee;

import java.util.List;

public interface EmployeeService {

    //CREATE
    Employee saveEmployee(Employee employee);

    //READ
    List<Employee> getEmployees();
    Employee getEmployeeById(Long id);
    Employee getEmployeeByName(String firstName, String lastName);

    //UPDATE
    Employee updateEmployee(Employee employee, Long id);

    //DELETE
    Employee deleteEmployee(Long id);

}
