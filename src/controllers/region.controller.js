import regionService from "../services/region.service.js";

async function createRegionController(req, res) {
  const newRegion = req.body;

  try {
    const createdRegion = await regionService.createRegionService(newRegion);
    res.status(201).send(createdRegion);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function findAllRegionsController(req, res) {
  try {
    const regions = await regionService.findAllRegionService();
    return res.send(regions);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

export default { createRegionController, findAllRegionsController };
