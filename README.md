# Patience-Record-Management-System

This is a decentralized application (dApp) for managing patient medical records using Ethereum blockchain. The dApp allows you to:

- Add new patient records.
- Update existing patient records.
- Retrieve patient details by their unique patient ID.

The application uses Web3.js to interact with an Ethereum smart contract deployed on the Ethereum blockchain.

## Features

- **Add New Patient**: Allows a user to add a new patient's medical record including patient ID, name, age, date of birth, cause of medical issue, and relief provided.
- **Update Patient Record**: Allows a user to update an existing patient's record using the patient ID.
- **Retrieve Patient Details**: Allows a user to fetch and view a patient's details using the patient ID.

## Requirements

- **MetaMask**: To interact with the Ethereum blockchain, MetaMask is required to be installed in your browser.
- **Ethereum Node**: You must have access to an Ethereum node, such as through MetaMask or a provider like Infura.
- **Web3.js**: The Web3.js library is used to interact with the Ethereum blockchain.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Swaraj-Behera/Patience-Record-Management-System.git
Open the index.html file in your browser. Ensure that MetaMask is installed and connected to an Ethereum network.
How to Use
Adding a New Patient
Navigate to the Add New Patient section.
Fill out the form with the patient's details:
Patient ID
Name
Age
Date of Birth (YYYY-MM-DD)
Cause
Relief
Click the Add Patient button.
A MetaMask transaction prompt will appear. Confirm the transaction to add the patient to the blockchain.
Updating an Existing Patient
Navigate to the Update Patient Record section.
Enter the Patient ID of the patient you want to update.
Fill out the form with the updated patient information.
Click the Update Patient button.
A MetaMask transaction prompt will appear. Confirm the transaction to update the patient record.
Retrieving Patient Details
Navigate to the Get Patient Details section.
Enter the Patient ID and click Get Patient.
The patient's details (name, age, date of birth, cause, relief, last updated, and who updated) will appear below.
Smart Contract Details
The smart contract used in this dApp is deployed on the Ethereum blockchain. The contract has the following key functions:

addPatient: Adds a new patient record to the blockchain.
updatePatient: Updates an existing patient record using the patient ID.
getPatient: Retrieves a patient's details by patient ID.
Contract ABI and address are provided in the JavaScript code.

Technologies Used
HTML5
CSS3
JavaScript
Web3.js
Ethereum Smart Contracts (Solidity)
License
This project is licensed under the MIT License
This Project is Made by Traj
