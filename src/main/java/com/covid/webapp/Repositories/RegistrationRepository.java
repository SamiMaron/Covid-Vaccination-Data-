package com.covid.webapp.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.covid.webapp.Models.RegistrationFormData;

@Repository
public interface RegistrationRepository extends JpaRepository<RegistrationFormData, Long> {
    // Custom repository methods, if needed
}