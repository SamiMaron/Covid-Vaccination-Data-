package com.covid.webapp.Models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "registration_data")
public class RegistrationFormData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private Date dateOfBirth;
    private String address;
    private String city;
    private String zipCode;
    private String landline;
    private String cellularPhone;
    private boolean hasCovidHistory;
    private List<String> previousConditions;

    // Constructors (including default constructor), getters, and setters

    public RegistrationFormData() {
    }

    public RegistrationFormData(String firstName, String lastName,
     Date dateOfBirth, String address, String city, String zipCode,
     String landline, String cellularPhone, boolean hasCovidHistory, List<String> previousConditions) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
        this.landline = landline;
        this.cellularPhone = cellularPhone;
        this.hasCovidHistory = hasCovidHistory;
        this.previousConditions = previousConditions;
    }

    // Getters and setters for each field

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getLandline() {
        return landline;
    }

    public void setLandline(String landline) {
        this.landline = landline;
    }

    public String getCellularPhone() {
        return cellularPhone;
    }

    public void setCellularPhone(String cellularPhone) {
        this.cellularPhone = cellularPhone;
    }

    public boolean isHasCovidHistory() {
        return hasCovidHistory;
    }

    public void setHadCovid(boolean hasCovidHistory) {
        this.hasCovidHistory = hasCovidHistory;
    }

    public List<String> getPreviousConditions() {
        return previousConditions;
    }

    public void setPreviousConditions( List<String> previousConditions) {
        this.previousConditions = previousConditions;
    }
}
