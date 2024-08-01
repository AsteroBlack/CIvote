



const inscription = async (req, res) => {
    const nom = req.body.nom

    try {
        if (!req.files['profile'] || !req.files['nationalPic'] ||  !nom){
            return res.status(400).json({
                success: 0,
                message: 'No files uploaded && Name Not define !!!'
            })
        }
        const urlProfile = req.files['profile'] ? `http://localhost:8000/images/${req.files['profile'][0].filename}` : null
        const urlNatinalPic = req.files['nationalPic'] ? `http://localhost:8000/images/${req.files['nationalPic'][0].filename}` : null
       
        res.json({
            success: 1,
            urlProfile,
            urlNatinalPic
        })
    } catch (error) {
        res.status(404).json({
            success: 0,
            message: 'Erreu'
        })
        console.log(error)
    }
}

module.exports = {inscription}