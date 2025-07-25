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

async function findCountryController(req, res) {
  const { country } = req.query;
  try {
    const ct = await regionService.findCountryService(country);
    return res.send(ct);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

async function updateRegionController(req, res) {
  try {
    const updatedRegion = req.body;
    const regionId = req.params.id;
    const response = await regionService.updateRegionService(
      updatedRegion,
      regionId
    );
    return res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteRegionController(req, res) {
  try {
    const regionId = req.params.id;
    const response = await regionService.deleteRegionService(regionId);
    return res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export default {
  createRegionController,
  findCountryController,
  updateRegionController,
  deleteRegionController,
};
