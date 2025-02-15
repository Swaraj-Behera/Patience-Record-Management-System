// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalRecordSystem {
    struct Patient {
        string name;
        uint age;
        string dob;
        string cause;
        string relief;
        uint lastUpdated;  // Timestamp of the last update
        address updatedBy; // Address of the account that updated the record
    }

    mapping(uint => Patient) public patients; 
    address public owner;

    constructor() {
        owner = msg.sender; 
    }

    // Function to add a new patient
    function addPatient(
        uint patientId, 
        string memory name, 
        uint age, 
        string memory dob, 
        string memory cause, 
        string memory relief
    ) public {
        require(bytes(patients[patientId].name).length == 0, "Patient ID already exists.");

        patients[patientId] = Patient({
            name: name,
            age: age,
            dob: dob,
            cause: cause,
            relief: relief,
            lastUpdated: block.timestamp,  // Store the current timestamp
            updatedBy: msg.sender // Store the address of the account performing the update
        });
    }

    // Function to update an existing patient's record
    function updatePatient(
        uint patientId, 
        string memory name, 
        uint age, 
        string memory dob, 
        string memory cause, 
        string memory relief
    ) public {
        require(bytes(patients[patientId].name).length != 0, "Patient ID does not exist.");
        
        patients[patientId] = Patient({
            name: name,
            age: age,
            dob: dob,
            cause: cause,
            relief: relief,
            lastUpdated: block.timestamp,  // Update the timestamp
            updatedBy: msg.sender // Update the address of the account performing the update
        });
    }

    // Function to get patient details by patient ID
    function getPatient(uint patientId) public view returns (
        string memory name, 
        uint age, 
        string memory dob, 
        string memory cause, 
        string memory relief, 
        uint lastUpdated, 
        address updatedBy
    ) {
        Patient memory p = patients[patientId];
        return (p.name, p.age, p.dob, p.cause, p.relief, p.lastUpdated, p.updatedBy);
    }
}

// This is made by Traj
