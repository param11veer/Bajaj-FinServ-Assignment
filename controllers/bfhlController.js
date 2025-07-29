const {isNumber, isAlpha, alternatingCapsReverse} = require('../utils/parseData');

const FULL_NAME = 'john_doe';
const DOB = '17091999';
const EMAIL = 'john@xyz.com';
const ROLL_NUMBER = 'ABCD123';

module.export = (req, res) => {
    try{
        const data = req.body.data || [];
        let even_numbers = [];
        let odd_numbers = [];
        let alphabets = [];
        let special_characters = [];
        let all_alpha = [];
        let sum = 0;


    }
    catch (error) {
        res.json({is_success: false, error: error.message});
    }
};