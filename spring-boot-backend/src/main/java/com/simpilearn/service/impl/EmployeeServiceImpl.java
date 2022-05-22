package com.simpilearn.service.impl;


import com.simpilearn.entity.Employee;
import com.simpilearn.repository.EmployeeRepository;
import com.simpilearn.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(Long id) {
        Optional<Employee> byId = employeeRepository.findById(id);
        if (byId.isPresent()) {
            return byId.get();
        }
        return null;
    }

    @Override
    public Employee getEmployeeByName(String firstName, String lastName) {
        return employeeRepository.findByFirstNameAndLastName(firstName, lastName);
    }

    @Override
    public Employee updateEmployee(Employee employee, Long id) {

        Optional<Employee> byId = employeeRepository.findById(id);
        if (byId.isPresent()) {
            return employeeRepository.save(employee);
        }
        return null;
    }

    @Override
    public Employee deleteEmployee(Long id) {
        Optional<Employee> byId = employeeRepository.findById(id);
        if (byId.isPresent()) {
            Employee employee = byId.get();
            employeeRepository.delete(employee);
            return employee;
        }
        return null;
    }
}
