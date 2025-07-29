const {
  isNumber,
  isAlpha,
  alternatingCapsReverse,
} = require("../utils/parseData");

const FULL_NAME = "paramveer_singh_udawat";
const DOB = "03112003";
const EMAIL = "paramveer2019.be22@chitkara.edu.in";
const ROLL_NUMBER = "2210992019";

module.export = (req, res) => {
  try {
    const data = req.body.data || [];
    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let all_alpha = [];
    let sum = 0;

    data.forEach((item) => {
      let strItem = String(item);
      if (isNumber(strItem)) {
        let num = parseInt(strItem);
        sum += num;
        (num % 2 === 0 ? even_numbers : odd_numbers).push(strItem);
      } else if (isAlpha(strItem)) {
        alphabets.push(strItem.toUpperCase());
        all_alpha.push(...strItem);
      } else {
        special_characters.push(strItem);
      }
    });

    const concat_string = alternatingCapsReverse(all_alpha.join(""));

    res.json({
      is_success: true,
      user_id: FULL_NAME.toLowerCase() + "_" + DOB,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sum),
      concat_string,
    });
  } catch (error) {
    res.json({ is_success: false, error: error.message });
  }
};
