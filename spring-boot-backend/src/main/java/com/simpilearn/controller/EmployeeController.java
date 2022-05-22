package com.simpilearn.controller;


import com.simpilearn.entity.Employee;
import com.simpilearn.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping
    Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @GetMapping
    List<Employee> fetchAllEmployees() {
        return employeeService.getEmployees();
    }

    @GetMapping("/{id}")
    Employee fetchEmployee(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }

    @GetMapping("/searchByName")
    Employee searchByName(@RequestParam String firstName, @RequestParam String lastName) {
        return employeeService.getEmployeeByName(firstName, lastName);
    }

    @PutMapping("/{id}")
    Employee udpateEmployee(@RequestBody Employee employee, @PathVariable Long id) {
        return employeeService.updateEmployee(employee, id);
    }

    @DeleteMapping("/{id}")
    Employee deleteEmployee(@PathVariable Long id) {
        return employeeService.deleteEmployee(id);
    }
}
