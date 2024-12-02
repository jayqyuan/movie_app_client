import axios from 'axios';

export default axios.create({
	baseURL:'https://d80e-2603-7000-a6f0-9f90-907a-54dd-b4d1-d818.ngrok-free.app',
	headers: { 'ngrok-skip-browser-warning': 'true' },
});