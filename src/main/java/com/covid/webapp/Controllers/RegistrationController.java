package com.covid.webapp.Controllers;
import com.covid.webapp.Models.RegistrationFormData;
import com.covid.webapp.Repositories.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {
    private final RegistrationRepository registrationRepository;

    @Autowired
    public RegistrationController(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    @GetMapping("/covidData")
    public List<RegistrationFormData> getAllCovidData() {
        return registrationRepository.findAll();
    }

    @PostMapping("/saveFormData")
    public ResponseEntity <RegistrationFormData> saveFormData(@RequestBody RegistrationFormData formData) {
        RegistrationFormData savedData = registrationRepository.save(formData);
        return ResponseEntity.ok(savedData); 
    }

   
}

