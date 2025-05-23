const db = require("../../utils/db");

const getAllDonations = async (req, res) => {
  const sql = `
    SELECT donations.*, categories.category_name 
    FROM donations 
    JOIN categories ON categories.category_id = donations.category_id
  `;

  try {
    const [results] = await db.promise().query(sql);
    const donation = results[0];

    if (donation.donation_date) {
      donation.donation_date = new Date(donation.donation_date)
        .toISOString()
        .split("T")[0];
    }
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).json({ error: "Failed to fetch donations" });
  }
};

module.exports = getAllDonations;
