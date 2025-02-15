// Ensure Web3 is injected (e.g., MetaMask)
if (typeof window.ethereum !== 'undefined') {
    console.log("Ethereum provider detected");
    var web3 = new Web3(window.ethereum);

    // Enable Ethereum account access
    window.ethereum.request({ method: "eth_requestAccounts" }).then(accounts => {
        console.log("Connected account:", accounts[0]);
    }).catch(err => console.log(err));
} else {
    alert("Please install MetaMask to use this dApp");
}

// Contract details
const contractAddress = '0xe493d385cf0fb01c8d33c9ac3425f194387e1294'; // Replace with your contract address
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "dob",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cause",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "relief",
				"type": "string"
			}
		],
		"name": "addPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientId",
				"type": "uint256"
			}
		],
		"name": "getPatient",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "dob",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cause",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "relief",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "lastUpdated",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "updatedBy",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patients",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "dob",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cause",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "relief",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "lastUpdated",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "updatedBy",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "patientId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "dob",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cause",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "relief",
				"type": "string"
			}
		],
		"name": "updatePatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(abi, contractAddress);

// Add Patient Form Handler
document.getElementById('addPatientForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const patientId = document.getElementById('patientId').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const cause = document.getElementById('cause').value;
    const relief = document.getElementById('relief').value;

    web3.eth.getAccounts().then(accounts => {
        const account = accounts[0];
        contract.methods.addPatient(patientId, name, age, dob, cause, relief).send({ from: account })
            .on('transactionHash', function (hash) {
                alert('Transaction sent. Hash: ' + hash);
            })
            .on('receipt', function (receipt) {
                alert('Patient added successfully');
            })
            .on('error', function (error) {
                console.error(error);
            });
    });
});

// Update Patient Form Handler
document.getElementById('updatePatientForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const patientId = document.getElementById('updatePatientId').value;
    const name = document.getElementById('updateName').value;
    const age = document.getElementById('updateAge').value;
    const dob = document.getElementById('updateDob').value;
    const cause = document.getElementById('updateCause').value;
    const relief = document.getElementById('updateRelief').value;

    web3.eth.getAccounts().then(accounts => {
        const account = accounts[0];
        contract.methods.updatePatient(patientId, name, age, dob, cause, relief).send({ from: account })
            .on('transactionHash', function (hash) {
                alert('Transaction sent. Hash: ' + hash);
            })
            .on('receipt', function (receipt) {
                alert('Patient updated successfully');
            })
            .on('error', function (error) {
                console.error(error);
            });
    });
});

// Get Patient Details
document.getElementById('getPatientButton').addEventListener('click', function () {
    const patientId = document.getElementById('getPatientId').value;

    contract.methods.getPatient(patientId).call().then(result => {
        const patientDetails = `
            <p><strong>Name:</strong> ${result[0]}</p>
            <p><strong>Age:</strong> ${result[1]}</p>
            <p><strong>Date of Birth:</strong> ${result[2]}</p>
            <p><strong>Cause:</strong> ${result[3]}</p>
            <p><strong>Relief:</strong> ${result[4]}</p>
            <p><strong>Last Updated:</strong> ${new Date(result[5] * 1000).toLocaleString()}</p>
            <p><strong>Updated By:</strong> ${result[6]}</p>
        `;
        document.getElementById('patientDetails').innerHTML = patientDetails;
    }).catch(err => {
        console.error(err);
        alert('Failed to fetch patient details');
    });
});
// Made By Traj
