const Getproduct = async (req, res) => {
  res.status(200).json({ name: 'bhadresh', age: 20 })
}

const getdata = async (req, res) => {
  res.status(200).json({ name: 'ramesh' })
}

module.exports = { Getproduct, getdata }
